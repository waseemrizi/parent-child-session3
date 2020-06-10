import React from 'react';


function Child(props){
    return(
        <div>
            <h1>your name is {props.name}</h1>
    <h2>your subject is {props.subject}</h2>
    <h1>semester is {props.semester}</h1>

        </div>
    );
}




export default Child;