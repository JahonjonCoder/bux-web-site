import React from 'react'

const NavLinks = () => {
    const links = [
        {name:'Men'},
        {name:'Women'},
        {name:'Kids'},
    ];

    return(
        <div>
            {
                links.map(item =>(
                    <div>{item.name}</div>
                ))
            }
        </div>
    )
}

export default NavLinks