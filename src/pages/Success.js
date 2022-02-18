import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './success.css'

export default function Succcess(){

    const navigate = useNavigate()

    const handleNavigate = () => navigate('/')

    useEffect(()=>{
        setTimeout(() => {
            handleNavigate()
        }, 2500);
    }, [])

    return <div className="success">
        <p>Completado!</p>
    </div>
}