import TriangleIcon from "../Icons/TriangleIcon";

const FirstSection = () =>{
    return <section className="w-full flex">
        <div className="flex flex-col gap-6 flex-1 p-12 border-r border-gallery">
            <div className="flex gap-4 flex-col self-start">
                <div className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        className="text-dove-gray"
                    >
                    <use href="/terminal.svg#terminal"></use>
                    </svg>
                    <h2 className="text-dove-gray text-base">Git-connected Deploys</h2>
                </div>
                <div
                    className="text-dove-gray text-2xl font-medium leading-8 tracking-[-.96px]">
                        <strong className="text-cod-gray font-semibold">
                            From localhost to https, in seconds.
                        </strong> 
                        <p>Deploy from Git or your CLI.</p>
                </div>
            </div>
            <div className="w-full select-none flex flex-col">
                <div className="border border-[#00000014] p-3 rounded-xl max-w-[340px]">
                    <div className="flex gap-1.5 mb-3">
                        <div className="bg-[#00000014] h-2 w-2 rounded-full"></div>
                        <div className="bg-[#00000014] h-2 w-2 rounded-full"></div>
                        <div className="bg-[#00000014] h-2 w-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-cod-gray text-[0.75rem] leading-4">
                            <span>▲ ~ vercel-site/ </span>
                            git push
                        </div>
                        <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                            Enumerating objects: 1, done.
                        </div>
                         <div className="text-cod-gray text-[0.75rem] leading-4 codeLine">
                            Counting objects: 100% (1/1), done.
                        </div>
                        <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                           Writing objects: 100% (1/1), 72 bytes, done.
                        </div>
                        <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                            Total 1 (delta 0), reused 0 (delta 0).
                        </div>
                        <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                            To github.com:vercel/vercel-site.git
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl h-[180px] -mt-[29px] pt-2 overflow-hidden p-3 self-end z-10">
                    <div className="flex items-center mb-3 relative">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-[#e5484d] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#52aeff] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#45dec5] rounded-full"></div>
                        </div>
                        <div className="flex items-center gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <img src="/lock.svg" alt="" />
                            <div className="text-[#666666] text-[0.75rem]">vercel.com</div>
                        </div>
                    </div>
                    <div className="relative">
                        <span className="textShadow absolute top-[16%] left-[5%] font-semibold text-4xl leading-[.83] -tracking-[0.075em] text-white">
                            What will you ship?
                        </span>
                    </div>
                    <TriangleIcon />
                </div>

            </div>
        </div>

        <div className="flex-1"></div>
        

    </section>

}

export default FirstSection;
