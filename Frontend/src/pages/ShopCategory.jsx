import React, { useContext } from 'react'
import { Context } from '../Context/ShopContext'
import Items from '../Items/Items'
import dropdown_icon from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/dropdown_icon.png"

const ShopCategory = (props) => {
  let {all_product}=useContext(Context)
  return (
    <div>
      <img src={props.banner} alt="" />
      <div className='flex justify-between'>
        <p><span className='font-bold'>Showing 1-12</span> out of 36 products</p>
        <div>
          <button className='flex justify-center items-center gap-2 rounded-2xl bg-gray-300 w-[15vh]'>Sort by 
          <img src={dropdown_icon} alt="" /></button>
        </div>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-2'>
         {
          all_product.map((item,index)=>{
            if(props.category===item.category){
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
            }
          })
         }
      </div>
    </div>
  )
}

export default ShopCategory