import ROUTES from '$lib/static/routes';

const host = "https://ardemedia.fi"
export async function get() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }

  const pages = [
    ROUTES.home, 
    ROUTES.development,
    ROUTES.design, 
    ROUTES.about, 
    ROUTES.portfolio, 
    ROUTES.blog, 
    ROUTES.contact, 
    ROUTES.cookies, 
  ]

  const posts = await Promise.all(Object.entries(import.meta.glob('./blogi/*.md')).map(async ([path, page]) => {
    const { metadata } = await page();
    const slug = path.split('/').pop().split('.').shift();
    return {
      slug,
      created: metadata.created
    };
  }))

  return {
    headers,
    body: render(pages, posts),
  }
}

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${pages.map(page => `<url>
  <loc>${host + page}</loc>
  <lastmod>2022-03-08</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.00</priority>
</url>`
).join('')}
${posts.map(post => `<url>
  <loc>${host + ROUTES.blog + "/" + post.slug}</loc>
  <lastmod>${new Date(post.created).toLocaleDateString('en-CA')}</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.00</priority>
</url>`
).join('')}
</urlset>`