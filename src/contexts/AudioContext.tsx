import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
// @ts-ignore
import bgUrl from '../assets/bg.mp3';
// @ts-ignore
import typeUrl from '../assets/typewriter.wav';

interface AudioContextType {
    isMuted: boolean;
    toggleMute: () => void;
    startTypewriterLoop: () => void;
    stopTypewriterLoop: () => void;
    playClickSound: () => void;
    playStaticSound: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) throw new Error("useAudio must be used within AudioProvider");
    return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(true);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const typeBufferRef = useRef<AudioBuffer | null>(null);
    const bgAudioRef = useRef<HTMLAudioElement | null>(null);
    const typeSourceRef = useRef<AudioBufferSourceNode | null>(null);
    const activeTypewritersCount = useRef(0); // Track how many typewriters are active

    // Initialize Audio Context & Load Assets
    useEffect(() => {
        const initAudio = async () => {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (audioCtxRef.current.state === 'suspended') {
                await audioCtxRef.current.resume();
            }

            // Load Typewriter Buffer
            if (!typeBufferRef.current) {
                try {
                    const response = await fetch(typeUrl);
                    const arrayBuffer = await response.arrayBuffer();
                    const audioBuffer = await audioCtxRef.current.decodeAudioData(arrayBuffer);
                    typeBufferRef.current = audioBuffer;
                } catch (e) {
                    console.error("Failed to load typewriter sound:", e);
                }
            }

            // Setup Background Audio
            if (!bgAudioRef.current) {
                bgAudioRef.current = new Audio(bgUrl);
                bgAudioRef.current.loop = true;
                bgAudioRef.current.volume = 0.3;
            }
        };

        const handleInteraction = () => {
            initAudio().then(() => {
                if (!isMuted && bgAudioRef.current) {
                    bgAudioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
                }
            });
            window.removeEventListener('click', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);
    }, [isMuted]);

    useEffect(() => {
        if (bgAudioRef.current) {
            if (isMuted) {
                bgAudioRef.current.pause();
                // Also stop any running typewriter sounds instantly if muted
                if (typeSourceRef.current) {
                    try { typeSourceRef.current.stop(); } catch (e) { }
                    typeSourceRef.current = null;
                }
            } else {
                if (audioCtxRef.current?.state === 'running') {
                    bgAudioRef.current.play().catch(() => { });
                    // Note: We don't auto-resume typewriter, it waits for next interaction
                }
            }
        }
    }, [isMuted]);

    const startTypewriterLoop = () => {
        if (isMuted || !audioCtxRef.current || !typeBufferRef.current) return;

        activeTypewritersCount.current += 1;

        // Only start the sound if it's not already playing
        if (!typeSourceRef.current) {
            const ctx = audioCtxRef.current;
            const source = ctx.createBufferSource();
            source.buffer = typeBufferRef.current;
            source.loop = true; // Loop the long file
            source.playbackRate.value = 1.0;

            const gainNode = ctx.createGain();
            gainNode.gain.value = 0.5;

            source.connect(gainNode);
            gainNode.connect(ctx.destination);
            source.start(0);
            typeSourceRef.current = source;
        }
    };

    const stopTypewriterLoop = () => {
        if (activeTypewritersCount.current > 0) {
            activeTypewritersCount.current -= 1;
        }

        // Only stop if no typewriters are active
        if (activeTypewritersCount.current === 0 && typeSourceRef.current) {
            try {
                typeSourceRef.current.stop();
            } catch (e) {
                // Ignore if already stopped
            }
            typeSourceRef.current = null;
        }
    };

    const playClickSound = () => {
        // Since playTypewriterSound is now a loop starter, 
        // we can't use it for clicks unless we implement a separate one-shot logic.
        // For now, silent clicks or we could decode a tiny part of the buffer.
        // Let's stub it to avoid loop chaos.
    };

    const playStaticSound = () => {
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute, startTypewriterLoop, stopTypewriterLoop, playClickSound, playStaticSound }}>
            {children}
        </AudioContext.Provider>
    );
};
