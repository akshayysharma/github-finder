import {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [repos, setRepos] = useState([])
  const [noUser, setNoUser] = useState(false)

  // search github users
  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
    if(res.data.items.length == 0){
      setNoUser(true)
      setTimeout(()=>{
        setNoUser(false)
      }, 2000)
    }
    setUsers(res.data.items)
    setLoading(false)
}

  // get single github user
  const getUser = async username => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
    setUser(res.data)
    setLoading(false)
  }

  // get users repo
  const getUserRepos = async username => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
    setLoading(false)
    setRepos(res.data)
  }

  // clear user from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  const shouldSetAlert = (msg, type) => {
    setAlert({msg, type})
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }
  
  return (
    <Router>
      <div>
          <Navbar/>
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={props => (
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers} 
                    showClear={users.length > 0 ? true : false}
                    setAlert={shouldSetAlert}
                  />
                  <Users users={users} loading={loading} noUser={noUser}/>
                </>
              )}/>
              <Route exact path="/about" component={About}/>

              <Route exact path="/user/:login" render={props => (
                <User {...props} getUser={getUser} getUserRepo={getUserRepos} user={user} loading={loading} repos={repos}/>
              )}/>
            </Switch>
          </div>
      </div>
    </Router>
   
  );
}

export default App;
