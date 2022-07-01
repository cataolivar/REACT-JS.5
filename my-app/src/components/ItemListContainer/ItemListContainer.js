import React, { useEffect, useState} from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import "./ItemListContainer.css"
import fonts from "../../assets/fonts/fonts.css"
import UseItems from "../UseItems/UseItems";
import {getData} from "../../mocks/fakeApi";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        getData
        .then((res)=> setProductList(res))
        .catch((error) => <p>YA WEY...</p>)
        .finally(()=> setLoading(false))

    }, [])


    const onAdd = (cantidad) => {
        console.log(`Se agrego al carrito ${cantidad}`);
    }

    return (
        <div>
            <span className= "greeting">{greeting}</span>
            <UseItems stock={10} initial={1} onAdd={onAdd}/>
           <div className="spinners"> {loading ? <PacmanLoader color="#FFC0CB" size= {25} margin={0}/>
            : <ItemList productList={productList}/>} </div>
        </div>
    );
};

export default ItemListContainer