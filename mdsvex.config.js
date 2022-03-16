import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import abbr from "remark-abbr"
import urls from "rehype-urls"
import slug from "rehype-slug"
import autoLinkHeadings from "rehype-autolink-headings"
import addClasses from "rehype-add-classes"
import prism from "remark-prism"

function processUrl(url, node) {
  if (node.tagName === "a") {
    node.properties.class = "link"
    
    if (!url.href.startsWith("/")) {
      // Open external links in new tab
      node.properties.target = "_blank"
      // Fix a security concern with offsite links
      // See: https://web.dev/external-anchors-use-rel-noopener/
      node.properties.rel = "noopener"
    }
  }
}

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],
  layout: './src/routes/blogi/_layout.svelte',
  smartypants: true,

  remarkPlugins: [abbr],
  rehypePlugins: [
    [urls, processUrl], // adds rel and target to <a> elements
    slug, // adds slug to <h1>-<h6> elements
    prism,
    [autoLinkHeadings, { behavior: "wrap" }], // adds a <a> around slugged <h1>-<h6> elements
    [addClasses, { "ul,ol": "list", "h1,h2,h3,h4,h5,h6": "blog-title" }] // add classes to these elements
  ]
});

export default config;
