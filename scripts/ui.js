import { buttonData } from "./constant.js";

const buttonArea = document.getElementById('buttons');

//ekrana menu elemanlarını basar
export function renderMenuItems(menuItems, menuList) {
  //dizideki her bir eleman için bir menu html'i oluşturup bunu ekrana basar
  menuList.innerHTML = menuItems.map(
    (item) => `
            <a
            id="card"
            href="/detail.html?id=${item.id}"
            class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
          >
            <img class="rounded shadow img-fluid" src="${item.img}" alt="" />
            <div>
              <div class="d-flex justify-content-between">
                <h5>${item.title}</h5>
                <p class="text-success fw-bold">$${item.price}</p>
              </div>
              <p class="lead">
                    ${item.desc.slice(0, 70) + "..."}
              </p>
            </div>
          </a>
            `
  ).join(' ');
}

// ekrana butonları basar
export function renderButtons(activeText) {
  //eski eklenen buttonları siler
  buttonArea.innerHTML = '';

  // yeni butonları oluşturma
  buttonData.forEach((btn) => {
    const buttonEle = document.createElement('button');
    buttonEle.className = "btn btn-outline-dark";

    // data-id belirleme
    buttonEle.dataset.category = btn.value;

    //eğerki eleman aktif ise bu class'ı ver
    if (btn.text === activeText) {
      buttonEle.classList.add('btn-dark', 'text-white')
    }
    buttonEle.innerText = btn.text;
    buttonArea.appendChild(buttonEle)
  });
}