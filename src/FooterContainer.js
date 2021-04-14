import React from 'react'

function FooterContainer(props) {
    const footer ={color: 'black', 
    backgroundColor: '#404040',
    color: 'white',
    padding: '2rem'
    };
    return (
        <div className="text-center  w3-hover-opacity-off" style = {footer}>
            <div className="w3-xlarge w3-section">
            </div>
            <p>Copyright 2021 	&#169; Victoria Black</p>
        </div>

    )
}
export default FooterContainer
