const Hero = () => {
  return (
    <div className=" ml-10 mr-10">
      <span className="  text-sm">
        <span className=" font-thin text-slate-700">
          Cryptocurrencies &gt;&gt;{" "}
        </span>
        <span className=" text-slate-900 text-sm">Bitcoin</span>
      </span>
      {/* cards */}
      <di className="flex flex-row gap-4">
        <div className=" w-2/3 bg-white rounded-xl">chart</div>
        <div className=" flex flex-col w-1/3 bg-white rounded-xl bg-[#0052FE] text-white p-12 items-center justify-center">
          <span className="font-semibold text-2xl pr-12 pl-12 text-center ">
            Get started with Koinx for FREE
          </span>
          <p className="mt-5 font-extralight text-sm text-center">
            With our range of features that you can equip for free, Koinx allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
      </di>
    </div>
  );
};
export default Hero;
