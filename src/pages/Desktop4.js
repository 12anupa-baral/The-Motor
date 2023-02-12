import { Link } from "react-router-dom";

const Desktop4 = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1024px] overflow-hidden text-left text-13xl text-royalblue-100 font-inter">
      <div className="absolute top-[59px] left-[59px] bg-lightcyan w-[1326px] h-[863px]" />
      <h1 className="m-0 absolute top-[135px] left-[578px] text-[inherit] font-bold font-inherit">
        About us
      </h1>
      <p className="m-0 absolute top-[240px] left-[168px] text-12xl font-medium text-black whitespace-pre-wrap inline-block w-[799px]">
        <span className="block">Hey guys! Here's final shot of Motor :)</span>
        <span className="block">&nbsp;</span>
        <span className="block">{`Motor  — IOT & AI that helps in managing and maintaining the vehicle in a simple way. Automation tools, plans for maintenance, alerts, history,reports, tips and more.Feel free to give me some feedback.️`}</span>
        <span className="block">&nbsp;</span>
        <span className="block">{`Let’s make something singular together ! `}</span>
        <span className="block">Get in touch</span>
      </p>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[47px] left-[1356px] w-[25px] h-[25px] bg-[url(../public/cross4@3x.png)] bg-cover bg-no-repeat bg-[top]"
        to="/"
      />
      <img
        className="absolute top-[262px] left-[967px] w-[324.82px] h-[258.95px] overflow-hidden"
        alt=""
        src="../undraw-warning-re-eoyh-1.svg"
      />
      <div className="absolute top-[87px] left-[86px] text-14xl font-irish-grover">
        Motor
      </div>
    </div>
  );
};

export default Desktop4;
