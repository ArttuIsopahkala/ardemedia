import ROUTES from '$lib/static/routes';

interface PostSite {
  slug: string,
  created: string
}

const host = "https://ardemedia.fi"
export async function get() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }

  const pages = new Map<string, string>([
    [ROUTES.home, "2022-04-06"],
    [ROUTES.development, "2022-03-21"],
    [ROUTES.design, "2022-03-21"],
    [ROUTES.about, "2022-03-21"],
    [ROUTES.portfolio, "2022-04-06"],
    [ROUTES.blog, "2022-04-06"],
    [ROUTES.contact, "2022-04-06"],
    [ROUTES.cookies, "2022-03-21"],
  ]);

  const posts: PostSite[] = await Promise.all(Object.entries(import.meta.glob('./blogi/*.md')).map(async ([path, page]) => {
    const { metadata } = await page();
    const slug = path.split('/').pop().split('.').shift();
    const item: PostSite = {
      slug,
      created: metadata.created
    };
    return item;
  }))

  return {
    headers,
    body: render(pages, posts),
  }
}

const render = (pages: Map<string, string>, posts: PostSite[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${renderPages(pages).join('')}
${posts.map(post => `<url>
  <loc>${host + ROUTES.blog + "/" + post.slug}</loc>
  <lastmod>${new Date(post.created).toLocaleDateString('en-CA')}</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.00</priority>
</url>`
).join('')}
</urlset>`

const renderPages = (pages: Map<string, string>): string[] => {
  let result: string[] = []
  for (let [page, modified] of pages) {
    result.push(`<url>
      <loc>${host + page}</loc>
      <lastmod>${modified}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.00</priority>
    </url>`)
  }
  return result;
}
