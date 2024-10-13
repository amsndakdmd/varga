const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    sidebar.classList.remove('closed')
    sidebar.classList.add('opened')
    overlay.classList.remove('invisible')
    overlay.classList.add('visible')
})

overlay.addEventListener('click', () => {
    sidebar.classList.remove('opened')
    sidebar.classList.add('closed')
    overlay.classList.remove('visible')
    overlay.classList.add('invisible')
})