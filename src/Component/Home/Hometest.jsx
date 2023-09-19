import React from "react";
import './App.css';


const Hometest = () => {
    const handleVideoClick = (event) => {
        event.preventDefault(); 
        const videoUrl = event.currentTarget.getAttribute('href');
        window.location.href = videoUrl; 
    };

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
                        onClick={handleVideoClick}>
                        寄付する
                    </a>
                    <a className="App-link2"
                        href={process.env.PUBLIC_URL + '/img/tusenacute.mp4'}
                        onClick={handleVideoClick}>
                        Donate
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Hometest;