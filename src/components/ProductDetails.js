import React from "react";
import Card from "../UI/Card";

import './ProductDetails.css';

const DUMMY_PRODUCT_DATA = [
  {
    product_id: 1,
    product_description:
      "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae",
    color: "Teal",
    image:
      "https://robohash.org/autvoluptatesconsectetur.png?size=50x50&set=set1",
  },
  {
    product_id: 2,
    product_description:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
    color: "Orange",
    image: "https://robohash.org/enimcupiditateut.png?size=50x50&set=set1",
  },
  {
    product_id: 3,
    product_description:
      "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    color: "Red",
    image: "https://robohash.org/sedtemporaaut.png?size=50x50&set=set1",
  },
  {
    product_id: 4,
    product_description:
      "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
    color: "Aquamarine",
    image: "https://robohash.org/illosolutainventore.png?size=50x50&set=set1",
  },
  {
    product_id: 5,
    product_description:
      "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    color: "Fuscia",
    image: "https://robohash.org/voluptatemcumquea.png?size=50x50&set=set1",
  },
  {
    product_id: 6,
    product_description:
      "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
    color: "Pink",
    image: "https://robohash.org/undeetquae.png?size=50x50&set=set1",
  },
  {
    product_id: 7,
    product_description:
      "purus eu magna vulputate luctus cum sociis natoque penatibus et",
    color: "Puce",
    image: "https://robohash.org/molestiasculpamodi.png?size=50x50&set=set1",
  },
  {
    product_id: 8,
    product_description:
      "cras pellentesque volutpat dui maecenas tristique est et tempus semper",
    color: "Indigo",
    image:
      "https://robohash.org/cupiditatelaboriosamat.png?size=50x50&set=set1",
  },
  {
    product_id: 9,
    product_description:
      "id pretium iaculis diam erat fermentum justo nec condimentum neque",
    color: "Fuscia",
    image: "https://robohash.org/autaliquidqui.png?size=50x50&set=set1",
  },
  {
    product_id: 10,
    product_description:
      "dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
    color: "Khaki",
    image: "https://robohash.org/totampariaturquas.png?size=50x50&set=set1",
  },
];

const ProductDetails = (props) => {

    console.log("Passed_Id =>",props.product_id)
//   if (props.product_id === DUMMY_PRODUCT_DATA.product_id) {
    const currentProduct = DUMMY_PRODUCT_DATA.filter((item)=>{
        return item.product_id === props.product_id
});
  console.log("Product==>",currentProduct);

  return (
    <li>
      <Card className="expense-item">
        {currentProduct.map((item)=>
        <div>
          <h2>{props.product}</h2>
            <div className='expense-item__description'>
                <div>Status: {props.status}</div>
                <div>Colour : {item.color}</div>
                <div>Product Description: {item.product_description}</div>
                <img id="photo" src={item.image}/>
                <div>Customer Name: {props.customer_name}</div>
            </div>
            <div className='expense-item__price'>Amount: {props.price}</div>
            </div>
        )}
        {/* <button onClick={changeHandler} id='btn'>Change Title</button> */}
      </Card>
      </li>
  );
};
export default ProductDetails;
