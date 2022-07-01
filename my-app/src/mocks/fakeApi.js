import img1 from "../../src/assets/img/mediasCloud.PNG"
import img2 from "../../src/assets/img/parcheJessica.PNG"
import img3 from "../../src/assets/img/tinturaCandy.PNG"

const products = [
    {id:"01", name:"Medias Cloud", description:"MEDIAS ☁️NUBES☁️ DISPONIBLES EN #KALAKA !", img:img1, stock:5, price:500},
    {id:"02", name:"Parche Jessica", description:"PARCHE JESSICA DISPONIBLES EN #KALAKA !", img:img2, stock:5, price:300},
    {id:"03", name:"Tintura Candy", description:"TINTURAS PARA EL PELO 🍬CANDY🍬VEGANAS", img:img3, stock:5, price:1500}
]

export const getData = new Promise ((resolve,reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        }
        else { reject ("SALIO MAL")}

    },3000)
})