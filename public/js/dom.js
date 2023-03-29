const searchIcon = document.querySelector(".fa-magnifying-glass");
const search = document.querySelector(".search");
const closeSearch = document.querySelector(".del");
const searchContent = document.querySelector(".content-search");
searchIcon.addEventListener("click",()=>{
  search.classList.toggle("hide")
  searchIcon.classList.toggle("active")
})

closeSearch.addEventListener("click",()=>{
  search.classList.toggle("hide")
  searchIcon.classList.toggle("active")
})

const createEle = (element, className) => {
  const ele = document.createElement(element);
  ele.className = className;
  return ele;
};
const createDom = (response) => {
  response.forEach((element) => {
    const movCard = createEle('div', 'mov-card');
    const movImg = createEle('img', 'mov-img');
    movImg.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
    movImg.alt = element.title;
    movImg.title = element.title;
    const movDetails = createEle('div', 'mov-details');
    movCard.appendChild(movImg)
    movCard.appendChild(movDetails)
    const movTitle = createEle('p', 'mov-title');
    movTitle.textContent = element.title;
    const movYear = createEle('p', 'mov-year');
    movYear.textContent = element.release_date.slice(0, 4);
    movDetails.appendChild(movTitle);
    movDetails.appendChild(movYear);
    searchContent.append(movCard);
  });
};


let input = document.querySelector("#input");
let sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", ()=>{
  let inputValue = input.value;
  fetch(`/movie/${inputValue}`)
 .then(result => result.json())
 .then(result => createDom(result.results));
 })