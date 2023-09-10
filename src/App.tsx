import './App.css';

import {Header } from './layout/header/Header';
import { Skills } from './layout/sections/Skills';
import { Main } from './layout/sections/main/main';
import { Technologies } from './layout/sections/technologies/Technologies';
import { Experience } from './layout/sections/experience/Experience';
import { Footer } from './layout/sections/footer/Footer';
import { Particle } from './components/particle/Particle';
import { GoTop } from './components/goTopBtn/GoTop';




function App() {
    return (
        <div className="App">
            <Particle/>
<Header/>
<Main/>
<Skills/>
<Technologies/>
<Experience/>
<Footer/>
<GoTop/>
       

        </div>
    );
}

export default App;

