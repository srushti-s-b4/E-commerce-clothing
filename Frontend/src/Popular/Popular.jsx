import React from 'react'
import Items from '../Items/Items'
import data_product from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/data"

const Popular = () => {
  return (
    <div className='gap-5'>
       <h1 className='font-black text-3xl flex justify-center items-center'>POPULAR IN WOMEN</h1>
       <div className='flex justify-center items-center gap-5'>
        {
            data_product.map((item,index)=>{
                return(
                   <Items 
                   key={index}
                   id={item.id}
                   name={item.name}
                   image={item.image}
                   new_price={item.new_price}
                   old_price={item.old_price}
                   />
                )
            })
        }
       </div>
    </div>
  )
}

export default Popular