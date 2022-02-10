import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Quiz from './Pages/Quiz'
import Userdash from './Pages/Userdash'
import Logo from "./Assets/logo";



function App() {
  return (
    <>

    <div className="wholepage">

    
      <Router>
     
        <Navbar/>
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/home' exact element = {<Home/>} />
          <Route path='/blog' element = {<Blog/>} />
          <Route path='/quiz' element = {<Quiz/>} />
          <Route path='/userdash' element = {<Userdash/>} />
        </Routes>
      </Router>

      </div>
    </>   
    
  );
}
export default App;