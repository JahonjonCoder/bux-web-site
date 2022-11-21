import React from 'react';

const Helmet = (props) => {
    document.title="Buxoro.uz | " + props.title;
    return (
        <div>
            {props.children}            
        </div>
    );
}

export default Helmet;
