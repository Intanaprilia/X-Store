class AppBar extends HTMLElement {
     constructor() {
       super();
       this.shadowDOM = this.attachShadow({ mode: "open" });
     }
   
     connectedCallback() {
       this.render();
     }
   
     render() {
       this.shadowDOM.innerHTML = `
       <div class="app-bar">
      <div class="container-navbar">

        <div class="navbar-spacer">

        </div>
        <nav id="navigation-drawer" class="app-bar-navigation">
          <ul class="nav-bar">
            <li class="nav-item">
              <a class="nav-link" href="https://www.google.com">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Notification</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Help Center</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="app-bar-with-search">
        <div class="app-bar-brand">
          <p class="app-bar-brand">X-STORE</p>
        </div>
        <div class="search-bar">
          <div class="search-bar-main">
            <form role="search" class="search-bar-input"></form>
            <input type="text" placeholder="Search..." name="search">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="search-popular-word">
            <a href="">test</a>
            <a href="">test</a>
            <a href="">test</a>
            <a href="">test</a>
            <a href="">test</a>
            <a href="">test</a>
            <a href="">test</a>
            <a href="">test</a>
          </div>
        </div>
        <div class="app-bar-cart">
          <i class="fa-solid fa-cart-shopping fa-3x"></i>
        </div>
        
      </div>
    </div>`;
     }
   }
   
   customElements.define("app-bar", AppBar);