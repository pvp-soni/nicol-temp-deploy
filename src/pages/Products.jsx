import React from 'react'
import './buttons.css'

const Products = () => {
  const products = [
    {
      img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg',
      name: 'Cake'
    },
    {
      img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg',
      name: 'Cheese Cake'
    },
    {
      img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg',
      name: 'Chocolate Cake'
    },
    {
      img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg',
      name: 'Special Cake'
    },
  ];
  return (
    <>
    <div className="default_page_navigation_div">
        <div className="default_page_heading">Products</div>
        <div className="default_page_navigation_links"><a href='/'>Home</a> | Products</div>
    </div>
    <div className="products_main_container">
    {
      products.map((item, index)=>{
        return(
          <div className="productCard">
            <div className="productImageContainer">
              <img src={item.img} alt="" srcset="" />
            </div>
            <div>{item.name}</div>
          </div>
        )
      })
    }
    </div>
  </>
  )
}

export default Products