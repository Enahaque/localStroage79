import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { img, name, phone, email,id } = props.cosmetic;
// an arrow function;
    const AddToLoveCart = (id) =>{
        // console.log('added to cart',id);
        // localStorage.setItem(id,1);
        // addToDb(id);
        //----------------------
        // localStorage.setItem(id,1);
        //----------------------------
        addToDb(id);
    }
    return (
        <div className='cosmetic-container'>

            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h1>{name}</h1>
                <h2>{phone}</h2>
                <h3>{email}</h3>
                <p>{id}</p>
            </div>
            <button onClick={() => AddToLoveCart(id)}>AddToLoveCart</button>
        </div>
    );
};

export default Cosmetic;