import React from 'react';
function Welcome(props) {
    let name = props.match.params.name || props.name || "Default"; 
    return (
        <div className = "Welcome">
            <h1>Welcome, {name}!</h1>
        </div>
    );
}
export default Welcome;




