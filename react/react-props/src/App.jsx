import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Signin from './components/Signin'
import Signup from './components/signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <Header />
      <main className='container-xl px-5 flex items-center justify-center bg-gray-100 py-4'>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden">
          <Signin />
          <Signup/>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default App
