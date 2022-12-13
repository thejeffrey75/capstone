import html from "html-literal";

export default links => html`
  <nav id="nav-1">
  <a class="link-1" href="Shop">Shop</a>
  <a class="link-1" href="Home">Home</a>
  <a class="link-1" href="Articles">Articles</a>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <!-- ${links
        .map(
          link=>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul> -->
  </nav>
`;
//Needs Revision
