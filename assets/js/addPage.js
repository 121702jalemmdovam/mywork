const table = document.getElementById('table')

function getproducts(){
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
    .then(res=>{
        products = res.data
        products.map(item=>{
            const box = document.createElement('tr')
            box.style.display = 'flex'
            box.style.width = '100%'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.name}</p></td>
            <td><p>${item.price}</p></td>
            <td><button onclick="removefromadd(${item.id})">Remove</td>
            `
          table.appendChild(box)
        })
    })
}
getproducts()


const filterdata = document.getElementById('filterdata')
function filterdatadefault(){
    table.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '1'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            products.map(item=>{
                const box = document.createElement('tr')
                box.style.display = 'flex'
                box.style.width = '100%'
                box.innerHTML = `
                <td><img src="${item.image}" alt=""></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><button onclick="removefromadd(${item.id})">Remove</td>
                `
              table.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdatadefault)

function filterdataaz(){
    table.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '2'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            let azproducts = products.sort((a,b)=>a.name.localeCompare(b.name))
            azproducts.map(item=>{
                const box = document.createElement('tr')
                box.style.display = 'flex'
                box.style.width = '100%'
                box.innerHTML = `
                <td><img src="${item.image}" alt=""></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><button onclick="removefromadd(${item.id})">Remove</td>
                `
              table.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdataaz)

function filterdataza(){
    table.innerHTML = ''
    let selectvalue = filterdata.value;
    if(selectvalue === '3'){
        axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            let zaproducts = products.sort((a,b)=>b.name.localeCompare(a.name))
            zaproducts.map(item=>{
                const box = document.createElement('tr')
                box.style.display = 'flex'
                box.style.width = '100%'
                box.innerHTML = `
                <td><img src="${item.image}" alt=""></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><button onclick="removefromadd(${item.id})">Remove</td>
                `
              table.appendChild(box)
            })
        })
    }
    }
filterdata.addEventListener('change',filterdataza)

const searchform = document.getElementById('searchform')
const searchinput = document.getElementById('searchinput')
function searchbyname(e){
    e.preventDefault()
    table.innerHTML = ''
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products`)
        .then(res=>{
            products = res.data
            let searchproducts = products.filter((item)=>item.name.toLowerCase().startsWith(searchinput.value.toLowerCase()));
            searchproducts.map(item=>{
                const box = document.createElement('tr')
                box.style.display = 'flex'
                box.style.width = '100%'
                box.innerHTML = `
                <td><img src="${item.image}" alt=""></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><button onclick="removefromadd(${item.id})">Remove</td>
                `
              table.appendChild(box)
            })
            searchinput.value = ''
        })
    }
    
searchform.addEventListener('submit',searchbyname)


const postform = document.getElementById('postform')
const nameinput = document.getElementById('nameinput')
const priceinput = document.getElementById('priceinput')


function postProduct(e) {
    e.preventDefault();
    axios
      .post(`https://65680f199927836bd97406d3.mockapi.io/username/products`, {
        name: nameinput.value,
        price: priceinput.value,
      })
      .then((res) => {
        getproducts();
        postform.reset();
      });
  }
  
  postform.addEventListener("submit", postProduct);
  

function removefromadd(id) {
    axios
      .delete(`https://65680f199927836bd97406d3.mockapi.io/username/products/${id}`)
      .then((res) => {
        getproducts();
      });
  }