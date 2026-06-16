import React, { useContext } from 'react'
import { Context } from '../Context/ShopContext'

const Cart = () => {

    const { cartItems, removeFromCart } = useContext(Context)
    const total = cartItems.reduce((sum, item) => {
        return sum + item.new_price
    }, 0)

    return (

        <div className='cart'>
            
            <h1>Your Cart</h1>

            {
                cartItems.length === 0 ? (

                    <p>Cart is empty</p>

                ) : (

                    cartItems.map((item, index) => (

                        <div key={index}>

                            <img
                                src={item.image}
                                width="100"
                                alt=""
                            />

                            <p>{item.name}</p>

                            <p>${item.new_price}</p>
                            <button onClick={() => {
    console.log("Remove clicked");
    console.log(item);
    removeFromCart(item.id);
    }} className='border-2 bg-black text-white rounded-2xl w-[100px]'>
    Remove
</button>

                        </div>

                    ))
                )
            }

            {
                cartItems.length > 0 && (

                    <>

                        <h2>Total: ${total}</h2>

                        <button>
                            Buy Now
                        </button>

                    </>
                )
            }

        </div>
    )
}

export default Cart