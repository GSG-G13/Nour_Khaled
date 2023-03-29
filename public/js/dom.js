const createElement = (element, className) => {
  const ele = document.createElement(element);
  ele.className = className;
  return ele;
};
const createDom = (response) => {
  response.forEach((element) => {
    const movCard = createElement('div', 'mov-card');
    const movImg = createElement('img', 'mov-img');
    movImg.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
    movImg.alt = element.title;
    movImg.title = element.title;
    const movDetails = createElement('div', 'mov-details');
    movCard.append(movImg, movDetails);
    const movTitle = createElement('p', 'mov-title');
    movTitle.textContent = element.title;
    const movYear = createElement('p', 'mov-year');
    movYear.textContent = element.release_date.slice(0, 4);
    movDetails.append(movTitle, movYear);
  });
};

module.exports = { createElement, createDom };
