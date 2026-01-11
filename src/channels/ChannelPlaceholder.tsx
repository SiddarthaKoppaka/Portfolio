interface Props {
    title: string;
}

const ChannelPlaceholder = ({ title }: Props) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-10 bg-[#EFE8D0] text-black">
            <div className="border-4 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <h2 className="text-4xl mb-4 font-bold">{title}</h2>
                <p className="text-xl">Content Loading...</p>
            </div>
        </div>
    );
};

export default ChannelPlaceholder;
