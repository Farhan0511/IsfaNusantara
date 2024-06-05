class AppBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>Isfa<span>Nusantara</span></h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#/like">Favorite</a></li>
            <li><a href="https://www.instagram.com/farhan_ansyah/">About Us</a></li>
            </ul>
        </nav>
      </header>
      
      `;
  }
}
customElements.define('app-bar', AppBar);
