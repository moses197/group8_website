// check if DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // get all the youtube modal triggers
  const youtubeModalTriggers = document.querySelectorAll(
    ".youtube-modal-trigger"
  );

  // listen to on click event
  youtubeModalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      // get the youtube video id
      const youtubeVideoId = this.getAttribute("href");
      // check the parent element and get the content of .title
      const title =
        this.parentNode.parentNode.querySelector(".title").textContent;

      // get the modal
      const youtubeModal = document.querySelector(".youtube-modal-container");
      // get the iframe
      const youtubeModalIframe = youtubeModal.querySelector("iframe");
      // set the src attribute of the iframe
      youtubeModalIframe.setAttribute("src", youtubeVideoId);
      // set the modal title
      youtubeModal.querySelector(".title").textContent = title;
      // show the modal
      youtubeModal.classList.add("is-visible");
    });
  });

  // close the modal
  const youtubeModalClose = document.querySelector(".youtube-modal-close");
  youtubeModalClose.addEventListener("click", function (e) {
    e.preventDefault();
    // get the modal
    const youtubeModal = document.querySelector(".youtube-modal-container");
    // get the iframe
    const youtubeModalIframe = youtubeModal.querySelector("iframe");
    // remove the src attribute from the iframe
    youtubeModalIframe.removeAttribute("src");
    // clear the modal title
    youtubeModal.querySelector(".title").textContent = "";
    // hide the modal
    youtubeModal.classList.remove("is-visible");
  });
});
