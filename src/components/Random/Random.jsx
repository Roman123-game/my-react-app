import React, { useState, useEffect, useRef } from 'react';
import './Random.css'; // Make sure you have styles defined

const Random= () => {
    const [number, setNumber] = useState(generateRandomNumber());
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef(null);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 91) + 10; // Range: 10-100
    }

    const handleClick = () => {
        if (isAnimating) return; // Prevent multiple clicks during animation

        setIsAnimating(true);

        // Start "running" animation
        intervalRef.current = setInterval(() => {
            setNumber(generateRandomNumber());
        }, 100);

        // Stop after 2 seconds and show final number
        setTimeout(() => {
            clearInterval(intervalRef.current);
            setNumber(generateRandomNumber());
            setIsAnimating(false);
        }, 2000);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="rng-container">
            <h2 className="rng-title">Генератор Случайных чисел 10-100</h2>
            <div className={`rng-number ${isAnimating ? 'running' : ''}`}>{number}</div>
            <button className={`rng-button ${isAnimating ? 'grey' : 'blue'}`} onClick={handleClick} disabled={isAnimating}>
                {isAnimating ? 'Генерирует...' : 'Сгенерирорвать Число'}
            </button>
        </div>
    );
};

export default Random;

