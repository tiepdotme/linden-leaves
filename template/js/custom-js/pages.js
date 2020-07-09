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
if (window.innerWidth < 468) {
  const searchFormMobile = document.getElementById('search-bar')
  const buttonSearchOpen = document.getElementById('mobile-search-btn')
  const menuMobile = document.getElementById('accordion-menu')
  const userMobile = document.getElementById('user-button')
  buttonSearchOpen.remove()
  searchFormMobile.classList.remove('col-12')
  menuMobile.before(searchFormMobile)
  menuMobile.after(userMobile)
}
