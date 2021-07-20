import "./App.css";
import React from "react";
import Banner from "./components/UI/Banner";
import ItemList from "./components/Menu/ItemList";
import { CartContextProvider } from "./components/store/cart-context";

const items = [
    { name: "Samosa", description: "spicy indian snack", price: 10 },
    { name: "Buns", description: "mangalore pastery with banana", price: 20 },
    { name: "Masala Dosa", description: "Crispy Indian pancake", price: 50 },
    { name: "Roti curry", description: "North indian bread", price: 100 },
    { name: "Kerala parota", description: "Bread with coconut oil", price: 80 },
];

function App() {
    return (
        <CartContextProvider>
            <React.Fragment>
                <Banner />
                <ItemList items={items} />
            </React.Fragment>
        </CartContextProvider>
    );
}

export default App;
