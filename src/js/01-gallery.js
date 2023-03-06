import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

//  copied from hw 7

const galleryItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
  )
  .join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

// simple lightbox

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
