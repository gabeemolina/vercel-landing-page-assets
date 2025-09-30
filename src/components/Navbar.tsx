import {navbarItems, vercelIconLink} from "../constants";

const Navbar = () => {
    return (
        <header className="flex justify-between px-9 pt-4 items-center w-full">
          <div className="flex gap-8">
            <img src={vercelIconLink} height="18" width="90"/>
            <ul className="flex">
                {navbarItems.map((item, index) => (
                    <li key={index} className="text-dove-gray text-sm py-2 px-3 cursor-pointer transition duration-200 ease-in hover:text-cod-gray hover:bg-gallery rounded-[9999px]">
                        {item}
                    </li>
                ))}
            </ul>
            </div>
            
             <div className="flex gap-3">
                <button className="py-1.5 px-3 bg-white text-sm font-medium rounded-md border border-[#00000014] cursor-pointer hover:bg-[#f2f2f2]">
                    Log in</button>
                <button className="py-1.5 px-3 bg-white text-sm font-medium rounded-md border border-[#00000014] cursor-pointer hover:bg-[#f2f2f2]">
                    Contact</button>
                <button className="py-1.5 px-3 bg-black text-white text-sm font-medium rounded-md border border-[#00000014] cursor-pointer hover:bg-[#383838]">
                    Sign up</button>
            </div> 

        </header>
    );
};

export default Navbar;