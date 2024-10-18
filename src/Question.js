import React from 'react';

const Question = ({ question, onAnswer }) => {
    return (
        <div className="question">
            <h3>{question.question}</h3>
            <div>
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
