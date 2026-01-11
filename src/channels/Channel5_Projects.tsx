import { useState } from 'react';
import { Github, ExternalLink, ArrowLeft, Terminal } from 'lucide-react';
import TVCard from '../components/TVCard';

interface Project {
    title: string;
    summary: string;
    desc: string[];
    tech: string[];
    links: { github?: string; demo?: string };
}

const Channel5_Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "AI SEARCH ENGINE",
            summary: "RAG system combining Llama 3, Qdrant & LangChain.",
            desc: [
                "Architected a Retrieval-Augmented Generation (RAG) pipeline handling 10k+ documents.",
                "Implemented Hybrid Search (Sparse + Dense vectors) using Qdrant to improve context retrieval accuracy by 40%.",
                "Deployed Llama 3 on AWS Sagemaker for inference, reducing costs by 60% compared to GPT-4."
            ],
            tech: ["FastAPI", "AWS Sagemaker", "LangChain", "Qdrant", "React"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "THINKWISE: AI IDEA EVALUATOR",
            summary: "Multi-agent system ranking business ideas.",
            desc: [
                "Designed a multi-agent system using LangGraph where agents (Researcher, Critic, Scorer) debate business viability.",
                "Integrated Google Search API for real-time market data retrieval.",
                "Built a responsive dashboard using React to visualize the decision-making process of the agents."
            ],
            tech: ["LangGraph", "Gemini 1.5 Pro", "React", "MongoDB", "Node.js"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "CHURN PREDICTION",
            summary: "Processed 50M+ telecom records with XGBoost.",
            desc: [
                "Built an end-to-end Machine Learning pipeline on Databricks to predict customer churn.",
                "Feature engineered 50+ attributes from 50M+ raw telecom records using PySpark.",
                "Achieved 92.5% F1-score using XGBoost and deployed the model as a REST API on Azure ML."
            ],
            tech: ["Spark", "Databricks", "Azure ML", "XGBoost", "Python"],
            links: { github: "#" }
        },
        {
            title: "BUDDY: AI COMPANION",
            summary: "Context-aware assistant with persistent memory.",
            desc: [
                "Developed a voice-enabled AI companion with long-term memory using Redis Vector Store.",
                "Integrated Twilio API for bidirectional voice calls, allowing users to 'call' their AI buddy.",
                "Utilized GCP Text-to-Speech for natural sounding voice generation."
            ],
            tech: ["Node.js", "LangChain", "Redis", "GCP", "Twilio"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "PORTFOLIO OS",
            summary: "Retro TV themed personal website.",
            desc: [
                "Designed a unique 'Retro TV' interface using CSS scanning lines, vignettes, and chromatic aberration.",
                "Implemented custom GSAP animations for channel switching and boot sequences.",
                "Built a modular component system with React and TypeScript for maintainability."
            ],
            tech: ["React", "GSAP", "Tailwind CSS", "Vite"],
            links: { github: "https://github.com/SiddarthaKoppaka" }
        },
    ];

    return (
        <TVCard title={selectedProject ? `PRJ: ${selectedProject.title}` : "CH05: PROJECTS_DB"}>
            {!selectedProject ? (
                /* LIST VIEW */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProject(p)}
                            className="group relative bg-[#EFE8D0] border-4 border-black p-6 hover:bg-black hover:text-[#EFE8D0] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(100,100,100,0.5)] cursor-pointer h-full flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2 break-words group-hover:underline decoration-2 underline-offset-4">{p.title}</h3>
                                <p className="text-lg opacity-80 mb-6 font-medium leading-tight">{p.summary}</p>
                            </div>

                            <div className="flex justify-between items-center border-t-2 border-current pt-3">
                                <span className="text-xs font-bold tracking-wider uppercase">CLICK TO LOAD_DATA</span>
                                <Terminal className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* DETAIL VIEW */
                <div className="flex flex-col h-full animate-[fadeIn_0.3s_ease-out]">
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="mb-6 flex items-center gap-2 font-bold text-lg hover:underline decoration-2 underline-offset-4 w-fit"
                    >
                        <ArrowLeft size={24} /> BACK_TO_GRID
                    </button>

                    <div className="flex-1 overflow-y-auto pr-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{selectedProject.title}</h2>

                        <div className="mb-8 flex flex-wrap gap-2">
                            {selectedProject.tech.map((t, i) => (
                                <span key={i} className="bg-black text-[#EFE8D0] px-3 py-1 font-bold text-sm border-2 border-transparent hover:bg-[#EFE8D0] hover:text-black hover:border-black transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 text-xl leading-relaxed font-medium mb-12">
                            {selectedProject.desc.map((line, i) => (
                                <p key={i} className="flex gap-4">
                                    <span className="opacity-50 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                                    {line}
                                </p>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-auto pt-6 border-t-4 border-black">
                            {selectedProject.links.github && (
                                <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold hover:bg-black hover:text-[#EFE8D0] px-4 py-2 transition-all border-2 border-black">
                                    <Github size={20} /> REPO_ACCESS
                                </a>
                            )}
                            {selectedProject.links.demo && (
                                <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold hover:bg-black hover:text-[#EFE8D0] px-4 py-2 transition-all border-2 border-black">
                                    <ExternalLink size={20} /> LIVE_DEMO
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </TVCard>
    );
};

export default Channel5_Projects;
