import './about.css'
import aboutSVG from '../media/crowdfunding.svg'
import aboutSVG2 from '../media/agriculture-1.svg'

export default function About(){

    return <div className="about">
        <div className='about-first'>
            <img src={aboutSVG} alt='about image'></img>
            <p>Trabajá con otras personas.</p>
        </div>
        <div className='about-second'>
            <p>Compartí tus ideas.</p>
            <img src={aboutSVG2} alt='about image'></img>
        </div>
    </div>

}