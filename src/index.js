const KEY = '?api-key=OotKL5nYMsbXFbPHNmmUjf7brVnGZQ8G';
const URL = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

function onFetchCategories() {
  return fetch(`${URL}${KEY}`).then(res => {
    // console.log(res);
    if (!res.ok) {
      throw new Error('error');
    }
    return res.json();
  });
}

const mainCategoryList = document.querySelector('.filter__main-category-list');
const othersCategoryList = document.querySelector(
  '.filter__others-category-list'
);
const othersCategoryLisWrap = document.querySelector(
  '.filter__other-category-wrap'
);

onFetchCategories().then(({ results }) => {
  createCategories(results);
});

mainCategoryList.addEventListener('click', onChooseCategory);
mainCategoryList.addEventListener('click', onShowOthersCategories);

othersCategoryList.addEventListener('click', onSectionSelection); // отримуємо вибраний розділ

function onChooseCategory(event) {
  const categoryBtnArray = document.querySelectorAll(
    '.filter__main-category-btn'
  );
  for (const categoryBtn of categoryBtnArray) {
    if (categoryBtn.classList.contains('active')) {
      categoryBtn.classList.remove('active');
    }
  }
  if (event.target.localName === 'button') {
    event.target.classList.add('active');
  }
}

function onShowOthersCategories(event) {
  if (event.target.classList.contains('others-btn')) {
    othersCategoryList.classList.toggle('visible');
    othersCategoryLisWrap.classList.toggle('visible');
  }
}

function createCategories(newsArray) {
  // console.log(newsArray);
  let markupForMainCategoryList = '';
  let markupForOthersCategoryList = '';
  newsArray.map(({ display_name }, index) => {
    if (index <= 5) {
      markupForMainCategoryList += `<li class="filter__main-category-item"><button class="filter__main-category-btn">${display_name}  </button></li>`;
      return;
    }
    markupForOthersCategoryList += `<li class="filter__others-category-item"><button class="filter__others-category-btn">${display_name}</button></li>`;
  });

  mainCategoryList.innerHTML = markupForMainCategoryList;

  mainCategoryList.insertAdjacentHTML(
    'beforeend',
    `<li class="filter__other-category-item"><button class="filter__main-category-btn others-btn" data-btn >Others<svg class="filter__main-category-btn-icon""> <use href="../images/main/symbol-defs-mini.svg#icon-orig-mini-bil-v-z" ></use> </svg>
</button></li>`
  );
  othersCategoryList.innerHTML = markupForOthersCategoryList;

  const btnOthers = document.querySelector('.others-btn');
  let removeBtnOther = btnOthers.textContent;
  console.log('test control =>', removeBtnOther);
}

function onSectionSelection(e) {
  let section = e.target.textContent;
  const othersLi = mainCategoryList.lastChild;
  const otherBtn = othersLi.firstChild;
  otherBtn.textContent = section;
}
