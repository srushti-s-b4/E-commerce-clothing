import React from 'react'
import Items from './Items/Items'
import new_collections from "./Ecommerce_Assets (1)/Assets/Frontend_Assets/new_collections"
const NewCollection = () => {
  return (
    <div>
        <h1>NEW COLLECTIONS</h1>
        <div>
            {
                new_collections.map((item,index)=>{
                    return <Items
                    key={index}
                    id={item.id}
                    name={item.name} 
                    image={item.image}
                    new_price={item.new_price} 
                    old_price={item.old_price}
                    />
                })
            }
        </div>
    </div>
  )
}

export default NewCollection