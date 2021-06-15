import { useState, useEffect } from 'react'
import image1 from '../images/bailey.jpg'
import house2 from '../images/house2.jpg'
import InfoBox from '../components/InfoBox'
import InfoSlider from '../components/InfoSlider'
import Parallax from '../components/Parallax'
import Footer from '../components/Footer'
import WindowWidth from '../hooks/WindowWidth'

function Home() {
    const {width} = WindowWidth();
    const max = 800;
    const [offSetY, setOffSetY] = useState(0);

    const handleScroll = () => setOffSetY(window.pageYOffset);

    useEffect( () => {
        console.log(width);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
        <div className="fade-image" >
            <img src={image1} style={{ transform: `translateY(${ offSetY * 0.5}px)`}}></img>
            { width > max && <div className='block' style={{ transform: `translateY(${ offSetY * 0.3}px)`}}>
                <div className="inner-block">
                    <h1 className="font block-header">The Real Real Way: We Serve Agents</h1>
                    <div className="block-break"></div>
                    <p className="primary-black">Ut non amet ad. Deserunt in est ut. Eiusmod labore duis non sit laborum ipsum pariatur irure amet laboris. Velit cupidatat velit cupidatat minim elit nisi. Ullamco occaecat voluptate cupidatat eiusmod occaecat aliqua do. Nostrud qui tempor excepteur magna consectetur.</p>
                    <div className="supporter-logo"></div>
                </div>
            </div>}
        </div>
            {width <= max && <div className="block-fill">
                <div className='block-sm'>
                        <div className="">
                            <h1 className="font block-header">The Real Real Way: We Serve Agents</h1>
                            <div className="block-break"></div>
                            <p className="primary-black">Ut non amet ad. Deserunt in est ut. Eiusmod labore duis non sit laborum ipsum pariatur irure amet laboris. Velit cupidatat velit cupidatat minim elit nisi. Ullamco occaecat voluptate cupidatat eiusmod occaecat aliqua do. Nostrud qui tempor excepteur magna consectetur.</p>
                            <div className="supporter-logo"></div>
                        </div>
                </div>
            </div>}
            <InfoBox boxColor="#ECECEC" textColor="#747474" headerText="What makes us Lorem Ipsum?">
                <InfoSlider/>
            </InfoBox>
            <InfoBox boxColor="#006478" textColor="white" headerText="Why Lorem Ipsum?"/>
            <InfoBox boxColor="#ECECEC" textColor="#747474" headerText="Latest News"/>
            <Parallax offSetY={offSetY} image={house2}/>
            <Footer></Footer>
        </>
    )
}

export default Home;