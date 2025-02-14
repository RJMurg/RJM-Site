export async function GET() {
	const body = sitemap();
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

    <url>
        <loc>https://rjm.ie/</loc>
        <lastmod>2024-11-02T23:39:39+00:00</lastmod>
        <priority>1.00</priority>
    </url>

    <url>
        <loc>https://rjm.ie/portfolio</loc>
        <lastmod>2024-11-02T23:39:39+00:00</lastmod>
        <priority>0.80</priority>
    </url>

    <url>
        <loc>https://rjm.ie/experience</loc>
        <lastmod>2024-11-02T23:39:39+00:00</lastmod>
        <priority>0.80</priority>
    </url>

</urlset>`;
