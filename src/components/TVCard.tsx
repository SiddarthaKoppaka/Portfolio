import type { ReactNode } from 'react';

interface TVCardProps {
    children: ReactNode;
    title?: string;
    className?: string;
}

const TVCard = ({ children, title, className = "" }: TVCardProps) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-8 pb-16 md:pb-8">
            {/* 
        Fixed Static Container 
        - Responsive width/height
        - Mobile: Less padding, smaller border radius, accounts for bottom nav
        - Desktop: Larger padding, larger border radius
      */}
            <div className={`
        relative 
        bg-[#EFE8D0] 
        text-black 
        border-4 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        w-[95vw] md:w-[85vw] max-w-6xl
        h-[82vh] md:h-[75vh]
        flex flex-col
        overflow-hidden
        rounded-[1rem] md:rounded-[1rem]
        ${className}
      `}>
                {/* Optional Header */}
                {title && (
                    <div className="border-b-4 border-black p-3 md:p-4 flex justify-between items-center bg-[#E5DCC5]">
                        <h2 className="text-xl md:text-3xl font-bold tracking-wider truncate">{title}</h2>
                        <div className="flex gap-2 flex-shrink-0">
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
                        </div>
                    </div>
                )}

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-10 scrollbar-hide">
                    {children}
                </div>

                {/* Footer aesthetics */}
                <div className="border-t-4 border-black p-2 flex justify-between text-[10px] md:text-xs font-bold opacity-50 bg-[#E5DCC5]">
                    <span>SIGNAL: OPTIMAL</span>
                    <span>REC</span>
                </div>
            </div>
        </div>
    );
};

export default TVCard;
