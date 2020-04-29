import React, { Component } from 'react';
//import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// const app = props => {
// const [personsState,setPersonsState] = useState({
//       persons : [
//              {name:"himanshu",age:23},
//               {name:"gagan", age:27}
//              ] 
//     });
//   const nameHandler = ()=>{
//         console.log('clicked')
//         //dont do this -> this.state.persons[0].name="anurag";
//         setPersonsState({ persons : [
//          {name:"himanshu",age:30},
//          {name:"gagan", age:54}
//        ]});
//       };
//     return (
//       <div className="App">
//         <h1>hi</h1>
//         <button onClick={nameHandler}>Name</button>
//        {/* <Person name="himanshu" age="23">hgfhjo</Person> */}
//        {/* <Person name="gagan" age="27"></Person> */}
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} ></Person>
//       </div>
//     );
//     //return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this'));
//   }

// export default app;


class App extends Component {
  state={
    persons : [
      {name:"himanshu",age:23},
      {name:"gagan", age:27}
    ],
    showPersons: false
  }
  nameHandler = (namenew)=>{
    console.log('clicked')
    //dont do this -> this.state.persons[0].name="anurag";
    this.setState({ persons : [
     {name:"himanshu",age:30},
     {name:namenew, age:54}
   ]})
  }

  nameChangedHandler = (event)=>
  {
    this.setState({
      persons:[
        {
          name:event.target.value,age:30
        },
        {
          name:"himanshu",age:27
        }
      ]
    })
  }
  togglePersonsHandler=()=>
  {
    
  }
   render() {

    const style = {
     backgroundColor:'white',
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer'
    };
     return (
       <div className="App">
         <h1>hi</h1>

        <button 
        onClick={this.togglePersonsHandler}>Name</button>
        
        {<div> 
        <Person click={this.nameHandler.bind(this,'gaurav')} chan={this.nameChangedHandler} name={this.state.persons[0].name} 
                age={this.state.persons[0].age} >
        </Person>
        <Person name={this.state.persons[1].name} 
                age = {this.state.persons[1].age} >
        </Person>
       
        </div>}


         {/* <button
         style={style}
          onClick={()=>this.nameHandler('hogya')}>Name</button> */}
        {/* <Person name="himanshu" age="23">hgfhjo</Person> */}
        {/* <Person name="gagan" age="27"></Person> */}
       </div>
     );
     //return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this'));
   }
 }
 
 export default App;
 
