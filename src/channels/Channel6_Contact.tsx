import { Linkedin, Mail, Github } from 'lucide-react';
import TVCard from '../components/TVCard';

const Channel6_Contact = () => {
    return (
        <TVCard className="text-center justify-center items-center">
            <div className="flex flex-col items-center justify-center h-full max-w-4xl">
                <h1 className="text-6xl md:text-8xl mb-8 font-bold animate-pulse">END OF TRANSMISSION</h1>
                <p className="text-2xl md:text-3xl mb-16 font-medium">
                    "The future belongs to those who believe in the beauty of their dreams."
                </p>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full justify-center">
                    <a href="https://www.linkedin.com/in/siddarthakoppaka" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 bg-black text-[#EFE8D0] px-8 py-6 text-2xl font-bold border-4 border-transparent hover:border-black hover:bg-[#EFE8D0] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <Linkedin size={32} />
                        LINKEDIN
                    </a>
                    <a href="mailto:siddarthakoppaka@gmail.com" className="flex items-center justify-center gap-4 bg-black text-[#EFE8D0] px-8 py-6 text-2xl font-bold border-4 border-transparent hover:border-black hover:bg-[#EFE8D0] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <Mail size={32} />
                        EMAIL
                    </a>
                    <a href="https://github.com/SiddarthaKoppaka" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 bg-black text-[#EFE8D0] px-8 py-6 text-2xl font-bold border-4 border-transparent hover:border-black hover:bg-[#EFE8D0] hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <Github size={32} />
                        GITHUB
                    </a>
                </div>

                <div className="mt-20 opacity-50 text-xl font-bold tracking-[0.5em]">
                    © 2025 SIDDARTHA_KOPPAKA | SIGNAL_LOST...
                </div>
            </div>
        </TVCard>
    );
};

export default Channel6_Contact;
