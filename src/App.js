import { useEffect, useState } from 'react';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';

function App() {
  return (
    <div className="App">
      <Showing></Showing>
      <Cosmetics></Cosmetics>
      <LoadPosts></LoadPosts>
      <District name="Kishoregonj" specialty="Residence of President"></District>
      <District name="Commilla" specialty="Chamcham"></District>
      <District name="Chittagoan" specialty="Turist spots"></District>
    </div>
  );
}

export default App;
// Data loaded function;
// External data loaded steps;
//1.declare useState();
//2.useEffect()
//3.fetch data('');
//4.data set in set function
//5.using map show data
function Showing(){
  return(
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'15px',margin:'15px'}}>
      <div>
        <h2>Left-side</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis, dolor at dignissimos deserunt minus, asperiores eaque explicabo omnis quisquam ratione ex accusantium minima itaque harum ad sunt velit debitis.</h3>
        <button style={{backgroudColor:'black',border:'1px solid blue',borderRadius:'15px'}}>click Me</button>
      </div>
      <div>
        <h2>Right-side</h2>
        <img src="https://i.ibb.co/CHMBVvP/resized-image-Promo-3.jpg" alt="" />
      </div>
    </div>
  );
}

function LoadPosts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 9)));
  }, []);
const headingStyle={
  backgroundColor:'yellow',
  border:'1px solid gray',
  borderRadius:'15px'
}
  return (
    <div>
      <h2 style={headingStyle}>Posts : {posts.length}</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'15px',margin:'15px'}}>
        {
          posts.map(post => <DisplayPosts
            post={post}

          ></DisplayPosts>)
        }
      </div>
    </div>
  );
}

function DisplayPosts(props) {
  const { title, body } = props.post;
  return (
    <div style={{ backgroundColor: 'lightpink', border: '1px solid yellow', borderRadius: '15px', marginBottom: '15px', fontFamily: 'monospace' }}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}


// Option 1 for styling;
// const districtStyle= {
//   backgroundColor:'orange',
//   border:'1px solid yellow',
//   borderRadius:'15px',
//   margin:'15px'
// }

// function District(props){
//   return(

//     <div style={districtStyle}>
//         <h1>Name:{props.name}</h1>
//         <h2>Specialty:{props.specialty}</h2>
//     </div>
//   );
// }

// Option 2 for styling connecting with App.css file;


function District(props) {
  const [power, setPower] = useState(1);
  const increasePower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (

    <div className='styling'>
      <h1>Name:{props.name}</h1>
      <h2>Specialty:{props.specialty}</h2>
      <h3>Power :{power} </h3>
      <button className='btn' onClick={increasePower}>Boost The Power</button>
    </div>
  );
}

// Option 3 for styling;
// function District(props){
//   return(

//     <div style={{backgroundColor:'yellow',border:'1px solid yellow',borderRadius:'15px',marginBottom:'15px'}}>
//         <h1>Name : {props.name}</h1>
//         <h2>Specialty : {props.specialty}</h2>
//     </div>
//   );
// }

