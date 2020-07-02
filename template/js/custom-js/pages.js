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
