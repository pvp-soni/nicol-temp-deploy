import React from 'react'
import './buttons.css'

const About_us = () => {
  const aboutUs = [
    {
      img: "https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg",
      title: "About Us",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus non enim provident fugiat sint molestiae facere cum ab amet voluptatum corporis rerum veniam, facilis vitae voluptas veritatis esse quia quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum sed vitae quae nostrum voluptas temporibus labore aspernatur quisquam similique placeat totam, laudantium vel inventore officiis fugiat iure eaque? Facere.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg",
      title: "Our Story",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus non enim provident fugiat sint molestiae facere cum ab amet voluptatum corporis rerum veniam, facilis vitae voluptas veritatis esse quia quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum sed vitae quae nostrum voluptas temporibus labore aspernatur quisquam similique placeat totam, laudantium vel inventore officiis fugiat iure eaque? Facere.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg",
      title: "Our Philosophy",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus non enim provident fugiat sint molestiae facere cum ab amet voluptatum corporis rerum veniam, facilis vitae voluptas veritatis esse quia quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum sed vitae quae nostrum voluptas temporibus labore aspernatur quisquam similique placeat totam, laudantium vel inventore officiis fugiat iure eaque? Facere.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg",
      title: "What sets us apart?",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus non enim provident fugiat sint molestiae facere cum ab amet voluptatum corporis rerum veniam, facilis vitae voluptas veritatis esse quia quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum sed vitae quae nostrum voluptas temporibus labore aspernatur quisquam similique placeat totam, laudantium vel inventore officiis fugiat iure eaque? Facere.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg",
      title: "Our Team",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus non enim provident fugiat sint molestiae facere cum ab amet voluptatum corporis rerum veniam, facilis vitae voluptas veritatis esse quia quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum sed vitae quae nostrum voluptas temporibus labore aspernatur quisquam similique placeat totam, laudantium vel inventore officiis fugiat iure eaque? Facere.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg",
      title: "Visit Us",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus non enim provident fugiat sint molestiae facere cum ab amet voluptatum corporis rerum veniam, facilis vitae voluptas veritatis esse quia quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum sed vitae quae nostrum voluptas temporibus labore aspernatur quisquam similique placeat totam, laudantium vel inventore officiis fugiat iure eaque? Facere.",
    },
  ];
  return (
    <>
    <div className="default_page_navigation_div">
      <div className="default_page_heading">About Us</div>
      <div className="default_page_navigation_links"><a href='/'>Home</a> | About Us</div>
    </div>
    <div className="about_us_all_cards">
      {
        aboutUs.map((item, index)=>{
          // if(index%2==0){
            return (
              <>
              <div className="about_us_card">
                <div className="about_us_card_img"><img src={item.img} alt="" srcset="" /></div>
                <div className="about_us_card_info">
                  <div className="about_us_card_info_heading">{item.title}</div>
                  <div className="about_us_card_info_description">{item.description}</div>
                </div>
              </div>
              </>
            )
          // }
          // else{
          //   return (
          //     <>
          //     <div className="about_us_card">
          //       <div className="about_us_card_info">
          //         <div className="about_us_card_info_heading">{item.title}</div>
          //         <div className="about_us_card_info_description">{item.description}</div>
          //       </div>
          //       <div className="about_us_card_img"><img src={item.img} alt="" srcset="" /></div>
          //     </div>
          //     </>
          //   )
          // }
        })
      }
    </div>
    </>
  )
}

export default About_us