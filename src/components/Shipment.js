import { useState } from "react";
import React from "react";
import ShipmentFilter from "./ShipmentFilter";
import ProductDetails from "./ProductDetails";

import "./Shipment.css";
import Button from "../UI/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const DUMMY_SHIPMENT_DATA = [
  {
    product_id: 1,
    product: "Arizona - Green Tea",
    price: "$32.61",
    customer_name: "Payton",
    status: "Completed",
  },
  {
    product_id: 2,
    product: "Wine - Crozes Hermitage E.",
    price: "$78.39",
    customer_name: "Jillane",
    status: "Completed",
  },
  {
    product_id: 3,
    product: "Lettuce - Lambs Mash",
    price: "$296.42",
    customer_name: "Lyn",
    status: "InCompleted",
  },
  {
    product_id: 4,
    product: "Lid - 0090 Clear",
    price: "$418.66",
    customer_name: "Carling",
    status: "InCompleted",
  },
  {
    product_id: 5,
    product: "Split Peas - Green, Dry",
    price: "$3.99",
    customer_name: "Tuesday",
    status: "Completed",
  },
  {
    product_id: 6,
    product: "Pop Shoppe Cream Soda",
    price: "$252.69",
    customer_name: "Bathsheba",
    status: "InCompleted",
  },
  {
    product_id: 7,
    product: "Lettuce - Romaine",
    price: "$298.82",
    customer_name: "Anabelle",
    status: "InCompleted",
  },
  {
    product_id: 8,
    product: "Melon - Watermelon Yellow",
    price: "$459.97",
    customer_name: "Sebastien",
    status: "Completed",
  },
  {
    product_id: 9,
    product: "Tomato - Green",
    price: "$382.46",
    customer_name: "Timothea",
    status: "Completed",
  },
  {
    product_id: 10,
    product: "Pepper - Black, Whole",
    price: "$482.83",
    customer_name: "Beale",
    status: "InCompleted",
  },
];

const Shipment = (props) => {
  const [filteredStatus, setFilteredStatus] = useState("Completed");
  const [viewProduct, setViewProduct] = useState(false);
  const [clickedId, setClickedId] = useState();

  const filterChangeHandler = (selectedStatus) => {
    console.log("Shipment Folder");

    setFilteredStatus(selectedStatus);
  };

  let currentList = DUMMY_SHIPMENT_DATA.filter((selectedStatus) => {
    return selectedStatus.status.toString() === filteredStatus;
  });

  const handleProductView = (value) => {
    setViewProduct(true);
    // currentList.map((item)=>(
    // console.log("ClickedKey=>",item.product_id)
    const clickedId = +value;
    setClickedId(clickedId);
    console.log("ClickedKey1=>", clickedId);
    // console.log("ClickedKey=>",currentList[0].product_id);
    console.log("ClickedKey2=>", clickedId);
  };
  let currentProduct = currentList.filter((selectedItem) => {
    return selectedItem.product_id === clickedId;
  });
  console.log("ClickedKey3=>", currentProduct);

  return (
    <div className="shipment-item">
      {viewProduct &&
        currentProduct.map((prod, id) => (
          <ProductDetails
            key={id}
            product_id={prod.product_id}
            product={prod.product}
            price={prod.price}
            customer_name={prod.customer_name}
            status={prod.status}
          />
        ))}
      {!viewProduct && (
        <ShipmentFilter
          selected={filteredStatus}
          onChangeFilter={filterChangeHandler}
        />
      )}

      {!viewProduct && (
        <Container>
          <Table striped bordered hover>
            <caption>Shipment Details.</caption>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Amount</th>
                <th>Customer Name</th>
                <th>Status</th>
                <th>Product Details</th>
              </tr>
            </thead>
            <tbody>
              {currentList.map((product, id) => (
                <tr key={id}>
                  <td>{product.product}</td>
                  <td>{product.price}</td>
                  <td>{product.customer_name}</td>
                  <td>{product.status}</td>
                  <td>
                    {/* <button onClick={()=> handleProductView(product.product_id)}>View</button> */}
                    <Button
                      onClick={() => handleProductView(product.product_id)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default Shipment;
