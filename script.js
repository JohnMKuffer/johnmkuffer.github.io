document.getElementById("year").textContent = new Date().getFullYear();
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
document.querySelectorAll("[data-lightbox]").forEach(link => {
  link.addEventListener("click", event => {
    const url = link.getAttribute("href");
    if (!url || !/\.(jpe?g|png|webp|gif)$/i.test(url)) return;
    event.preventDefault();
    lightboxImage.src = url;
    lightboxImage.alt = link.getAttribute("aria-label") || "Project photograph";
    lightbox.showModal();
  });
});
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
