import './App.css';

import {Header } from './layout/header/Header';
import { Skills } from './layout/sections/Skills';
import { Main } from './layout/sections/main/main';
import { Technologies } from './layout/sections/technologies/Technologies';
import { Experience } from './layout/sections/experience/Experience';
import { Footer } from './layout/sections/footer/Footer';



function App() {
    return (
        <div className="App">
<Header/>
<Main/>
<Skills/>
<Technologies/>
<Experience/>
<Footer/>
       

        </div>
    );
}

export default App;

