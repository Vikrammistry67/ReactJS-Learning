import { useState } from "react";

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2000 }
];

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
        setCartCount(prev => prev + 1);
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id != id));
        setCartCount(prev => prev == 0 ? prev : prev - 1);
    }


    console.log('Hey Commit')
    return (
        <div>
            <button style={{ position: 'absolute', top: '2%', right: '10%', backgroundColor: '#222' }}>Cart : {cartCount}</button>
            {
                products.map(product => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#333', marginTop: '10px' }}>
                            <p>{product.id}</p>
                            <h2>{product.name}</h2>
                            <h3>₹ {product.price}</h3>

                            <button onClick={() => addToCart(product)}>add to card</button>
                            <button onClick={() => removeFromCart(product.id)} style={{ backgroundColor: 'red' }}>remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart