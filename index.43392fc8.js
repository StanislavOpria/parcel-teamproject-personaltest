!function(){var t=document.querySelector(".filter__main-category-list"),e=document.querySelector(".filter__others-category-list"),n=document.querySelector(".filter__other-category-wrap");fetch("".concat("https://api.nytimes.com/svc/news/v3/content/section-list.json").concat("?api-key=OotKL5nYMsbXFbPHNmmUjf7brVnGZQ8G")).then((function(t){if(!t.ok)throw new Error("error");return t.json()})).then((function(n){!function(n){console.log(n);var r="",o="";n.map((function(t,e){var n=t.display_name;e<=5?r+='<li class="filter__main-category-item"><button class="filter__main-category-btn">'.concat(n,"</button></li>"):o+='<li class="filter__others-category-item"><button class="filter__others-category-btn">'.concat(n,"</button></li>")})),t.innerHTML=r,t.insertAdjacentHTML("beforeend",'<li class="filter__other-category-item"><button class="filter__main-category-btn others-btn">Others</button></li>'),e.innerHTML=o}(n.results)})),t.addEventListener("click",(function(t){var e=document.querySelectorAll(".filter__main-category-btn"),n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var a=i.value;a.classList.contains("active")&&a.classList.remove("active")}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}"button"===t.target.localName&&t.target.classList.add("active")})),t.addEventListener("click",(function(t){t.target.classList.contains("others-btn")&&(e.classList.toggle("visible"),n.classList.toggle("visible"))}))}();
//# sourceMappingURL=index.43392fc8.js.map
