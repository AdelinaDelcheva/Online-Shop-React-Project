
import "./cart.css";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function ProductCart({cart,removeItemFromCart}){
  const deleteNotify=()=>toast("Successfully remove item to the cart");

    let totalPrice=cart.reduce((acc,curr)=>{
        return acc=acc+Number(curr.cost)*Number(curr.quantity)
      },0)
    return(
        <div>
        <section id="cart">
          <h4 style={{textAlign:"center"}}>Your Cart 
          <svg style={{paddingLeft:6}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" className="svg-inline--fa fa-cart-shopping " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
          </h4>
        </section>
        <div className="divider" style={{marginBottom:12}} />
        <table style={{paddingLeft:12}}>
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th className="numeric">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem,idx) => {
              return (
                <tr
                 
                  key={cartItem._id}
                  className="slide-up-fade-in"
                >
                  <td>{idx + 1}.</td>
                  <td className="name" data-testid="cart-item-name">
                    {cartItem.name}
                  </td>
                  <td
                    className="numeric quantity"
                    data-testid="cart-item-quantity"
                  >
                    {cartItem.quantity}
                    <button className="add-to-cart js-add-to-cart btn" 
                    id="tableBtn"
                    onClick={()=>{
                        removeItemFromCart(cartItem._id)
                        deleteNotify()
                                                                    
                     }}
                    >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                 <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
              </svg></button>
                  </td>
                </tr>
              );
            })}
           
          </tbody>     
                 
            <tfoot>
                <tr>
                    <td></td>
                    <td>Total Price:</td>
                    <td>{totalPrice.toFixed(2)}$</td>
                </tr>
            </tfoot>
    
  
        </table>

       
      </div>
    )

}