import React, { useContext } from 'react'
import styles from './cart.module.css'
import {CartContext, } from '../contexts/useCart'

const img = "https://gopherbot.com/images/gopher.jpg"

export default ({product, title, price, pics=[], quantity=1, _id})=>{

    let {changeQuantity, deleteItem, addItemToCart} = useContext(CartContext) //aqui llamas a la funcion del total

    return (
        <div className={styles.rowContainer}>
            <div>
                <img src={pics[0]} alt="blissito" />
            </div>
            <div >
                <span>
                    {title}
                </span>
                <div>
                    
                <span>Cantidad:</span>
                    <input value={quantity} type="number" min="10" max="99"/>
                    
                </div>
            </div>
            <div>
                
                <span>$ {price}.00</span>
            </div>
            <span>Total</span>

                <span>$ {quantity*price}.00</span>
                <span
                onClick={()=>{
                    deleteItem(_id)
                }}
                >Eliminar</span>
        </div>
    )
}