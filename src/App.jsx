import './App.css'

import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home";
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';

function App() {
    return(
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
        </>
    )
}

export default App;