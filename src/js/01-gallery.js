// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryItem = galleryItems.map((item) =>
    `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>`)
    .join("");

gallery.innerHTML = galleryItem;

// gallery.addEventListener('click', handlerImage);





const lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 1,
    captionsData: "alt",
    captionDelay: 250,
    });

