import { galleryItems } from './gallery-items.js';
// Change code below this line

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)
// // instance.show();
// console.log(galleryItems);
// console.log(instance);
// console.log(instance.visible());

const galleryEl = document.querySelector(".gallery");

const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) => `<li class="gallery__item">
      <a class="gallery__link" onclick="return false" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
    )
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};



const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
    return;
    }
    const currentListItem = event.target.closest(".gallery__image");
    console.log(currentListItem);
    const instance = basicLightbox.create(`
        <img src="${currentListItem.dataset.source}" width="800" height="600">
    `)

    instance.show()
};

renderList(galleryItems,galleryEl);
galleryEl.addEventListener("click", handleListClick);

