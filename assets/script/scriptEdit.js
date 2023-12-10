const urlApiTelephone = 'https://striveschool-api.herokuapp.com/api/product/'
const keyAuthorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZjgwMGZlMDMxZTAwMTliYTE0YzQiLCJpYXQiOjE3MDIwMzM0MDgsImV4cCI6MTcwMzI0MzAwOH0.w_bC-J34V9anTma5vXEIcaMf93wymVtUC9kSK2twfSI"
const eleHtmlContainer = document.querySelector('#detailsHtmlC')
const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("picId")
const eleBtnEdit = document.querySelector('#btnEdit')
const eleBtnDelete = document.querySelector('#btnDelete')
const eleTitleEdit = document.querySelector('#titleEdit')
const eleModalDelete = document.querySelector('#modalDelete')
const eleTextDeleteMdl = document.querySelector('#textDeleteMdl')
const eleFormEdit = document.querySelector('#formEdit')
let eleIName = document.querySelector('#nameEdit')
let eleIdescription = document.querySelector('#descriptionEdit')
let eleIimgUrl = document.querySelector('#imgUrlEdit') 
let eleIprice = document.querySelector('#priceEdit')
let eleIbrand = document.querySelector('#brandEdit')



window.onload = async () => {
    const response = await fetch(`${urlApiTelephone}/${id}`, {
        headers: {
            "Authorization": keyAuthorization
        }
    })
    const obj = await response.json()
    console.log(obj)
    eleTitleEdit.innerHTML = `Modifica: ${obj.name}<br> Id: ${obj._id}`
    eleIName.value = `${obj.name}`
    eleIdescription.value = `${obj.description}`
    eleIimgUrl.value = `${obj.imageUrl}`
    eleIbrand.value = `${obj.brand}`
    eleIprice.value = `${obj.price}`

    eleBtnEdit.addEventListener('click',(event)=>{
        eleIName = eleIName.value
        eleIdescription = eleIdescription.value
        eleIimgUrl = eleIimgUrl.value
        eleIprice = eleIprice.value
        eleIbrand = eleIbrand.value
    
        let objEdit = {
            name: eleIName,
            description: eleIdescription,
            brand: eleIbrand,
            imageUrl: eleIimgUrl,
            price: eleIprice,
        }
    
        fetch(`${urlApiTelephone}/${id}`,{
            method:"PUT",
            body: JSON.stringify(objEdit),
            headers:{
                "Authorization": keyAuthorization,
                "Content-type": "application/json",
            },
        })
          .then(resp => resp.json())
          .then(data => {openModal(data.name,data._id,"modificato")})  
    })

    eleBtnDelete.addEventListener('click',(event)=>{
        fetch(`${urlApiTelephone}/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization": keyAuthorization,
                "Content-type": "application/json",
            },
        })
          .then(resp => resp.json())
          .then((data) => {openModal(data.name,data._id,"eliminato")})           
    })
}

function openModal(name,id,edit){
    eleModalDelete.classList.remove("visually-hidden")
    eleFormEdit.classList.add("visually-hidden")
    eleTextDeleteMdl.innerHTML = `L'articolo <br><br> ${name} <br><br> ID:${id} <br><br> è stato ${edit}.`
}




