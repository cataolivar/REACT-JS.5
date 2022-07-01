import React from "react";

function ItemDetail () {
    return(
        <div>
            <h2>Detalle de producto</h2>
            <h3>{products.name}</h3>
                <img src={products.img} alt="img" />
                <p>{products.description}</p>
        </div>
    )
}

export default ItemDetail