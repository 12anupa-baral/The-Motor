import { Link } from "react-router-dom";

const Desktop1 = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1024px] overflow-hidden text-left text-9xl text-gray-500 font-istok-web">
      <h6 className="m-0 absolute top-[283px] left-[63px] text-14xl font-bold font-inter inline-block w-[386px] h-[315px] text-black">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span className="text-black">{`I am `}</span>
          <span className="text-cornflowerblue-200">MOTOR</span>
          <span>,</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span>{`your `}</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span>automotive</span>
        </p>
        <p className="m-0">
          <span>assistance</span>
        </p>
      </h6>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[58px] left-[576px] text-gray-300"
        to="/desktop-3"
      >
        Alert
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[62px] left-[1065px] text-gray-400"
        to="/desktop-6"
      >
        AI/IOT
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[62px] left-[886px] text-gray-600"
        to="/desktop-4"
      >
        About us
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[58px] left-[710px] text-[inherit]"
        to="/desktop-5"
      >
        Features
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[65px] left-[1218px] text-[inherit]"
        to="/desktop-7"
      >
        Blogs
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[630px] left-[63px] rounded-2xxs box-border w-[150px] h-10 border-[1px] border-solid border-royalblue-100"
        to="/desktop-3"
      />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[630px] left-[256px] rounded-2xxs bg-royalblue-100 w-[150px] h-10"
        to="/desktop-2"
      />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[635px] left-[102px] text-royalblue-100"
        to="/desktop-3"
      >
        Sign in
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[633px] left-[291px] text-studio-darkmode-allwhite-ffffff"
        to="/desktop-2"
      >
        Sign up
      </Link>
      <h1
        className="m-0 absolute top-[51px] left-[63px] text-14xl font-normal font-irish-grover text-royalblue-100"
        id="logo"
      >
        Motor
      </h1>
      <img
        className="absolute top-[274px] left-[581px] w-[726px] h-[288.61px] object-cover"
        alt="Car"
        src="../caar-2@2x.png"
      />
    </div>
  );
};

export default Desktop1;
