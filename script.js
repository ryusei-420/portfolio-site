const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("imageModalImage");
const closeButton = document.querySelector(".image-modal__close");

if (modal && modalImage && closeButton) {
  document.querySelectorAll(".project-card__image").forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modal.hidden = false;
    });
  });

  closeButton.addEventListener("click", () => {
    modal.hidden = true;
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.hidden = true;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.hidden = true;
    }
  });
}
