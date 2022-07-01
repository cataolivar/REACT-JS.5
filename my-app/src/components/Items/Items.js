import React from "react"
import "./Items.css"

const Items = ({product}) => {
    const { name, price, img, description} = product

    return (
        <>
            <div className="divItems">
                <h3 className="h3Items">{name}</h3>
                <img className="img1" src={img} alt="img" />
                <p>{description}</p>
                <h4><span>${price}</span></h4>
                <button className="itemsButton">Ver mas</button>
            </div>
        </>
    )
}

export default Items