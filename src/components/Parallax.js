import { ReactDom } from 'react'
import { useState, useEffect, useRef } from 'react'

function Parallax ({image, title, content, offSetY}) {
    const [offSetDiv, setOffSetDiv] = useState(0);
    const ref = useRef(null);

    useEffect( () => {
        setOffSetDiv(setTimeout(() => {
            ref.current.getBoundingClientRect();
         }, 300))
         console.log(ref.current.getBoundingClientRect())
    }, [])

    return (
    <div ref={ref}>
        <div className="parallax-content">
            <img className="parallax-image" src={`${image}`} style={{ transform: `translateY(${ ((offSetY - 913) * -0.05)}px)`}}></img>
        </div>
        <div className="parallax-body">
            <h2 className="parallax-title">{title}</h2>
            <p className="parallax-p">{content}</p>
        </div>
    </div>
    );
}

export default Parallax