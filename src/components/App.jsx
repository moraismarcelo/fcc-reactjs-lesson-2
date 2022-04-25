import React from 'react';
import Photo from './Photo';
import Header from './Header';
import Buttom from './Buttom';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Photo />
            <Header />
            <div className='app--contact-buttons'>
                <Buttom
                    faClass="fa-solid fa-envelope"
                    textColor="#000"
                    title="Email"
                    bgColor="#FFF"
                />
                <Buttom
                    faClass="fa-brands fa-linkedin"
                    title="Linkedin"
                    textColor="#FFF"
                    bgColor='#5093E2'
                />
            </div>
            <MainContent title="About Me" content="I'm learning React JS."/>
            <MainContent title="Interests" content="Nothing special at moment." />
            <Footer />
            
        </div>
    );
}

export default App;