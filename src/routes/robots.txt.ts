export async function get({ host }) {
  return {
    headers: {
      'Content-Type': 'text/plain',
    },
    body: `User-agent: *
Allow: /
Sitemap: https://${host}/sitemap.xml`,
  };
}