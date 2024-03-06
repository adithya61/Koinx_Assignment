import koinxLogo from "../assets/koinx_logo.png";
const Navbar = () => {
  return (
    <div className=" bg-white w-screen">
      <div className=" flex flex-row items-center justify-between pl-10 pr-10 pt-5 pb-5">
        <img
          className=" h-6 w-24 object-cover"
          src={koinxLogo}
          alt="koinx logo"
        />
        <div className="flex flex-row items-center">
          <ul className="flex flex-row font-medium mr-14 gap-8">
            <li className="cursor-pointer hover:text-gray-600 ">
              Crypto Taxes
            </li>
            <li className="cursor-pointer hover:text-gray-600 ">Free Tools</li>
            <li className="cursor-pointer hover:text-gray-600 ">
              Resource Center
            </li>
          </ul>
          <button
            className="text-white text-center bg-gradient-to-br
         from-[#266DEA] to-[#1C4BEF] rounded-xl pt-2.5 pb-2.5 pl-8 pr-8
         cursor-pointer align-middle"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
