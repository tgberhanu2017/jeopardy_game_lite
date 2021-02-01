import React from 'react';
function fourOneFour(props) {
    let name = props.match.params.name || props.name; 
    return (
        <div className = "fourOneFour">
            <h1> 404 </h1>
        </div>
    );
}
export default fourOneFour;
