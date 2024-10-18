import React, { useState } from 'react';

const Quiz = ({ quizData, onFinishQuiz }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const handleNext = () => {
        if (selectedAnswer !== null) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            if (currentQuestionIndex === quizData.length - 1) {
                onFinishQuiz(score);
            }
            setSelectedAnswer(null); // reset for next question
        }
    };

    return (
        <div className="quiz-container">
            <h2>{currentQuestionIndex + 1}/{quizData.length}</h2>
            <h3>{quizData[currentQuestionIndex].question}</h3>
            <div className="answers">
                {quizData[currentQuestionIndex].answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={selectedAnswer === index ? 'selected' : ''}
                    >
                        {answer}
                    </button>
                ))}
            </div>
            <button className="next-button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Quiz;
