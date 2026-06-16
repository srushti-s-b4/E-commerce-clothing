const Cart=require("../models/Cart")
exports.addcart=async(req,res)=>{
    try{
    const {userId,product}=req.body
    let cart=await Cart.findOne({userId})
    if(!cart){
        cart=await Cart.create({
            userId,
            products: [
          {
            productId: product.id,
            name: product.name,
            image: product.image,
            new_price: product.new_price,
            quantity: 1
          }
        ]
        })
    }
    else{
        const existingProduct = cart.products.find(
        (item) => item.productId === product.id
      );
       if (existingProduct) {

        existingProduct.quantity += 1;

      } else {

        cart.products.push({
          productId: product.id,
          name: product.name,
          image: product.image,
          new_price: product.new_price,
          quantity: 1
        });
      }
      await cart.save();
    }
    res.status(200).json({
      success: true,
      message: "Item added to cart",
      cart
    });
}catch(error){
    res.status(500).json({
      success: false,
      message: error.message
    });
}
}
exports.getCart = async (req, res) => {

  try {

    const { userId } = req.params;

    const cart = await Cart.findOne({ userId });

    res.status(200).json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
}

exports.removeFromCart = async (req, res) => {
    try { 
        console.log("BODY:", req.body);

        const { userId, productId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        cart.products = cart.products.filter(
    item => item.productId !== Number(productId)
);

        await cart.save();

        res.status(200).json({
            message: "Item removed successfully",
            cart
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};