---
import Layout from "../../layouts/Layout.astro";
---

<Layout title="Your Title" twoColumn={true}>
  <div>
    <!-- Your content as markdown or HTML -->
  </div>

  <aside slot="sidebar">
    <h3>Sidebar</h3>
    <!-- Sidebar content -->
  </aside>
</Layout>

or markdown: --- layout: ../../layouts/Layout.astro title: Your Page Title
twoColumn: true --- import Layout from '../../layouts/Layout.astro';

<Layout title="Your Title" twoColumn={true}>
  <div>Your main markdown content here</div>

  <div slot="sidebar">## Sidebar Content - Links - Related info - etc.</div>
</Layout>
