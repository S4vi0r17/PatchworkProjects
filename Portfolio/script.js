const projectImages = document.querySelectorAll('.project img');

projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    const projectURL = image.parentElement.getAttribute('href');
    window.location.href = projectURL;
  });
});
