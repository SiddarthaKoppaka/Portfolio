import { Award, Medal } from 'lucide-react';
import TVCard from '../components/TVCard';

const Channel4_Achievements = () => {
    return (
        <TVCard title="CH04: CERTIFICATIONS">
            <div className="max-w-4xl mx-auto flex flex-col justify-center h-full">
                <div className="space-y-8">
                    {/* Databricks AI Engineer */}
                    <div className="flex items-center border-4 border-black p-6 hover:bg-black hover:text-[#EFE8D0] transition-colors duration-300 group">
                        <Medal size={48} className="mr-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-3xl font-bold mb-1">DATABRICKS AI ENGINEER</h3>
                            <p className="text-xl opacity-80 font-medium">Dec 2024 - Dec 2027</p>
                        </div>
                    </div>

                    {/* AWS Cloud Practitioner */}
                    <div className="flex items-center border-4 border-black p-6 hover:bg-black hover:text-[#EFE8D0] transition-colors duration-300 group">
                        <Award size={48} className="mr-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-3xl font-bold mb-1">AWS CLOUD PRACTITIONER</h3>
                            <p className="text-xl opacity-80 font-medium">Sep 2024 - Sep 2027</p>
                        </div>
                    </div>

                    {/* Databricks Fundamentals */}
                    <div className="flex items-center border-4 border-black p-6 hover:bg-black hover:text-[#EFE8D0] transition-colors duration-300 group">
                        <Award size={48} className="mr-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-3xl font-bold mb-1">DATABRICKS FUNDAMENTALS</h3>
                            <p className="text-xl opacity-80 font-medium">Mar 2025 - Mar 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </TVCard>
    );
};

export default Channel4_Achievements;
