import React from "react";
import "./ItemDetail.css"

function ItemDetail ({productList}) {
    return(
        <div>
            <h2 className="hItemDetail">Detalle de producto</h2>
            <h3 className="hItemDetail">{productList.name}</h3>
                <img className="imgItemDetail" src={productList.img} alt="img" />
                <p>{productList.description}</p>
                <p>Color <input type="radio" name="color" value=""></input> Unico</p>
                <p>Talle <input type="radio" name="talle" value=""></input> Unico</p>
                <h4><span>${productList.price}</span></h4>
        </div>
    )
}

export default ItemDetail