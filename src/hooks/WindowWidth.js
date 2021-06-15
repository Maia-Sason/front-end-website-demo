import {useState, useEffect} from 'react'

function getWidth() {
    const {innerWidth: width } = window;
    return {
        width
    }
};

export default function WindowWidth() {
    const [width, setWidth] = useState(getWidth());
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(getWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;

}