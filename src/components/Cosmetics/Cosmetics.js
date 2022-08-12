import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {
    const[cosmetics,setCosmetics]=useState([]);
    useEffect( ()=>{
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setCosmetics(data))
    },[])

    // const cosmetics = [
    //     { id: 1, name: 'alta', price: 100 },
    //     { id: 2, name: 'palta', price: 200 },
    //     { id: 3, name: 'salta', price: 300 },
    //     { id: 4, name: 'malta', price: 400 },
    //     { id: 5, name: 'talta', price: 500 },
    // ];
    return (
        <div>
            <h2>My Cosmetics : {cosmetics.length}</h2>
            <div className='cosmetics'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;