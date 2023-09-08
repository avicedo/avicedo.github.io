class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="mb-4 mt-2" id="top">
        <nav class="row-span-1">
          <div class="hidden md:flex justify-end">
            <div class="mr-8 mt-4">
              <p> <a class="underline" href="../index.html">ES</a> / <a href="../en/index.html">EN</a> / <a href="../valcat/index.html">VAL-CAT</a></p>
            </div>
          </div>
          <div class="hidden md:flex justify-evenly whitespace-nowrap text-lg font-neuemontrealmedium uppercase">
            <a href="../index.html" class="link2 mr-8 mt-9 hover:bg-emerald-700 rounded-full px-3 py-2">Inicio</a>
            <a href="../about.html#services" class="link2 mr-8 mt-9 hover:bg-emerald-700 rounded-full px-3 py-2">Servicios</a>
            <a href="../proj.html" class="link2 mr-8 mt-9 hover:bg-emerald-700 rounded-full px-3 py-2">Proyectos</a>
            <a href="../about.html" class="link2 mr-8 mt-9 hover:bg-emerald-700 rounded-full px-3 py-2">Sobre mí</a>
          </div>
          
          <div class="flex md:hidden justify-center">
            <div class="w-10/12 flex">
              <div class="flex md:hidden justify-start w-1/2 mt-4 text-base">
                <div class="mr-2">
                  <p> <a class="underline" href="../index.html">ES</a> / <a href="../en/index.html">EN</a> / <a href="../valcat/index.html">VAL-CAT</a></p>
                </div>
              </div>
              <div class="flex justify-end w-1/2 mt-2">
                <button type="button" data-dropdown-toggle="dropdown">
                  <svg
                    class="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
                <div class="hidden text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
                  <div class="">
                    <ul class="py-1 block justify-start bg-gray-50" aria-labelledby="dropdown">
                      <li class>
                          <a href="../index.html" class="text-lg block px-4 py-2 text-gray-600 hover:underline decoration-emerald-700 decoration-2 underline-offset-2">Inicio</a>
                      </li>
                      <li>
                          <a href="../about.html#servicesm" class="text-lg block px-4 py-2 text-gray-600 hover:underline decoration-emerald-700 decoration-2 underline-offset-2">Servicios</a>
                      </li>
                      <li>
                          <a href="../proj.html" class="text-lg block px-4 py-2 text-gray-600 hover:underline decoration-emerald-700 decoration-2 underline-offset-2">Proyectos</a>
                      </li>
                      <li>
                          <a href="../about.html" class="text-lg block px-4 py-2 text-gray-600 hover:underline decoration-emerald-700 decoration-2 underline-offset-2">Sobre mí</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="flex justify-center">
        <hr class="mb-12 mt-2 h-0.5 w-10/12 border-t-2 bg-gray-700" />
      </div>
      `;
    }
  }
  
  customElements.define('header-comp', Header);
  