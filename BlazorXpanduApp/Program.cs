using BlazorXpanduApp.Components;

var builder = WebApplication.CreateBuilder(args);

// Add Syncfusion services
builder.Services.AddSyncfusionBlazor();

// Add Xpandu service
builder.Services.AddScoped<XpanduService>();

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
