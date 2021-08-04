import "./App.css";
import { Fragment } from "react";
import Header from "./components/UI/Header";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";

const items = [
  {
    id: 1,
    name: "Laptop",
    description: "a portable computing device",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: "Smartphone",
    description: "highly portable computing device",
    price: 40,
    quantity: 1,
  },
  {
    id: 3,
    name: "Watch",
    description: "wrist watch with leather strap",
    price: 10,
    quantity: 1,
  },
];

function App() {
  return (
    <Fragment>
      <Header>REDUX PRACTICE APP</Header>
      <Cart/>
      <Catalog items={items} />
    </Fragment>
  );
}

export default App;
