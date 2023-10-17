const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Berlin', 'Madrid', 'Paris'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Mars', 'Jupiter', 'Earth'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        answers: ['Elephant', 'Blue Whale', 'Giraffe'],
        correctAnswer: 'Blue Whale'
    }
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers-container');
    questionElement.textContent = questions[index].question;
    answersContainer.innerHTML = '';
    for (const answer of questions[index].answers) {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer');
        button.onclick = checkAnswer;
        answersContainer.appendChild(button);
    }
}

function checkAnswer() {
    const selectedAnswer = this.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        this.classList.add('correct');
    } else {
        this.classList.add('wrong');
    }

    // Move to the next question or finish the quiz
    setTimeout(() => {
        this.classList.remove('correct', 'wrong');
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            alert('Quiz Finished!');
        }
    }, 1000);
}

// Start the quiz
loadQuestion(currentQuestionIndex);
    