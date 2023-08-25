import { useEffect, useState } from "react"
import ShoppingCartForm from "../Form/ShoppingCartForm";
import ShoppingCartItem from "../ProductItem/ShoppingCartItem";
import { GetAllProducts, buyProduct, deleteProduct } from "../../service/service";
import ProductCart from "../Cart/ProductCart";




export default function ShoppingCart(){
    // const [products,setProducts]=useState([]);


    
   
    const[quantityProducts,setQuantity]=useState([]);
    const[cartProducts,setCart]=useState([]);

    useEffect(()=>{
        
        getAllProductsToCart();
        getQuantity();
      
    },[]);

//   const getAll= ()=>{ GetAllProducts().then(res=>setProducts(Object.values(res)))};
  let totalPrice=cartProducts.reduce((acc,curr)=>{
    return acc=acc+Number(curr.cost)*Number(curr.quantity)
  },0)
  let count=quantityProducts.filter(p=>p.isBought).length;

   const getQuantity= ()=>{GetAllProducts().then(res=>{

    let all=Object.values(res).map(p=>{
        p.quantity=0;
        return p;
    })
    setQuantity(all)
})};

const getAllProductsToCart=()=>{
    let cart=quantityProducts.filter(p=>p.quantity>0);
    setCart(cart);
}
 
 
    return(
        <section className="shopping-cart__container">
            <ShoppingCartForm/>

            <section id="hero">
            <section className="shopping-cart__items-list">
                {
                   
                   quantityProducts.map((product)=>{
                        return <ShoppingCartItem 
                        key={product.name} 
                        item={product}
                       
                        addItem={(productId)=>{
                           const newPr=quantityProducts.map((pr)=>{
                                if(pr._id===productId){
                                    pr.quantity+=1;
                                }

                            return pr;
                           })
                           
                           setQuantity(newPr);
                           getAllProductsToCart();
                         
                        }}

                        removeItem={(productId)=>{
                            const newPr=quantityProducts.map((pr)=>{
                                 if(pr._id===productId && pr.quantity>0){
                                     pr.quantity-=1;
                                 }
 
                             return pr;
                            })
                            
                            setQuantity(newPr);
                            getAllProductsToCart();
                          
                         }}
                        handleBuyItem={(productId)=>buyProduct(productId).then(getQuantity)}
                        handleDeleteItem={(productId)=>deleteProduct(productId).then(getQuantity)}/>
                    })
                }

              
            </section>
            <section id="cart-section">
            <div className="grid-product square fav">
                    <ProductCart
                     cart={cartProducts}
                     removeItemFromCart={(productId)=>{
                        const newPr=quantityProducts.map((pr)=>{
                             if(pr._id===productId && pr.quantity>0){
                                 pr.quantity=0;
                             }

                         return pr;
                        })
                        
                        setQuantity(newPr);
                        getAllProductsToCart();
                      
                     }}
                     />
                    </div>
            </section>
            </section>

            {/* <div className="shopping-cart__total-price">
             <h1>Total Price: {totalPrice}$</h1>
             <h1>Count:{cartProducts.length}</h1>	
             <ul>
                {cartProducts.map(p=>{
                    return <li key={p._id}>{p.name} {p.quantity}  {p.price}</li>
                })}
             </ul>
          </div> */}
        </section>
    )
}