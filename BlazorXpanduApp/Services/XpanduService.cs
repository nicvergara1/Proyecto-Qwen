using System.Text;
using System.Text.Json;
using Newtonsoft.Json.Linq;

namespace BlazorXpanduApp.Services;

public class XpanduService
{
    private readonly HttpClient _httpClient;
    
    // Credenciales de XpandU (proporcionadas por el usuario)
    private const string XpanduEndpoint = "https://api.xpandu.io/serve/86b3c1ac-d1ca-4920-a1b4-926da7d403c4/v1/chat/completions";
    private const string XpanduApiKey = "2ed5c52392dda56cc87b04352f1d988f0a8b57f841b3712e111463d96f0f0740";

    public XpanduService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<ResultadoAnalisis> AnalizarImagenAsync(string imagenBase64, string prompt)
    {
        // Preparar el mensaje con la imagen en formato base64
        var messages = new List<object>
        {
            new
            {
                role = "user",
                content = new object[]
                {
                    new { type = "text", text = prompt },
                    new 
                    { 
                        type = "image_url",
                        image_url = new { url = $"data:image/jpeg;base64,{imagenBase64}" }
                    }
                }
            }
        };

        var requestBody = new
        {
            model = "default",
            messages = messages,
            max_tokens = 2000,
            temperature = 0.7
        };

        var jsonRequest = JsonSerializer.Serialize(requestBody, new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        });

        // Configurar el request HTTP
        using var request = new HttpRequestMessage(HttpMethod.Post, XpanduEndpoint);
        request.Headers.Add("Authorization", $"Bearer {XpanduApiKey}");
        request.Content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");

        // Enviar request
        var response = await _httpClient.SendAsync(request);
        
        if (!response.IsSuccessStatusCode)
        {
            var errorContent = await response.Content.ReadAsStringAsync();
            throw new Exception($"Error de XpandU API ({response.StatusCode}): {errorContent}");
        }

        var responseBody = await response.Content.ReadAsStringAsync();
        var jsonResponse = JObject.Parse(responseBody);

        // Extraer contenido y razonamiento si existe
        var choice = jsonResponse["choices"]?[0]?["message"];
        var contenido = choice?["content"]?.ToString() ?? "No se pudo obtener el análisis";
        var razonamiento = choice?["reasoning_content"]?.ToString();

        return new ResultadoAnalisis
        {
            Contenido = contenido,
            Razonamiento = razonamiento
        };
    }
}

public class ResultadoAnalisis
{
    public string Contenido { get; set; } = "";
    public string? Razonamiento { get; set; }
}
