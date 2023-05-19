import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    list: document.querySelector('.gallery')
}
const galleryList = startGalleryList(galleryItems);
setGalList(galleryList)

refs.list.addEventListener('click', onClick)


function onClick(event) {
    event.preventDefault();
    // console.log(event.target.nodeName)
    if (event.target.nodeName !== "IMG") {
        return
    }
    let url = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${url}" width="1280" heigth="860">
`)
    instance.show();
}

function startGalleryList(items) {
    return items.map(item => `<li><a class="gallery__link" href="${item.original}"><img class="gallery__image" data-source="${item.original}" src='${item.preview}' alt= ${item.description}></a></li>`).join('')
}

function setGalList(markup) {
    refs.list.innerHTML = markup;
}

// console.log(galleryItems);
