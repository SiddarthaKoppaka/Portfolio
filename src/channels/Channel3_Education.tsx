import { Briefcase, GraduationCap } from 'lucide-react';
import TVCard from '../components/TVCard';

const Channel3_Education = () => {
    return (
        <TVCard title="CH03: EXP_&_EDU">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full content-center">
                {/* Experience Section */}
                <div>
                    <div className="flex items-center mb-6 justify-center md:justify-start border-b-4 border-black pb-2 w-fit">
                        <Briefcase size={32} className="mr-4" />
                        <h3 className="text-3xl font-bold tracking-wide">EXPERIENCE</h3>
                    </div>
                    <ul className="space-y-8 text-lg">
                        <li className="border-l-4 border-black pl-6 hover:bg-black/5 p-2 transition-colors">
                            <div className="font-bold text-2xl">AI APPLICATIONS ENGINEER</div>
                            <div className="italic text-lg opacity-80">Rearc / Dec 2024 - Present</div>
                            <p className="mt-2 font-medium">Building RAG systems & evaluation pipelines with LangGraph.</p>
                        </li>
                        <li className="border-l-4 border-black pl-6 hover:bg-black/5 p-2 transition-colors">
                            <div className="font-bold text-2xl">ML ENGINEER - RA</div>
                            <div className="italic text-lg opacity-80">Kelley School of Business / Nov 2024 - Present</div>
                            <p className="mt-2 font-medium">Fine-tuning LLMs & building RAG for legal docs (92% accuracy).</p>
                        </li>
                        <li className="border-l-4 border-black pl-6 hover:bg-black/5 p-2 transition-colors">
                            <div className="font-bold text-2xl">AI/ML DEVELOPER</div>
                            <div className="italic text-lg opacity-80">Hyphenova / May 2024 - Aug 2024</div>
                            <p className="mt-2 font-medium">Full stack AI features, CI/CD automation & Data Pipelines.</p>
                        </li>
                    </ul>
                </div>

                {/* Education Section */}
                <div>
                    <div className="flex items-center mb-6 justify-center md:justify-start border-b-4 border-black pb-2 w-fit">
                        <GraduationCap size={32} className="mr-4" />
                        <h3 className="text-3xl font-bold tracking-wide">EDUCATION</h3>
                    </div>
                    <ul className="space-y-8 text-lg">
                        <li className="border-l-4 border-black pl-6 hover:bg-black/5 p-2 transition-colors">
                            <div className="font-bold text-2xl">MS COMPUTER SCIENCE</div>
                            <div className="italic text-lg opacity-80">Indiana University / 2023 - 2025</div>
                            <p className="mt-2 font-medium">Bloomington, IN</p>
                        </li>
                        <li className="border-l-4 border-black pl-6 hover:bg-black/5 p-2 transition-colors">
                            <div className="font-bold text-2xl">B.TECH CSE</div>
                            <div className="italic text-lg opacity-80">Gurukula Kangri / 2019 - 2023</div>
                            <p className="mt-2 font-medium">Haridwar, India</p>
                        </li>
                    </ul>
                </div>
            </div>
        </TVCard>
    );
};

export default Channel3_Education;
