// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    const articleArray = Object.values(response.data.articles)
    // console.log(articleArray)
    articleArray.forEach(art => {  
        // console.log(art)
        art.forEach(element => {
            document.querySelector('.cards-container').append(articleCard(element))
        })
    })
})


.catch( error => {
    console.log( error )
})


function articleCard(array) {
    const container = document.createElement('div')
    container.classList.add('card')

    const headlineInfo = document.createElement('div')
    headlineInfo.classList.add('headline')
    headlineInfo.textContent = array.headline
    container.appendChild(headlineInfo)

    const authorInfo = document.createElement('div')
    authorInfo.classList.add('author')
    container.appendChild(authorInfo)
  
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container')
    authorInfo.appendChild(imgDiv)

    const image = document.createElement('img')
    image.src = array.authorPhoto
    imgDiv.appendChild(image)     
  
    const authorsName = document.createElement('span')
    authorsName.textContent = `By ${array.authorName}`
    authorInfo.appendChild(authorsName)
  
    return container
  }
