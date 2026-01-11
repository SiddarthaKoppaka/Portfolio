import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Volume2, VolumeX } from 'lucide-react';
import StaticNoise from '../components/StaticNoise';
import { useAudio } from '../contexts/AudioContext';

// Channels
import Channel1_Landing from '../channels/Channel1_Landing';
import Channel2_About from '../channels/Channel2_About';
import Channel3_Education from '../channels/Channel3_Education';
import Channel4_Achievements from '../channels/Channel4_Achievements';
import Channel5_Projects from '../channels/Channel5_Projects';
import Channel6_Contact from '../channels/Channel6_Contact';

gsap.registerPlugin(useGSAP);

const ChannelSwitch = () => {
    const [channel, setChannel] = useState(0);
    const [isSwitching, setIsSwitching] = useState(false);
    const noiseRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const TOTAL_CHANNELS = 6;
    const NAV_ITEMS = [
        { label: 'HOME', index: 0, short: 'CH01' },
        { label: 'ABOUT', index: 1, short: 'CH02' },
        { label: 'EXP & EDU', index: 2, short: 'CH03' },
        { label: 'CERTS', index: 3, short: 'CH04' },
        { label: 'PROJECTS', index: 4, short: 'CH05' },
        { label: 'CONTACT', index: 5, short: 'CH06' },
    ];

    // Initial turn-on effect
    useGSAP(() => {
        const tl = gsap.timeline();
        // Start black, flash noise, then show content
        tl.set(noiseRef.current, { opacity: 1 })
            .to(noiseRef.current, { opacity: 0, duration: 0.5, delay: 0.5, ease: "power2.inOut" });
    }, { scope: containerRef });


    const switchChannel = (direction: 'next' | 'prev') => {
        if (isSwitching) return;

        const nextChannel = direction === 'next'
            ? Math.min(channel + 1, TOTAL_CHANNELS - 1)
            : Math.max(channel - 1, 0);

        if (nextChannel === channel) return; // Boundary hit

        triggerSwitch(nextChannel);
    };

    const jumpToChannel = (targetIndex: number) => {
        if (isSwitching || targetIndex === channel) return;
        triggerSwitch(targetIndex);
    };

    const triggerSwitch = (targetIndex: number) => {
        setIsSwitching(true);

        const tl = gsap.timeline({
            onComplete: () => setIsSwitching(false)
        });

        // 1. Fade/Cut to Static
        tl.to(noiseRef.current, { opacity: 1, duration: 0.15, ease: "rough" })
            // 2. Change Channel State (occurs instantly in the middle)
            .call(() => setChannel(targetIndex))
            // 3. Fade Static Out
            .to(noiseRef.current, { opacity: 0, duration: 0.3, delay: 0.1 });
    };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > 40) { // Threshold to avoid sensitive trackpads
                if (e.deltaY > 0) {
                    switchChannel('next');
                } else {
                    switchChannel('prev');
                }
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, [channel, isSwitching]); // Dependencies crucial here

    const renderChannel = () => {
        switch (channel) {
            case 0: return <Channel1_Landing />;
            case 1: return <Channel2_About />;
            case 2: return <Channel3_Education />;
            case 3: return <Channel4_Achievements />;
            case 4: return <Channel5_Projects />;
            case 5: return <Channel6_Contact />;
            default: return <Channel1_Landing />;
        }
    };

    return (
        <div ref={containerRef} className="w-full h-full relative">
            <StaticNoise ref={noiseRef} currentChannel={channel} />

            {/* Main Content Area */}
            <div className="w-full h-full">
                {renderChannel()}
            </div>

            {/* Channel Indicator (OSD) */}
            <div className="fixed top-2 right-2 md:top-8 md:right-8 text-green-400 text-xl md:text-3xl z-40 pointer-events-none opacity-80 font-bold" style={{ textShadow: '2px 2px 0 #000' }}>
                CH {channel + 1}
            </div>

            {/* Responsive Navigation Bar */}
            <div className={`
                fixed z-50 transition-all duration-300
                /* Mobile: Bottom Bar, Horizontal Scroll */
                bottom-0 left-0 w-full flex flex-row overflow-x-auto bg-black border-t-2 border-[#EFE8D0] p-2 gap-2 justify-start md:justify-center no-scrollbar
                /* Desktop: Left Sidebar, Vertical Column */
                md:top-1/2 md:left-4 md:bottom-auto md:w-auto md:flex-col md:transform md:-translate-y-1/2 md:bg-transparent md:border-none md:p-0 md:gap-3 md:overflow-visible
            `}>
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.index}
                        onClick={() => jumpToChannel(item.index)}
                        className={`
                            whitespace-nowrap px-3 py-2 md:px-4 md:py-2 text-left font-bold border-2 transition-all duration-200 uppercase text-xs md:text-base flex-shrink-0
                            ${channel === item.index
                                ? 'bg-[#EFE8D0] text-black border-black md:translate-x-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                : 'bg-black text-[#EFE8D0] border-[#EFE8D0] hover:bg-[#EFE8D0] hover:text-black md:hover:translate-x-1'
                            }
                        `}
                    >
                        <span className="hidden md:inline">{item.label}</span>
                        <span className="md:hidden">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Mute Toggle */}
            <MuteToggle />
        </div>
    );
};

const MuteToggle = () => {
    const { isMuted, toggleMute } = useAudio();

    return (
        <button
            onClick={toggleMute}
            className="fixed top-2 left-2 md:top-8 md:left-8 z-50 p-2 bg-black text-[#EFE8D0] border-2 border-[#EFE8D0] hover:bg-[#EFE8D0] hover:text-black transition-colors"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
    );
};

export default ChannelSwitch;
