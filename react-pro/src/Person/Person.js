import React from 'react';
import { Children } from 'react/cjs/react.production.min';

import './Person.css'
const person = (props)=>{
return( 
<div className="Person">
<p onClick={props.click}>I m a {props.name} and i am {props.age} years old</p>
<p>{props.children}</p>
<input type="text" onChange={props.chan} value={props.name}/>
</div>
)
};

export default person;