import"./assets/modulepreload-polyfill-3cfb730f.js";const r=document.querySelector(".gallery");function i(e){const l=e.map(a=>`<li class="gallery-item">
                <a class="gallery-link" href="${a.original}">
                  <img class="gallery-image" src="${a.preview}" alt="${a.description}" />
                </a>
              </li>`).join(`
`);r.insertAdjacentHTML("afterbegin",l)}i(markup);new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map