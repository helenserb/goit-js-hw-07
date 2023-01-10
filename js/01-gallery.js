import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onImageClick);


function createPhotoGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');
}
function onImageClick(e) {
    e.preventDefault();
    gallery.addEventListener("keydown", onEscPressWhenModalOpen);
    
    if (e.target.nodeName !== "IMG") {
        return;
    }

// Using basicLightBox library to open modal
    const instance = basicLightbox.create(`
<img src="${e.target.dataset.source}">	
`);
    instance.show();

// Close with Escape
function onEscPressWhenModalOpen(e) {
  if (e.code === "Escape") {
    instance.close();
    gallery.removeEventListener("keydown", onEscPressWhenModalOpen);
  }
}
}
