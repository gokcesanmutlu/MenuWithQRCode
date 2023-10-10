import { renderMenuItems, renderButtons } from './ui.js';

//!HTML'den gelenler
const menuList = document.querySelector('#menu-list');
const buttonsArea = document.getElementById("buttons");

//! adEventListener
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  fetchMenu();
});


// Değişkeni global scope'da tanımladık
let data;

//menu verilerini json dosyasından çeker
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

