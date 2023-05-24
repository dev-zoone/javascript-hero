const addProducts = () => {
    const productName = document.getElementById('product-name');
    const productQuentity = document.getElementById('product-quentity')

    const product = productName.value;
    const quentity = productQuentity.value;
    productName.value = "";
    productQuentity.value = "";
    // console.log(product, quentity)
    if(product === "" & quentity === ""){
        alert("please type your product or value")
        li.innerHTML = '';
    }
    displayProducts(product, quentity)
    saveProductToLocalStorage(product, quentity)
}

const displayProducts = (product, quentity) => {
    const ol = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quentity}`;
    ol.appendChild(li);
}

const getStoradShopingCart = () => {
    let cart = {};
    const storageCart = localStorage.getItem('cart');
    if(storageCart){
        cart = JSON.parse(storageCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quentity) => {
    const cart = getStoradShopingCart();
    cart[product] = quentity;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
    console.log(cart)
}

const displayProductFormLocalStorage = () => {
    const saveCart = getStoradShopingCart();
    console.log(saveCart)
    for(const product in saveCart) {
        const quentity = saveCart[product];
        console.log(product, quentity)
        displayProducts(product, quentity)
    }
}
displayProductFormLocalStorage()