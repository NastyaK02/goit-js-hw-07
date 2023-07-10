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

galleryItem.onclick = (evt) => {
    evt.preventDefault()
    if (!evt.target.classList.contains("gallery__image")) {
        return
    }
}

galleryItem.addEventListener('click', handlerClickGallery)
function handlerClickGallery(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("gallery__image")) {
        console.log("gallery__image", evt.target)
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width='1300' height='900'>`,
        {
            onShow: handlerEscapeModal,
            onClose: handlerEscapeModal
        }
    );
    instance.show()
    function handlerEscapeModal(event) {
        if (event.key === "Escape") {
            instance.close();
        }
        document.addEventListener('keydown', handlerEscapeModal);
    }
  
}





