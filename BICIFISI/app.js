const founderContainer = document.querySelector('.founder-container');

founderContainer.addEventListener('mouseover', (event) => {
  const target = event.target;
  if (target.classList.contains('founder-img')) {
    const founder = target.parentElement;
    const description = founder.querySelector('.founder-description');
    target.style.opacity = '0';
    description.style.opacity = '1';
  }
});

founderContainer.addEventListener('mouseout', (event) => {
  const target = event.target;
  if (target.classList.contains('founder-img')) {
    const founder = target.parentElement;
    const description = founder.querySelector('.founder-description');
    target.style.opacity = '1';
    description.style.opacity = '0';
  }
});

const gallery = document.querySelector('.bike-gallery');

const images = [
  'img/bike1.jpg',
  'img/bike2.jpg',
  'img/bike3.webp',
  'img/bike4.webp'
];

images.forEach(imgUrl => {

  const img = document.createElement('img');
  img.src = imgUrl;

  img.addEventListener('click', e => {
    
    const imgLarge = document.createElement('img');
    imgLarge.src = imgUrl;
    imgLarge.classList.add('large');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(imgLarge);
    gallery.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });

  });

  gallery.appendChild(img);

});
