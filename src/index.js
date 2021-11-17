import React from 'react';
import {render} from 'react-dom';
import './styles.scss';
import sun from "/src/Images/cuteMovingSun.gif"
import hereComesTheSun from '/src/Images/HereComesTheSunEdit.mp3'
import useSound from 'use-sound';
import { BrowserRouter as Router, Route, Routes } from 
'react-router-dom';
import {Link} from 'react-router-dom'


const App = () => {
  return (
     <Router>
         <Routes>
             <Route exact path="/"  element={<Homepage/>}></Route>
             <Route path="/routine" exact element={<Page2/>}></Route>
         </Routes>
     </Router>
      )
};

const Homepage = () => {
 return (
    <div>Good Morning, Sunshine!
    <img className = "sun" src={ sun }/>
    <MusicButton />
    <Link to="/routine">
        <button className="routineButton">Make Routine</button>
    </Link>
    </div>
 )
}

const Page2 = () => {
    return (
        <div >
        Make Your Routine!
        </div>
    )

   }
   

const MusicButton = () => {
    const [play] = useSound(hereComesTheSun);
  
    return <button className= 'music' onClick={play}>Morning Jams</button>;
  };

const routine = () => {
    return <button>Make Routine</button>
}
    
// render(<Title />, document.getElementById('root'));
// render( <img className = "sun" src={ sun }/>, document.getElementById('mySun'));
// render(<BoopButton />, document.getElementById('music'))

render(<App />, document.querySelector("#root"));
