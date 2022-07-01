import React, { useEffect } from "react";
import { getData } from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";
import PacmanLoader from "react-spinners/PacmanLoader"
import "./ItemDetailContainer.css"

function ItemDetailContainer () {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (()=> {
        getData
        .then(resp => setProductList(resp.find(prod => prod.id[0])))
        .finally(()=> setLoading(false))

    }, [])

    return(
        <div className="spinners"> {loading ? <PacmanLoader color="#FFC0CB" size= {25} margin={0}/>
            : <ItemDetail productList={productList}/>} </div>
    )

}