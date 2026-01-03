export function renderHeader() {
  return `
    <header>
      <div class="container nav">
        <div class="logo">
          <strong>V SIGN</strong>
        </div>

        <nav class="nav-links" id="menu">
          <a href="index.html">Home</a>
          <a href="products.html">Products</a>
          <a href="gallery.html">Projects</a>
          <a href="faq.html">Insights</a>
          <a href="contact.html">Contact</a>
          <button class="btn" onclick="openPlanner()">
            Plan Budget
          </button>
        </nav>

        <div class="hamburger" id="hamburger">
          ☰
        </div>
      </div>
    </header>
  `;
}
