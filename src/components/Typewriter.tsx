import { useState, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

const Typewriter = ({ text, speed = 50, delay = 0, className = "", cursor = true }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const { startTypewriterLoop, stopTypewriterLoop } = useAudio();

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        let intervalId: ReturnType<typeof setInterval>;

        setDisplayedText('');

        timeoutId = setTimeout(() => {
            // Start Audio Loop
            startTypewriterLoop();

            let i = 0;
            intervalId = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));

                i++;
                if (i === text.length) {
                    clearInterval(intervalId);
                    // Stop Audio Loop
                    stopTypewriterLoop();
                }
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
            // Ensure audio stops if component unmounts mid-typing
            stopTypewriterLoop();
        };
    }, [text, speed, delay]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && <span className="animate-pulse">_</span>}
        </span>
    );
};

export default Typewriter;
