import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/ShopContext'
const Items = (props) => {
const { addToCart } = useContext(Context)
const navigate = useNavigate()
const handleAddToCart = () => {
addToCart(props)
navigate("/cart")
}
return (
<div className="items">
<img src={props.image} alt="" />
<p>{props.name}</p>
<div className="item-prices">
<div className="item-price-new">
${props.new_price}
</div>
<div className="item-price-old">
${props.old_price}
</div>
</div>
<button onClick={handleAddToCart} className='border-2 bg-red-800 text-white rounded-2xl w-[120px]'>
Add to Cart 
</button>
</div>
)
}
export default Items

