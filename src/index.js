const mainCategoryList = document.querySelector('.filter__main-category-list');
const othersCategoryList = document.querySelector(
  '.filter__others-category-list'
);
const othersCategoryLisWrap = document.querySelector(
  '.filter__other-category-wrap'
);
const KEY = '?api-key=OotKL5nYMsbXFbPHNmmUjf7brVnGZQ8G';
const URL = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

onFetchCategories().then(({ results }) => {
  createCategories(results);
});

mainCategoryList.addEventListener('click', onChooseCategory);
mainCategoryList.addEventListener('click', onShowOthersCategories);

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

function onFetchCategories() {
  return fetch(`${URL}${KEY}`).then(res => {
    // console.log(res);
    if (!res.ok) {
      throw new Error('error');
    }
    return res.json();
  });
}

function createCategories(newsArray) {
  console.log(newsArray);
  let markupForMainCategoryList = '';
  let markupForOthersCategoryList = '';
  newsArray.map(({ display_name }, index) => {
    if (index <= 5) {
      markupForMainCategoryList += `<li class="filter__main-category-item"><button class="filter__main-category-btn">${display_name}</button></li>`;
      return;
    }
    markupForOthersCategoryList += `<li class="filter__others-category-item"><button class="filter__others-category-btn">${display_name}</button></li>`;
  });

  mainCategoryList.innerHTML = markupForMainCategoryList;
  mainCategoryList.insertAdjacentHTML(
    'beforeend',
    `<li class="filter__other-category-item"><button class="filter__main-category-btn others-btn">Others</button></li>`
  );
  othersCategoryList.innerHTML = markupForOthersCategoryList;
}

// buttonFilters.addEventListener("click", onBtnTarget);

// function onBtnTarget(event) {
//   console.log(event.target);

//   // console.log(event.target.classList.toggle("active"));

//   let targetBtnActive;

//   if (event.target.classList.contains("active")) {
//     return;
//   }
//   if (event.target.classList.contains("active") === false) {
//     event.target.classList.add("active");
//   }

//   console.dir(event.target.style.backgroundColor);
//   const selectorActiveBtn = event.target.style.backgroundColor;
// }

//==================

// const categories = document.querySelector(".categories");
// const btnBoxList = document.querySelector(".btn-box-list");
// const btnBoxThumb = document.querySelector(".btn-box-thump");

// categories.addEventListener("click", openMenu);

// function openMenu() {
//   categories.classList.toggle("active");
//   btnBoxList.classList.toggle("active");
// }

// onFetchCategories().then((data) => data.results);
// onFetchCategories().then((data) => console.log(data.results));
