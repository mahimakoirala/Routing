import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Work from './pages/Work';

export default function Page(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Layout></Layout>}>
        </Route>
        <Route index element = {<Home></Home>}></Route>
        <Route path = "about" element = {<About></About>}></Route>
        <Route path = "work" element = { <Work></Work>}></Route>
        <Route path = "contact" element = { <Contact></Contact>}></Route>
        <Route path = "*" element = {<NoPage />} ></Route>
      </Routes>
      </BrowserRouter>
  );
}