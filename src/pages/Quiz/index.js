import React, { useEffect } from 'react';
import './styles.scss';

import CoffeeQuiz from "../../components/Quiz";
import quizCover from '../../assets/photos/quiz-cover.jpg';

const Quiz = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='quiz-container'>
            <img src={quizCover} alt='Coffee beans' />
            <div>
                <CoffeeQuiz />
            </div>
        </div>
    )
}

export default Quiz;
