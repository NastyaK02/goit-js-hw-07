import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItem = document.querySelector('.gallery');

    const imgList = galleryItems.map(({preview, original, description}) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}">
    </a>
    </li>`)
    .join('')


galleryItem.insertAdjacentHTML("afterbegin",imgList);

new SimpleLightbox('.gallery a', {
    
    captionsData: 'alt', 
    captionDelay: 250, 
   
    
  });