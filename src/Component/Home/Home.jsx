import React from "react";
import './App.css';


const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/img/donatepls.jpg'} className="App-logo" alt="" />
                <p>
                    Đô nết để ủng hộ nhóm nhé ❤️
                </p>
                <div className="App-link">
                    <a className="App-link1"
                        href={process.env.PUBLIC_URL + '/img/tusenavoicenhat.mp4'}
                        target="_blank"
                        rel="noopener noreferrer">
                        寄付する
                    </a>
                    <a className="App-link2"
                        href={process.env.PUBLIC_URL + '/img/tusenacute.mp4'}
                        target="_blank"
                        rel="noopener noreferrer">
                        Donate
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Home;