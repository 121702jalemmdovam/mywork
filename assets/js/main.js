const proList= document.getElementById('proList')
function getproducts(){
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
    .then(res=>{
        products = res.data
        products.map(item=>{
            const box = document.createElement('div')
            box.className = "box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <div class="btndiv">
            <button onclick="addtobasket(${item.id})">Add to<i class="fa-brands fa-shopify"></i></button>
            <button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-hand-holding-heart"></i></button> 
</div>        
            `
            proList.appendChild(box)
        })
    })
}
getproducts()

function addtobasket(id) {
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)

    if(productItem){
        productItem.count = (productItem.count || 1) + 1
    }else {
        cart.push(products.find(item => item.id == id))
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    
}



function addtowishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}