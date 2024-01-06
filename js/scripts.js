document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const nav = document.getElementById("navbar");

    menuButton.addEventListener("click", function() {
        nav.classList.toggle("active");
        
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const pdfPreviewButton = document.querySelector('.hero-text button');
    const pdfPreviewIframe = document.getElementById('pdfPreview');

    pdfPreviewButton.addEventListener('click', function () {
      // Scroll to the PDF preview section
      pdfPreviewIframe.scrollIntoView({ behavior: 'smooth' });
    });
  });
