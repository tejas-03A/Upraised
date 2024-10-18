import React, { useState } from 'react';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import './index.css'; // Import the CSS file

const App = () => {
    const [quizData, setQuizData] = useState(null);
    const [currentStep, setCurrentStep] = useState('home');
    const [score, setScore] = useState(0);

    const handleStartQuiz = () => {
        setCurrentStep('quiz');
        setQuizData([
            { question: "How do you judge what should be added in the next version of the app?", answers: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionary", "Personal feeling"] },
            { question: "How do you assess features?", answers: ["User feedback", "Analysis"] },
            // Add more questions
        ]);
    };

    const handleFinishQuiz = (finalScore) => {
        setScore(finalScore);
        setCurrentStep('result');
    };

    return (
        <div className="app-container">
            {currentStep === 'home' && <Home onStartQuiz={handleStartQuiz} />}
            {currentStep === 'quiz' && <Quiz quizData={quizData} onFinishQuiz={handleFinishQuiz} />}
            {currentStep === 'result' && <Result score={score} />}
        </div>
    );
};

export default App;
