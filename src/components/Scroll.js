import React from 'react';

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll', border:'3px solid black', height:'800px'}}>
            {props.children}
        </div>    
    )
};

export default Scroll;


//there were 3 phases
//props
//states
//children
//here in this scroll function because it isnt a self closing tag, 
//and its targetting some element 