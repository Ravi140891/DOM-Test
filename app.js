let product = document.getElementById("product-id");
const productType = document.querySelector("select");
const item = document.getElementById("image");
const catalog = document.querySelector(".catalog");
const addButton = document.querySelector(".add-btn");
const all = document.querySelector(".all");
const headphones = document.querySelector(".headphones")
const mobiles = document.querySelector(".mobiles")
const laptops = document.querySelector('.laptops');
let products = [];

const addItem = (e) => {
    if(e.target == addButton){
        if(product.value === ""){
        const err = document.querySelector(".error");
        err.style.display = "block"
        setTimeout(() => {
            err.style.display = "none"
        }, 2000)
        }
        const item = {
            productId : product.value,
            type : productType.value 
        }
        products.push(item);
    }
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.classList.add(`${productType.value}`)
    const productPic = document.createElement("div");
    productPic.classList.add("product");
    const image = document.createElement("img");
    image.src = `${product.value}`;
    const delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    delBtn.innerText = "Delete"
    
    if (product.value === "") {
      const err = document.querySelector(".error");
      err.style.display = "block";
      setTimeout(() => {
        err.style.display = "none";
      }, 2000);
    }else{
    productPic.appendChild(image);
    newItem.appendChild(productPic);
    newItem.append(delBtn);
    delBtn.addEventListener("click", (e) => {
      const target = e.target.parentNode;
        target.remove();
    });
    }            

    catalog.appendChild(newItem);
    product.value = ""

}

addButton.addEventListener('click', addItem)

const render = (products,filter) => {
    catalog.innerHTML = "";
    const filteredItem = products
      .filter((item) => filter == 'all' ? true : item.type == filter)
      console.log(filteredItem);
      filteredItem.map((product) => {
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.classList.add(`${productType.value}`);
        const productPic = document.createElement("div");
        productPic.classList.add("product");
        const image = document.createElement("img");
        image.src = `${product.productId}`;
        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");
        delBtn.innerText = "Delete";
        productPic.appendChild(image);
        newItem.appendChild(productPic);
        newItem.append(delBtn);
        delBtn.addEventListener("click", (e) => {
          const target = e.target.parentNode;
          target.remove();
        });
        console.log(catalog, newItem);
        catalog.appendChild(newItem);
      });
}




mobiles.addEventListener('click', (e) => {
    render(products, "mobile")
})

headphones.addEventListener('click', (e) => {
    render(products,"headphone");
})

laptops.addEventListener('click', (e) => {
    render(products,"laptop")

})
 all.addEventListener('click', (e) => {
    render(products, "all")
 })







