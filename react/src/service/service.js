export async function GetAllProducts(){
    const responce=await  fetch('http://localhost:3030/jsonstore/products/');
    return  responce.json();
   
}

export async function createProducts(product){
    const responce=await  fetch('http://localhost:3030/jsonstore/products/',{
        method:"POST",
        body:JSON.stringify(product)
    });
    return  responce.json();
   
}

export async function buyProduct(productId){
    const responce=await  fetch(`http://localhost:3030/jsonstore/products/${productId}`,{
        method:"PATCH",
        body:JSON.stringify({isBought:true})
    });
    return  responce.json();
   
}

export async function deleteProduct(productId){
    const responce=await  fetch(`http://localhost:3030/jsonstore/products/${productId}`,{
        method:"DELETE",
        
    });
    return  responce.json();
   
}

