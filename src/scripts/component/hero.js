class Hero extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div>
        <section class="container-hero" id="#home">
        <div class="hero-list">
            <h2>Terkadang, kebahagiaan itu manis seperti sepotong cookies.</h2>
            <p>Selamat datang di Isfa Nusantara, tempat di mana setiap gigitan adalah petualangan rasa. Mari merasakan
            kelezatan yang tiada tara bersama kami!.</p>    
        </div>
        </section>
     </div>
     
        `;
  }
}
customElements.define('hero-element', Hero);
