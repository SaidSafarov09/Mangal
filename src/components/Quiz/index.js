import React, { useState } from 'react';
import './styles.scss';

import { quizQuestions } from '../../data/quizQuestions';
import Button from '../../components/Button';

import Radio from './Radio';

const CoffeeQuiz = () => {

    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
    });

    // save the value of each answer
    const handleChange = ({ target }) => {
        setAnswers({ ...answers, [target.id]: target.value });
    };

    const [slide, setSlide] = useState(0);

    function handleClick() {
    if (slide < quizQuestions.length - 1) {
        setSlide(slide + 1);
    } else {
        setSlide(slide + 1);
        showScore();
    }
    }

    // compare and calculate right answers to show score
    const [result, setResult] = useState(null);

    function showScore() {
    const score = quizQuestions.filter(({ id, answer }) => answers[id] === answer);
        setResult(`${score.length} из ${quizQuestions.length}`);
    }

    return (
        <div className='quiz-content'>
            <div className='page-header'>
                <h1><span>FastFood </span>Квиз</h1>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
            {quizQuestions.map((question, index) => (
                <Radio
                    key={question.id}
                    active={slide === index}
                    value={answers[question.id]}
                    onChange={handleChange}
                    {...question}
                />
            ))}
            {result ? (
                <div className='quiz-result'>
                    <h2>Вы набрали</h2>
                    <h1>{result}</h1>
                </div>
            ) : (
                <Button
                    onClick={handleClick}
                    type='button'
                    text='Далее'
                />
            )}
            </form>
        </div>
  );
};
export default CoffeeQuiz;
