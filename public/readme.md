# <https://docs.astro.build/en/basics/project-structure/#public>

- The public/ directory is for files and assets in your project that do not need
  to be processed during Astro’s build process. The files in this folder will be
  copied into the build folder untouched, and then your site will be built.

- This behavior makes public/ ideal for common assets that do not require any
  processing, like some images and fonts, or special files such as robots.txt
  and manifest.webmanifest.

- You can place CSS and JavaScript in your public/ directory, but be aware that
  those files will not be bundled or optimized in your final build.

- <https://docs.astro.build/en/guides/images/#where-to-store-images> has "We
  recommend that local images are kept in src/ when possible so that Astro can
  transform, optimize, and bundle them. Files in the public/ directory are
  always served or copied into the build folder as-is, with no processing."
