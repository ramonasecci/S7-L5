const urlApiTelephone = 'https://striveschool-api.herokuapp.com/api/product/'
const keyAuthorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjgwMGZlMDMxZTAwMTliYTE0YzQiLCJpYXQiOjE3MDIwMzM0MDgsImV4cCI6MTcwMzI0MzAwOH0.w_bC-J34V9anTma5vXEIcaMf93wymVtUC9kSK2twfSI"
const eleHtmlContainer = document.querySelector('#detailsHtmlC')
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("picId")

window.onload = async () => {
    const response = await fetch(`${urlApiTelephone}/${id}`, {
        headers: {
            "Authorization": keyAuthorization
        }
    })
    const obj = await response.json()
    console.log(obj)
    eleHtmlContainer.innerHTML = `<div>
    <h3 class="my-3 color-ele-nav">${obj.name}</h3>
    <img src="${obj.imageUrl}" alt="${obj.name}" class="size-img-details">
    <p class="card-text">Description: ${obj.description}</p>
    <p class="card-text">Brand: ${obj.brand}</p>
    <p class="card-text">Price: ${obj.price}€</p>
    <p class="card-text">Id: ${obj._id}</p>
    <button onclick="goToDetails('${obj._id}')" class="btn btn-outline-primary" type="button">Modifica</button></a>`    
}

const goToDetails = (id) => {
    window.location.assign("./edit.html?picId=" + id);
  };
  
