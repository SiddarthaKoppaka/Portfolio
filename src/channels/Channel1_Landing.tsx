import Typewriter from '../components/Typewriter';
import TVCard from '../components/TVCard';

const Channel1_Landing = () => {
    return (
        <TVCard className="text-center justify-center items-center">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl md:text-7xl lg:text-9xl mb-8 font-bold tracking-tight leading-none break-all md:break-normal">
                    <Typewriter text="SIDDARTHA_KOPPAKA" speed={60} delay={500} />
                </h1>
                <div className="text-2xl md:text-4xl font-medium mb-12 border-t-2 border-b-2 border-black py-4 px-8">
                    <Typewriter text="AI Applications Engineer | Master's in CS" speed={30} delay={2500} cursor={false} />
                </div>
                <div className="text-xl opacity-70 font-bold tracking-widest animate-pulse">
                    [ INITIALIZING SYSTEM... SCROLL TO BEGIN ]
                </div>
            </div>
        </TVCard>
    );
};

export default Channel1_Landing;
