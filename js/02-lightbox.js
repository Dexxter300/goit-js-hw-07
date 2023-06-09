import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    list: document.querySelector('.gallery')
}
const galleryList = startGalleryList(galleryItems);
setGalList(galleryList);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250

});


function startGalleryList(items) {
    return items.map(item => `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a></li>`)
        .join('')
}

function setGalList(markup) {
    refs.list.innerHTML = markup;
}




// console.log(galleryItems);
