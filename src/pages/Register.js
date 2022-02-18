import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

export default function Register(){

    const navigate = useNavigate()

    const handleNavigate = () => navigate('/success')

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = e =>{

        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log('...enviando datos...')
        setTimeout(() => {
            handleNavigate()
        }, 2000);

    }

    console.log(data)

    return <div className="register">
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
                <p>E-mail</p>
                <input type='email' name='email' id='name' placeholder="EMAIL" onChange={handleChange} required/>
            </label>
            <label htmlFor='password'>
                <p>Password</p>
                <input type='password' name='password' id='password' placeholder="PASSWORD" onChange={handleChange} required/>
            </label>
            <input type="submit" value="Continuar" className='btn-lblue' id='btnSubmit' />

        </form>
    </div>

}