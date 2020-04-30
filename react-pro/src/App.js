import React, { Component } from 'react';
//import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';
//import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

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

// const StyledButton = styled.button`
// background-color:${props=>props.alt ? 'red' : 'green'};
// font:inherit;
// border:1px solid blue;
// padding:8px;
// cursor:pointer;
// color:black;
// &:hover {
//   background-color:lightgreen;
//   color:black;
// `;


class App extends Component {
  state={
    persons : [
      {id:'1',name:"himanshu",age:23},
      {id:'2',name:"gagan", age:27}
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
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }


  // nameChangedHandler = (event,id)=>  {

  //   const personIndex =  this.state.persons.find(p=>{
  //     return p.id===id;
  //   });
  //   const person = {...this.state.persons[personIndex]};
    

  //   person.name=event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[personIndex]=person;
  //   this.setState({persons:persons});
  //   // this.setState({
  //   //   persons:[
  //   //     {
  //   //       name:event.target.value,age:30
  //   //     },
  //   //     {
  //   //       name:"himanshu",age:27
  //   //     }
  //   //   ]
  //   // })
  // }

  
  deleteHandler=(index)=>
  {
   //const persons = this.state.persons.slice();
   const persons = [...this.state.persons]; 
   persons.splice(index,1);
   this.setState({persons:persons})
  }


  togglePersonsHandler=()=>
  {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
   render() {

    const style = {
     backgroundColor:'white',
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer',
     color:'white',
     ':hover':{
       backgroundColor:'lightgreen',
       color:'black'
     }

    };

    let persons = null;
    if(this.state.showPersons)
    {
      persons=(
        <div> 
          {this.state.persons.map((person,index)=>{
            return <Person 
            clicks={()=>this.deleteHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
        {/* <Person click={this.nameHandler.bind(this,'gaurav')} chan={this.nameChangedHandler} name={this.state.persons[0].name} 
                age={this.state.persons[0].age} >
        </Person>
        <Person name={this.state.persons[1].name} 
                age = {this.state.persons[1].age} >
        </Person> */}
       
        </div>
      );
      style.backgroundColor="red";
      style[':hover']={
        backgroundColor:'cyan',
        color:'black'
      }
    }

    // let classes = ['red','bold'].join(' ');
    const classes=[];
    if(this.state.persons.length==0)
    {
      classes.push('red');
    }
    if(this.state.persons.length<2)
    {
      classes.push('bold');
    }
     return (
     //  <StyleRoot>
       <div className="App">
         <h1 className={classes.join(' ')} >hijhgjgj</h1>



        <button alt = {this.state.showPersons}
        onClick={this.togglePersonsHandler}>Name</button> 
        {persons}
        {/* {this.state.showPersons? */}
          
        {/* :null} */}


         {/* <button
         style={style}
          onClick={()=>this.nameHandler('hogya')}>Name</button> */}
        {/* <Person name="himanshu" age="23">hgfhjo</Person> */}
        {/* <Person name="gagan" age="27"></Person> */}
       </div>
   //    </StyleRoot>
     );
     //return React.createElement('div',{className:'App'},React.createElement('h1',null,'does this'));
   }
 }
 
 export default App;
 
