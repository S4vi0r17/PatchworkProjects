const yesB = document.querySelector('#yesB');

yesB.addEventListener('click',function () {
    alert('Sabia que ibas a decir que sí, pero, ¿no es demasiado pronto?')
    alert('Mejor sigamos conociéndonos')
});

const noB = document.querySelector('#noB');

noB.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    
    noB.style.setProperty('top',randomY+'%');
    noB.style.setProperty('left',randomX+'%');
    
    noB.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})