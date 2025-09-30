const HeroSection = () => {
    return <div className="max-w-[1080px] relative flex flex-col justify-center mt-8 z-[999]">
            <div className="flex flex-col pt-36 gap-8 border-t border-r border-l border-gallery z-[999]">
                <h1 className="text-5xl tracking-[-2.4px] font-semibold text-center whitespace-nowrap">
                    Build and deploy on the AI Cloud.</h1>
                <p className="text-center text-dove-gray text-[20px] text-balance">
                    Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
                </p>
       
                <div className="flex gap-4 justify-center">

                    <button className="flex items-center rounded-[100px] bg-cod-gray text-white text-base font-medium
                    gap-1.5 py-3 px-4 cursor-pointer border hover:bg-[#383838] hover:border-gallery"> 
                        <img src="./vercel-white.svg" alt="" />
                        Start Deploying
                    </button>

                    <button className="flex items-center rounded-[100px] shadow-md/20 bg-white text-cod-gray text-base font-medium
                    gap-1.5 py-3 px-[2.9rem] cursor-pointer border border-transparent hover:bg-[#F2F2F2] hover:border-gallery">
                    Get a Demo
                    </button>
                </div>
            </div>
            <div className="grid w-full h-[380px] heroGradient">
                <div className="triangleRainbow"></div>
            </div>
            <div className="absolute inset-0 bottom-50">
                <img src="../vercel-logo.svg" className="h-full w-full" alt="" />
            </div>

            <div className="h-[230px] flex justify-center items-center border border-gallery">
                <div className="flex h-full items-center justify-center flex-col tracking-[-1.28px] text-[32px] font-semibold">
                    <span className="flex items-center gap-2">
                        Develop with your favorite tools <img src="../arrow-right.svg"></img>
                    </span>
                    <div className="flex gap-2">
                     <span className="flex items-center gap-2">
                        Launch globally, instantly <img src="../globe-icon.svg"></img>
                     </span>
                     <span className="flex items-center gap-2">
                       Keep pushing<img src="../fork.svg"></img>
                     </span>
                    </div>
        
                </div>
            </div>

        </div>;
}

export default HeroSection;