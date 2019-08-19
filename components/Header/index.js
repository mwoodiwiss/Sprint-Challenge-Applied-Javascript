// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const container = document.createElement('div');
    container.classList.add('header');

    const span1 = document.createElement('span');
    span1.textContent = 'date';
    span1.classList.add('date');
    container.appendChild(span1);

    const title = document.createElement('h1');
    title.textContent = 'Lambda Times'
    container.appendChild(title);

    const span2 = document.createElement('span');
    span2.textContent = 'temp';
    span2.classList.add('temp');
    container.appendChild(span2);

    return container;
}

let headerContent = document.querySelector('.header-container')
headerContent.appendChild(Header());