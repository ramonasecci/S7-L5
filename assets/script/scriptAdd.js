const urlApiTelephone = 'https://striveschool-api.herokuapp.com/api/product/'
const keyAuthorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjgwMGZlMDMxZTAwMTliYTE0YzQiLCJpYXQiOjE3MDIwMzM0MDgsImV4cCI6MTcwMzI0MzAwOH0.w_bC-J34V9anTma5vXEIcaMf93wymVtUC9kSK2twfSI"
const eleAddObject = document.querySelector('#btnAdd')
const eleEditObjContainer = document.querySelector('#editObjContainer')
const eleModalAdd = document.querySelector('#modalAdd')
const eleTextAddMdl = document.querySelector('#textAddMdl')
const eleFormAdd = document.querySelector('#formAdd')

//aggiungi articolo
eleAddObject.addEventListener('click',(event)=>{
    let nameObj = document.querySelector('#name').value
    let descriptionObj = document.querySelector('#description').value
    let imgUrl = document.querySelector('#imgUrl').value
    let priceObj = document.querySelector('#price').value
    let brandObj = document.querySelector('#brand').value

    let objAdd = {
        name: nameObj,
        description: descriptionObj,
        brand: brandObj,
        imageUrl: imgUrl,
        price: priceObj,
    }

    fetch(urlApiTelephone,{
        method:"POST",
        body: JSON.stringify(objAdd),
        headers:{
            "Authorization": keyAuthorization,
            "Content-type": "application/json",
        },
    })
      .then(resp => resp.json())
      .then(data => {openModal(data.name,data._id)})  
})

function openModal(name,id){
    eleModalAdd.classList.remove("visually-hidden")
    eleFormAdd.classList.add("visually-hidden")
    eleTextAddMdl.innerHTML = `Hai aggiunto l'articolo <br><br> ${name} <br><br> ID:${id}. <br>`
}














