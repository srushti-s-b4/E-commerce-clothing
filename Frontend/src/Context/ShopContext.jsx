import { createContext, useState } from "react"

import all_product from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/all_product"

export const Context = createContext(null)

const ShopContext = (props) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const addToCart = async (product) => {

        try {

            const response = await fetch(
                "http://localhost:3000/api/add",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        userId: "123",
                        product
                    })
                }
            )

            const data = await response.json()

            console.log(data)

            // update frontend cart
            setCartItems((prev) => [...prev, product])

        } catch (error) {

            console.log(error)
        }
    }
    const removeFromCart = async (productId) => {
         console.log("Sending:", productId);

    try {

        await fetch(
            "http://localhost:3000/api/remove",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: 123,
                    productId
                })
            }
        );

        setCartItems(prev =>
            prev.filter(item => item.id !== productId)
        );

    } catch (error) {

        console.log(error);
    }
};
    const contextValue = {

        all_product,

        cartItems,

        addToCart,

        removeFromCart,
        isLoggedIn,
        setIsLoggedIn
    }

    return (

        <Context.Provider value={contextValue}>

            {props.children}

        </Context.Provider>
    )
}

export default ShopContext