import { useRef } from 'react'
import { useLogin } from '../Context/Auth'
import { Redirect } from 'react-router-dom'

function Login () {

    const [ token, setToken ] = useLogin()

    const username = useRef()
    const password = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        console.log(username.current.value)
        console.log(password.current.value)

        fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
        .then(res => res.json())
        .then(data => setToken(data.token))
        .catch(err => console.log(err))
    }

    if(token) return <Redirect to="/studentCourses"/>

    return (
        <>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" ref={username} required />
                <input type="text" placeholder="Password" ref={password} required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login