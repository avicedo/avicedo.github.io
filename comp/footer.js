class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="mt-20 bg-emerald-700 text-gray-100">
        <div class="flex justify-evenly">
          <div class="mt-6">
            <h1 class="text-lg md:text-xl lg:text-2xl">Ayuda</h1>
              <ul class="ml-4 text-sm leading-6 md:text-lg lg:text-xl" >
                <li class="hover:text-gray-300"><a href="./about.html">Sobre mí</a></li>
                <li class="hover:text-gray-300"><a href="./licence.html">Licencias</a></li>
                <li class="hover:text-gray-300"><a href="./faq.html">F.A.Q.</a></li>
              </ul>
          </div>
          <div class="mt-6">
            <h1 class="text-lg md:text-xl lg:text-2xl">Networking</h1>
            <ul class="ml-4 text-sm leading-6 md:text-lg lg:text-xl">
              <li class="hover:text-gray-300"><a href="https://www.instagram.com/andreu_vicedo/">Instagram</a></li>
              <li class="hover:text-gray-300"><a href="https://www.behance.net/andreuvicedo">Behance</a></li>
              <li class="hover:text-gray-300"><a href="https://www.linkedin.com/in/avicedo/">LinkedIn</a></li>
            </ul>
          </div>
          <div class="mt-6">
            <a class="text-center hover:text-gray-300" href="#top">
              <p class="text-lg md:text-xl lg:text-2xl">P'arriba</p>
              <p class="text-4xl md:text-6xl">↑</p>
            </a>
          </div>
        </div>
        <div class="text-center mt-6">
          <p>Web desarrollada por mí usando Tailwindcss</p>
        </div>
      </div>
      `;
    }
  }
  
  customElements.define('footer-comp', Footer);
  