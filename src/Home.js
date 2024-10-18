import React from 'react';

const Home = ({ onStartQuiz }) => {
    return (
        <div className="home-container">
            <h1>Quiz</h1>
            <button className="start-button" onClick={onStartQuiz}>
                Start
            </button>
        </div>
    );
};

export default Home;
