export async function GET() {
    const baseUrl = "https://www.globalcoinart.com"; // Change this to your domain
  
    const staticPages = [
      "/", 
      "/about", 
      "/exhibit", 
      "/contribute" ,
      "/contact" // Add more pages if needed

    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  