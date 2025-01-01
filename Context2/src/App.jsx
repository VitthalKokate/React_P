
import './App.css'
import Login from './Componenet/Login'
import Profile from './Componenet/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <Login/>
      <Profile />
    </UserContextProvider>

  )
}

export default App
