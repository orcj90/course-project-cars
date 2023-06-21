// Client Side!!!

let  delbtn

// console.log("From the frontend")
// alert("From the frontend")

function showCars(){
    fetch("http://localhost:3000/api/cars")

    .then(res => res.json())
    .then(data => {
        const carsList = document.querySelector("#cars-list")

        data.forEach(car => {
            // carsList.innerHTML += `
            // <li>${car.brand}</li>
            // <li>${car.model}</li>
            // <li>${car.url}</li>
            // <li>${car.modelYear}</li>
            // <li>${car.price}</li>
            // `
            carsList.innerHTML +=
            `
            <div class="card" style="width: 18rem;">
            <img src="${car.url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${car.id}</h5>
              <h5 class="card-title">brand:${car.brand}</h5>
              <h5 class="card-title">model:${car.model}</h5>
              <h5 class="card-title">model Year:${car.modelYear}</h5>
              <h5 class="card-title">price: ${car.price}</h5>
              <button type="button" class="btn btn-primary delbtn">Delete</button>
            </div>
          </div>`
        });
        delbtn=document.querySelectorAll(".delbtn")
        btn1()
    })

}



function handleSubmit(e){
    e.preventDefault()
    console.log("sending...")
    const brand = e.target[0].value
    const model = e.target[1].value
    const url = e.target[2].value
    const modelYear = e.target[3].value
    const price = e.target[4].value
    const data = {brand,model,url,modelYear,price}

    fetch("http://localhost:3000/api/cars",{

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resData => {
        if(resData.errors?.length > 0){
            const alert = document.querySelector("#alert")
            
            alert.className = "alert alert-danger"
            alert.role = "alert"

            for (const err of resData.errors) {
                alert.innerHTML +=  err+ "<br/>"
            }
        }

        console.log(resData)
    })

    // fetch("http://localhost:3000/api/cars/7",{
    //     method: "PUT",
    //     data: JSON.stringify({brand: "Tesla"})
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
}


showCars()

let id 
function btn1(){
    delbtn.forEach(occurence => {
                occurence.addEventListener('click', function(){
                    //  id =this.parentElement.childNodes[1].innerText
                     id =this.parentElement.parentElement.style.display="none"
                    console.log(id) 
                })})
        }