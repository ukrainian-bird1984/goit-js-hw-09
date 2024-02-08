const gallery = document.querySelector('.gallery');

function renderGallery(images) {
  const markup = images
    .map(
      el => `<li class="gallery-item">
                <a class="gallery-link" href="${el.original}">
                  <img class="gallery-image" src="${el.preview}" alt="${el.description}" />
                </a>
              </li>`
    )
    .join('\n');

  gallery.insertAdjacentHTML('afterbegin', markup);
}

renderGallery(images);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});