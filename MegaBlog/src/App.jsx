import { useEffect, useState } from 'react'
import{ useDispatch } from 'react-redux'
import './App.css'
 import authService from './Appwrite/authService'
 import { login,logout } from './Store/autoSlice'
import { Footer, Header } from './Componenets'

function App() {

  const [loading, setloading] = useState(true)
  const dispathch = useDispatch()
 
  useEffect(()=>{
   authService.getCurrentUser()
                                .then((userData) => {
                                  if (userData) {
                                    dispathch(login(userData))
                                  } else{
                                    dispathch(logout())
                                  }
                                } )
                                .finally(() => setloading(false))
  },[])
  

 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
         TODO: {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div>
 ) : null
}

export default App
