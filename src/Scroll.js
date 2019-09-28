import React from 'react';

const Scroll=(props)=>{
    return(
        //we can add style in jsx by adding double curly braces
        <div style={{overflowY:'scroll', border:'0.5px solid black', height:'500px'}}>
            {props.children};
        </div>
    )
}

export default Scroll;