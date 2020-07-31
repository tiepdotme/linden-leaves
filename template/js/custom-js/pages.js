// Add your custom JavaScript for storefront pages here.
if (window.innerWidth > 992) {
  const menuDesk = document.getElementById('menu-novo')
  const searchBarDesk = document.getElementById('search-bar')
  const buttonsDesk = document.getElementById('headButtons')
  const logoDesk = document.getElementById('coluna-logo')
  logoDesk.classList.remove('col-lg-auto')
  menuDesk.append(searchBarDesk)
  menuDesk.append(buttonsDesk)
}
if (window.innerWidth < 991) {
  const searchFormMobile = document.getElementById('search-bar')
  const buttonSearchOpen = document.getElementById('mobile-search-btn')
  const menuMobile = document.getElementById('accordion-menu')
  const userMobile = document.getElementById('user-button')
  const menuList = document.querySelectorAll('.menu__list a')
  const position = menuList.length
  buttonSearchOpen.remove()
  searchFormMobile.classList.remove('col-12')
  menuMobile.before(searchFormMobile)
  menuList[position - 1].after(userMobile)
}
