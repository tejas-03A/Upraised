export const startQuiz = async () => {
    return {
        quizId: "123",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Madrid"],
                answer: "Paris",
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                answer: "4",
            },
            {
                question: "What is the color of the sky?",
                options: ["Blue", "Green", "Red", "Yellow"],
                answer: "Blue",
            },
        ],
    };
};
