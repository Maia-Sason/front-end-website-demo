import { useState, useEffect } from 'react'

function Parallax ({image, title, content, offSetY}) {
    return (
    <div>
        <div className="parallax-content" style={{background: `url('${image}') linear-gradient(rgba(0,0,0,.5)`}}>
            {/* <img className="parallax-image" src={`${image}`} style={{ transform: `translateY(${ offSetY * -0.006}em)`}}></img> */}
        </div>
        <div className="parallax-body">
            <h2 className="parallax-title">{title}</h2>
            <p className="parallax-p">{content}</p>
        </div>
    </div>
    );
}

export default Parallax