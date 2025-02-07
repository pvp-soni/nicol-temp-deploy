import React from 'react'
import './buttons.css'

const Categories = () => {
  const categories = [
    {
      img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg',
      name: 'Cakes'
    },
    {
      img: 'https://www.phoolwala.com/images/product/phw-n-16-ry-r.jpg',
      name: 'Flower Bouquet'
    },
    {
      img: 'https://assets.oyegifts.com/flowers-n-gifts/vendordata/product/yuva1431.jpg',
      name: 'Chocolates'
    }
  ];
  return (
    <>
    <div className="default_page_navigation_div">
        <div className="default_page_heading">Categories</div>
        <div className="default_page_navigation_links"><a href='/'>Home</a> | Categories</div>
    </div>
    <div className="products_main_container">
    {
      categories.map((item, index)=>{
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

export default Categories