import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "./HeaderComponents/HeaderLayout";
import Home from "./Home/HomeLayout";
import '../App.css';
import FooterHeader from "./FooterComponents/FooterHeader";
import Product from "./ProductComponents/Product";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function MainComponent() {
    const items = useSelector(state => state.reducer.items);

    const ProductId = () => {
        const id = useParams();
        const item = items.filter(item => item.id === parseInt(id.id))
        return (
            <Product item={item[0]} />
        )
    }

    return (
        <div className="App">
            <HeaderLayout />
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route exact path='/product/:id' element={<ProductId  />}/>
                <Route exact path='/cart' element={<ShoppingCart />} />
            </Routes>
            <FooterHeader />
        </div>
    );
}


// // Sample Code 

// function Product() {

//     const {id} = useParams();

//     const productItem = useSelector(state => state.items.filter(item => item.id === parseInt(id)))[0];

  
//         return (
//             <Product item={productItem} />
//         )



// }
 
export default MainComponent;