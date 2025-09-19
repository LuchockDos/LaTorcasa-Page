const imagenes = document.querySelectorAll('.images_carousel')
const mainImage = document.getElementById('main_image')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () =>{
    const firstImage = mainImage.src
       mainImage.src = imagen.src
       imagen.src = firstImage
    })
});

