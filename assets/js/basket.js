const proBasket = document.getElementById('proBasket')

function getproducts(){
    proBasket.innerHTML = ''
let cart = JSON.parse(localStorage.getItem('cart'))
cart.map((item,index)=>{
    const box = document.createElement('div')
    box.className = "box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
    box.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.name}</p>
    <p>${item.price}</p>
    <p>${item.count}</p>
    <div class="btndiv">
    <button onclick="removefrombasket(${index})">Remove from<i class="fa-brands fa-shopify"></i></button>

</div>
    `
    proBasket.appendChild(box)
})
}
getproducts()
function removefrombasket(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
cart.splice(index,1)
localStorage.setItem('cart',JSON.stringify(cart));
getproducts()
}