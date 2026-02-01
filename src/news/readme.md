# <https://docs.astro.build/en/guides/routing/#dynamic-routes>

- An Astro page file can specify dynamic route parameters in its filename to
  generate multiple, matching pages. For example,
  src/pages/authors/[author].astro generates a bio page for every author on your
  blog. author becomes a parameter that you can access from inside the page.

## News directory structure

src/news - Contains your actual news content (the markdown files: post-1.md,
post-3.md, website.md, etc.) and images

src/pages/news - Contains the Astro page templates (index.astro and
[...slug].astro) that display the news content The content collection in
content.config.ts reads from news, and the page templates in news render that
content. Both are required for the news section to work properly.
