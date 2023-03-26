// let addToProduct=

// const AddToCart=(id,title,price)=>{

// }

const AddToCartLocalStore=(id)=>{
    let shoppingCart={}
    // 
    const storeCart=localStorage.getItem('shopping-cart')
    if(storeCart){
        shoppingCart=JSON.parse(storeCart)
    }


    const quantity=shoppingCart[id]
    if(quantity){
        const newQuantity=quantity+1
        shoppingCart[id]=newQuantity
    }else{
        shoppingCart[id]=1

    }

    let shoppingCartSting=JSON.stringify(shoppingCart)
    localStorage.setItem('shopping-cart',shoppingCartSting)

}

export { AddToCartLocalStore }

