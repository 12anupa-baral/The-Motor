import { Link } from "react-router-dom";

const Desktop5 = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1024px] overflow-hidden text-left text-5xl text-royalblue-100 font-inter">
      <h1 className="m-0 absolute top-[77px] left-[641px] text-[34px] font-bold font-inherit text-mediumslateblue">
        Features
      </h1>
      <div className="absolute top-[172px] left-[41px] rounded-small bg-whitesmoke-300 box-border w-[430px] h-[567px] border-[1px] border-solid border-black" />
      <div className="absolute top-[172px] left-[41px] rounded-small bg-whitesmoke-300 box-border w-[430px] h-[567px] border-[1px] border-solid border-royalblue-100" />
      <div className="absolute top-[172px] left-[507px] rounded-small bg-gray-100 box-border w-[426px] h-[567px] border-[1px] border-solid border-royalblue-100" />
      <div className="absolute top-[170px] left-[960px] rounded-small bg-gray-100 box-border w-[426px] h-[567px] border-[1px] border-solid border-royalblue-100" />
      <img
        className="absolute top-[328px] left-[1010px] w-[287.41px] h-[155px] overflow-hidden"
        alt=""
        src="../undraw-mornings-re-cofi-1.svg"
      />
      <img
        className="absolute top-[260px] left-[119px] w-[243px] h-[226.64px] overflow-hidden"
        alt=""
        src="../undraw-automobile-repair-ywci-1.svg"
      />
      <p className="m-0 absolute top-[533px] left-[106px] text-12xl font-medium">
        <span className="block">Never miss a</span>
        <span className="block">{`Maintanance Work `}</span>
      </p>
      <p className="m-0 absolute top-[620px] left-[106px] font-light text-black">
        <span className="block">We will remind your on</span>
        <span className="block">monthly basis</span>
      </p>
      <img
        className="absolute top-[530.94px] left-[84px] w-[5px] h-[67.06px]"
        alt=""
        src="../line-1.svg"
      />
      <img
        className="absolute top-[537.94px] left-[999px] w-[5px] h-[67.06px]"
        alt=""
        src="../line-1.svg"
      />
      <img
        className="absolute top-[537.94px] left-[550px] w-[5px] h-[67.06px]"
        alt=""
        src="../line-1.svg"
      />
      <p className="m-0 absolute top-[535px] left-[572px] text-12xl font-medium">
        <span className="block">{`Go on trip without `}</span>
        <span className="block"> worrying</span>
      </p>
      <p className="m-0 absolute top-[627px] left-[572px] font-light text-black">
        <span className="block">We will check if there is</span>
        <span className="block">any problem in your</span>
        <span className="block">system</span>
      </p>
      <p className="m-0 absolute top-[535px] left-[1036px] text-13xl font-medium text-mediumslateblue">
        <span className="block">Don’t sleep while</span>
        <span className="block">driving</span>
      </p>
      <p className="m-0 absolute top-[632px] left-[1036px] font-light text-black">
        <span className="block">We will wake you up</span>
        <span className="block">from our alarm</span>
      </p>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[55px] left-[1371px] w-[25px] h-[25px] bg-[url(../public/cross4@3x.png)] bg-cover bg-no-repeat bg-[top]"
        to="/"
      />
      <h1 className="m-0 absolute top-[47px] left-[40px] text-14xl font-normal font-irish-grover">
        Motor
      </h1>
      <img
        className="absolute top-[339px] left-[544px] w-[351.76px] h-[147.74px] object-cover"
        alt=""
        src="../car-clash-1@2x.png"
      />
    </div>
  );
};

export default Desktop5;
