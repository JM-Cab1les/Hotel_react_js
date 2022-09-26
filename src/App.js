import './App.css';
import Navbar from './Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery';
import Destination from './components/Destination/Home';
import SinglePage from './SinglePage/SinglePage';
import Blog from './components/Blog/Blog';
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle"
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contacts/Contact';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/destination' element={<Destination/>}></Route>
      <Route path='/singlepage/:id' element={<SinglePage/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/blogsingle/:id' element={<BlogSingle/>}></Route> 
      <Route path='/testimonial' element={<Testimonial/>}></Route> 
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path='/sign-In' element={<Login/>}></Route> 
      <Route path='/register' element={<Register/>}></Route> 
    </Routes>
   </>
  );
}

export default App;
