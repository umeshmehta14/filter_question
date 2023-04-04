import React, { useState } from 'react'

// Create a React app that displays a list of products with their name, price, and category. Implement a feature that allows users to input a maximum price value and filters the displayed list of products to show only those whose price is less than or equal to the input value, using the filter() function.
const Question1 = () => {
    const products = [
        { name: "Apple iPhone 13", price: 999, category: "Electronics" },
        { name: "Samsung Galaxy S21", price: 799, category: "Electronics" },
        { name: "Sony WH-1000XM4 Headphones", price: 349, category: "Electronics" },
        { name: "Nike Air Max 270", price: 150, category: "Footwear" },
        { name: "Levi's 501 Jeans", price: 80, category: "Clothing" },
        { name: "KitchenAid Stand Mixer", price: 399, category: "Home Appliances" },
        { name: "Bose SoundLink Revolve+", price: 249, category: "Electronics" },
        { name: "Samsung QLED Q90T TV", price: 1999, category: "Electronics" },
        { name: "Ray-Ban Aviator Sunglasses", price: 169, category: "Accessories" },
        { name: "Canon EOS R6 Camera", price: 2499, category: "Electronics" },
      ];
    const [curPrice, setCurPrice] = useState('');
    const [data, setData] = useState(products);
    const [showPrice, setShowPrice] = useState(false);

    

      const ChangeHandler = (event)=>{
        const currValue = event.target.value;
        console.log(currValue)
          setCurPrice(currValue);
          if(currValue > 0)
          {
              const newData = products.filter(({price})=>{
                  return price <= currValue;
                })
                setData(newData);
                setShowPrice(true);
            }
            else{
                setData(products);
                setShowPrice(false);

            }

      }
      
      
  return (
    <div>
        <h1>Question 1</h1>
        <input type="number" value={curPrice} onChange={ChangeHandler}/>
        <p>{showPrice && `Products under ${curPrice}`}</p>
      {
        data.map(product =>{
            return (
              <div key={product.name} style={{border:"2px solid black"}}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                </div>
        )})
      }
    </div>
  )
}

export default Question1
