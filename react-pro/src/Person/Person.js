import React from 'react';
import styled from 'styled-components';
//import Radium from 'radium';
import { Children } from 'react/cjs/react.production.min';

import './Person.css'


const StyledDive = styled.div`
width:60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
`;
const person = (props)=>{
    const style ={
        '@media (min-width: 500px)':{
            width:'450px'
        }
    };
return( 
//<div className="Person" style={style}>
<StyledDive>
<p onClick={props.clicks}>I m a {props.name} and i am {props.age} years old</p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}/>
</StyledDive>
)
};

export default person;