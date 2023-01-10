import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createPhotoGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


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
