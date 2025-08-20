const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const closeBtn = document.getElementById('close')

document.querySelectorAll('.img_caza').forEach(img =>{
    img.addEventListener('click', () =>{
        modal.style.display = 'block'
        modalImg.src = img.src
    })
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})
let lastScrollTop = 0;
const navbarMovile = document.getElementById('container_header_movile')
const menuCheckbox = document.getElementById('label_icon')

menuCheckbox.addEventListener('change', () => {
  if (menuCheckbox.checked) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
});

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (!menuCheckbox.checked) {
    if (currentScroll > lastScrollTop) {
      navbarMovile.style.top = '-200px'
    } else {
      navbarMovile.style.top = '0'
    }
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
})



