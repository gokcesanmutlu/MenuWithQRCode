import { renderMenuItems, renderButtons } from './ui.js';

//! Come from HTML
const menuList = document.querySelector('#menu-list');
const buttonsArea = document.getElementById("buttons");

//! addEventListener
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  fetchMenu();
});


// We describe variable at global scope
let data;

// This func. get menu data from Json file
async function fetchMenu() {
  const res = await fetch('./db.json');
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

//Tıklanılan kategoriyi belirleme
buttonsArea.addEventListener('click', (e) => {
  if (e.target.id !== "buttons ") {
    renderButtons(e.target.innerText);
    // Seçili kategoriye erişme
    const selected = e.target.dataset.category;
    console.log(selected)
    if (selected === "all") {
      //filtreleme yapma Api'den gelen verileri doğrudan ekrana bas
      renderMenuItems(data.menu, menuList)
    } else {
      // seçili kategoriye göre filtrele
      const filtred = data.menu.filter((i) => i.category === selected)
      //filtrelenmiş menüyü ekrana bas
      renderMenuItems(filtred, menuList)
    }
  }
});

