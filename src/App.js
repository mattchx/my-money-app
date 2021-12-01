import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { authIsReady } = useAuthContext()
  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  )
}

export default App
