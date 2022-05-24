class FooterBar extends HTMLElement { 
     connectedCallback() {
       this.render();
     }
   
     render() {
       this.shadowDOM.innerHTML = `
     <div class="footer-bar">
        <div class="footer-content">
          <div class="customer-service">
            <h5>Layanan Pelanggan</h5>
            <ul>
              <li class="cs-link"><a href="">Bantuan</a></li>
              <li class="cs-link"><a href="">Metode Pembayaran</a></li>
              <li class="cs-link"><a href="">Lacak Pesanan</a></li>
              <li class="cs-link"><a href="">Hubungi Kami</a></li>
            </ul>
          </div>
          <div class="about-us">
            <h5>Jelajahi X-STORE</h5>
            <ul>
              <li class="au-link"><a href="">Tentang Kami</a></li>
              <li class="au-link"><a href="">Panduan Penggunaan</a></li>
            </ul>
          </div>
          <div class="follow-us">
            <h5>Ikuti Kami</h5>
            <ul class="follow-us-link">
              <li>
                <i class="fa-brands fa-facebook"></i
                ><a href="" class="footer-link">Facebook</a><br />
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i
                ><a href="" class="footer-link">Instagram</a><br />
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i
                ><a href="" class="footer-link">Youtube</a><br />
              </li>
              <li>
                <i class="fa-brands fa-tiktok"></i
                ><a href="" class="footer-link">TikTok</a><br />
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-copy">
          <p class="footer-bar-copy">
            Copyright &copy; 2022 - X-STORE
          </p>
        </div>
      </div>`;
     }
}

customElements.define("footer-bar", FooterBar);