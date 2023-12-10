const urlApiTelephone = 'https://striveschool-api.herokuapp.com/api/product/'
const keyAuthorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjgwMGZlMDMxZTAwMTliYTE0YzQiLCJpYXQiOjE3MDIwMzM0MDgsImV4cCI6MTcwMzI0MzAwOH0.w_bC-J34V9anTma5vXEIcaMf93wymVtUC9kSK2twfSI"
const eleCardsContainer = document.querySelector('#cardsContainer')



const getTelephons = async (url,key) => {
    const response = await fetch(url, {
        headers: {
            "Authorization": keyAuthorization
        }
    })
    const objects = await response.json()
    let htmlContentCards = ''
    objects.forEach((obj) => {        
        htmlContentCards += `<div class="col">
        <div class="card border border-dark-subtle">
            <img src="${obj.imageUrl}" class="card-img-top w-100" alt="${obj.name}">
            <div class="card-body">
              <h5 class="card-title">${obj.name}</h5>
              <p class="card-text sizeCards-font">${obj.description}</p>
            </div>
            <ul class="list-group list-group-flush sizeCards-font">
              <li class="list-group-item">Price: ${obj.price} €</li>
              <li class="list-group-item">Brand: ${obj.brand}</li>
              <li class="list-group-item">Codice articolo: ${obj._id}</li>
            </ul>
            <div class="card-body">
              <button onclick="goToDetails('${obj._id}')" class="my-2 sizeCards-font btn btn-outline-primary">Scopri di più</button>
              <button onclick="goToEdit('${obj._id}')" class="my-2 sizeCards-font btn btn-outline-primary">Modifica</button>
            </div>
          </div>
    </div>`
    
    })
    eleCardsContainer.innerHTML = htmlContentCards    
}

const goToDetails = (id) => {
  window.location.assign("./details.html?picId=" + id);
};

const goToEdit = (id) => {
  window.location.assign("./edit.html?picId=" + id);
};

















getTelephons(urlApiTelephone,keyAuthorization)


