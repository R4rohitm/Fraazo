// import React,{useState,useEffect} from 'react'

// export const Slider = ({imgs}) => {
// const [index,setIndex]=useState(0);


// useEffect(() =>{
//     setIndex(0);
// },[]);

// const next=()=>{
//     if(index===imgs.length-1){
//         setIndex(0)
//     }
//     else{
//         setIndex(index+1)
//     }
// }
// const prev=()=>{
//     if(index===0){
//         setIndex(imgs.length-1)
//     }
//     else{
//         setIndex(index-1)
//     }
// }
//   return (
//     <div>
//       <img src={imgs[index]} alt="" />
//       <div>
//         <button onClick={next}>Next</button>
//         <button onClick={prev}>Prev</button>
//       </div>
//     </div>
//   )
// }


// .   App.js file

// import './App.css';
// import { Slider } from './components/Slider';

// function App() {
//   return (
//     <div className="App">
//       <h3>Slider Show</h3>
//      <Slider imgs={["https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png",
//      "https://imageprod.fraazo.com/fraazo-prod/web_ban/5135.png",
//      "https://imageprod.fraazo.com/fraazo-prod/web_ban/5262.png",
//      "https://imageprod.fraazo.com/fraazo-prod/web_ban/5260.png"]}/>
//     </div>
//   );
// }

// export default App;
