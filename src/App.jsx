
import Navbar from './components/Navbar'
import Main from './components/Main'
import Career from './components/Career'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Ironhack from './components/Ironhack'
import {  ThemeProvider } from './ThemeContext'



function App() {
  

  return (

   <ThemeProvider>
<Navbar/>
<Main/>
<div className="mx-auto w-full" >
<Ironhack/>
<Projects/>
<Career/>
<Contact/>
</div>
</ThemeProvider>
 
 
  )
}

export default App
