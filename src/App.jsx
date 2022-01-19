import{ Link, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Posts from './Components/Posts'

function App() {

  return (
    <>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/studentCourses" component={Posts} />
          <Route path="/" exact><Link to="/login" className='container m-5' style={{"margin-left": "100px","margin-top": "100px"}}>Login</Link></Route>
        </Switch>
    </>
  )
}

export default App;