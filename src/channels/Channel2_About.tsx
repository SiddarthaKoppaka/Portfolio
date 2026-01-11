import {
    SiPython, SiPostgresql, SiApachespark, SiApachekafka, SiSnowflake, SiJavascript,
    SiTensorflow, SiPytorch, SiHuggingface, SiOpenai, SiLangchain,
    SiAmazon, SiGooglecloud, SiDocker, SiKubernetes, SiRedis, SiReact, SiDatabricks
} from 'react-icons/si';
import { Database, Network } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import TVCard from '../components/TVCard';

const Channel2_About = () => {
    const techs = [
        { Icon: SiPython, label: "PYTHON" },
        { Icon: SiJavascript, label: "JS/TS" },
        { Icon: SiReact, label: "REACT" },
        { Icon: SiAmazon, label: "AWS" },
        { Icon: SiGooglecloud, label: "GCP" },
        { Icon: SiDocker, label: "DOCKER" },
        { Icon: SiKubernetes, label: "K8S" },
        { Icon: SiDatabricks, label: "DATABRICKS" },
        { Icon: SiApachespark, label: "SPARK" },
        { Icon: SiApachekafka, label: "KAFKA" },
        { Icon: SiSnowflake, label: "SNOWFLAKE" },
        { Icon: SiPostgresql, label: "POSTGRES" },
        { Icon: SiRedis, label: "REDIS" },
        { Icon: SiLangchain, label: "LANGCHAIN" },
        { Icon: SiHuggingface, label: "HUGGING FACE" },
        { Icon: SiOpenai, label: "OPENAI" },
        { Icon: SiPytorch, label: "PYTORCH" },
        { Icon: SiTensorflow, label: "TENSORFLOW" },
    ];

    return (
        <TVCard title="CH02: DEEP_DIVE">
            <div className="flex flex-col items-center text-center h-full pt-4 md:pt-10">
                <div className="text-xl md:text-3xl leading-relaxed mb-8 max-w-5xl font-medium">
                    <Typewriter
                        text="Building the future with AI, one token at a time. My weapon of choice is a blend of distributed systems, scalable pipelines, and state-of-the-art LLMs."
                        speed={25}
                        delay={500}
                        cursor={false}
                    />
                </div>

                {/* Tech Cloud */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]" style={{ animationDelay: '2.5s' }}>
                    {techs.map((T, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group p-2 hover:bg-black/5 rounded-lg transition-colors cursor-default">
                            <T.Icon size={32} className="group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-70 group-hover:opacity-100">{T.label}</span>
                        </div>
                    ))}

                    {/* Generic Icons for concepts */}
                    <div className="flex flex-col items-center gap-2 group p-2 hover:bg-black/5 rounded-lg transition-colors cursor-default">
                        <Database size={32} className="group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-70 group-hover:opacity-100">RAG</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group p-2 hover:bg-black/5 rounded-lg transition-colors cursor-default">
                        <Network size={32} className="group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-70 group-hover:opacity-100">LLM OPS</span>
                    </div>
                </div>
            </div>
        </TVCard>
    );
};

export default Channel2_About;
