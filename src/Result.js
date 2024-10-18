import React from 'react';

const Result = ({ score }) => {
    return (
        <div className="result-container">
            <h1>Your result</h1>
            <p>{score}%</p>
            <button className="restart-button">Restart</button>
        </div>
    );
};

export default Result;
