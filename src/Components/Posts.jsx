import { useLogin } from '../Context/Auth'
import { Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Posts () {

    const [ token ] = useLogin()
    const [ courses, setCourses ] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/studentCourses', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `${ token }`
            }
        })
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    if(!token) return <Redirect to="/login" />

    return (
        <>
            {
                courses && courses.map((e, i) => (
                    <ul key={i} className='list-unstyled'>
                        <li>
                            <h2>{e.title}</h2>
                        
                            {
                                
                                e.tasks && e.tasks.map((a,index) => (
                                    <ul key={index}>
                                        <li>{a.title}</li>
                                    </ul>
                                ))
                            }
                        </li>
                    </ul>
                ))
            }

            <button onClick={() => {
                localStorage.removeItem('token')
                window.location.href="/login"
            }}>Log out</button>
        </>
    )
}

export default Posts