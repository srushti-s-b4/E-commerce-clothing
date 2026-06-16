import React from 'react'
import hero_img from './Ecommerce_Assets (1)/Assets/Frontend_Assets/hero_image.png'

const Offers = () => {
  return (
    <div>
        <div>
            <h2>Exclusive</h2>
            <h2>Offers for You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now </button>
        </div>
        <div>
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Offers