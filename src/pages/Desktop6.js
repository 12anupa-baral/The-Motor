import { Link } from "react-router-dom";

const Desktop6 = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1024px] overflow-hidden text-left text-5xl text-royalblue-100 font-inter">
      <p className="m-0 absolute top-[62px] left-[488px] text-13xl font-bold">
        Artificial Intelligence Solution
      </p>
      <button className="cursor-pointer p-0 bg-gray-100 absolute top-[499px] left-[53px] rounded-small box-border w-[401px] h-[261px] border-[1px] border-solid border-royalblue-100" />
      <button className="cursor-pointer p-0 bg-gray-100 absolute top-[499px] left-[964px] rounded-small box-border w-[410px] h-[261px] border-[1px] border-solid border-royalblue-100" />
      <button className="cursor-pointer p-0 bg-gray-100 absolute top-[499px] left-[496px] rounded-small box-border w-[416px] h-[261px] border-[1px] border-solid border-royalblue-100" />
      <img
        className="absolute top-[173px] left-[505px] w-[429.41px] h-[195.7px] overflow-hidden"
        alt=""
        src="../undraw-artificial-intelligence-re-enpp-1.svg"
      />
      <p className="m-0 absolute top-[517px] left-[118px] text-10xl font-semibold">
        Brake defect detection
      </p>
      <p className="m-0 absolute top-[560px] left-[125px] font-light text-black">{`Detects faults in your brake `}</p>
      <p className="m-0 absolute top-[554px] left-[1059px] font-light text-black">{`Detects eyes position `}</p>
      <p className="m-0 absolute top-[554px] left-[575px] font-light text-black">{`Detects faults in your brake `}</p>
      <p className="m-0 absolute top-[518px] left-[998px] text-12xl font-bold">
        Drowsiness Detection
      </p>
      <p className="m-0 absolute top-[517px] left-[548px] text-10xl font-semibold">
        Engine defect detection
      </p>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[49px] left-[1387px] w-[25px] h-[25px] bg-[url(../public/cross4@3x.png)] bg-cover bg-no-repeat bg-[top]"
        to="/"
      />
      <h1 className="m-0 absolute top-[43px] left-[46px] text-14xl font-normal font-irish-grover">
        Motor
      </h1>
      <img
        className="absolute top-[608px] left-[164px] w-[134.68px] h-[133px] object-cover"
        alt=""
        src="../break-1@2x.png"
      />
      <img
        className="absolute top-[598px] left-[626px] w-[154.01px] h-[135px] object-cover"
        alt=""
        src="../engine-1@2x.png"
      />
      <img
        className="absolute top-[566px] left-[1071px] w-[226px] h-[178.61px] overflow-hidden"
        alt=""
        src="../undraw-sleep-analysis-o5f9-1.svg"
      />
    </div>
  );
};

export default Desktop6;
