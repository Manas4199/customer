const nav_list = document.getElementById('nav_list')
let nav_buttons = nav_list.getElementsByClassName('nav_button')

for (let i = 0; i < nav_buttons.length; i++) {
  nav_buttons[i].addEventListener('click', () => {
    let currNav = document.getElementsByClassName('active')
    currNav[0].className = currNav[0].className.replace('active', '')
    nav_buttons[i].className += ' active'
  })
}
