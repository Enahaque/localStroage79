//use local storage to manage(add,remove,change) cart data;

// const addToDb = id =>{
//     const quantity = localStorage.getItem(id);
    
//     if(quantity){
//         // console.log('already exists');
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     }else{
//         localStorage.setItem(id,1);
//         // console.log('new item add');
//     };
// };
// export {addToDb}

//-----------------------------------------
//use localStorage to manage(add,remove,change) cart data;
const addToDb = (id) =>{
    const quantity=localStorage.getItem(id);
    if(quantity){
            console.log('already exists');
            const newQuantity= parseInt(quantity) + 1;
            localStorage.setItem(id,newQuantity);
    }else{
        localStorage.setItem(id,1);
        console.log('new item');
    }
    
}
export{addToDb}