import { Link } from "react-router-dom";

const Desktop7 = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1024px] overflow-hidden text-left text-10xl text-studio-darkmode-allwhite-ffffff font-inter">
      <h1
        className="m-0 absolute top-[78px] left-[680px] text-12xl font-bold font-inherit text-royalblue-100"
        id="blogs"
      >
        Blogs
      </h1>
      <div
        className="absolute top-[166px] left-[39px] rounded-[10.24px] bg-lightsteelblue-100 shadow-[0px_4.095465183258057px_4.1px_rgba(0,_0,_0,_0.25)] box-border w-[419px] h-[466px] border-[1px] border-solid border-mediumslateblue"
        id="service"
      />
      <div
        className="absolute top-[166px] left-[988px] rounded-small bg-lightsteelblue-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[419px] h-[466px] border-[1px] border-solid border-royalblue-100"
        id="safety"
      />
      <div
        className="absolute top-[166px] left-[525px] rounded-small bg-lightsteelblue-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[419px] h-[466px] border-[1px] border-solid border-royalblue-100"
        id="pay"
      />
      <img
        className="absolute top-[225px] left-[618.91px] w-[262.41px] h-[193px] overflow-hidden"
        alt=""
        src="../undraw-mobile-payments-re-7udl-1.svg"
      />
      <img
        className="absolute top-[228px] left-[118.39px] w-[283.98px] h-[197px] overflow-hidden"
        alt=""
        src="../undraw-services-re-hu5n-1.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-royalblue-100 absolute top-[521px] left-[198px] rounded-[3.67px] w-[124px] h-[47.69px]" />
      <button className="cursor-pointer [border:none] p-0 bg-royalblue-100 absolute top-[501px] left-[1145px] rounded-[4.08px] w-[138px] h-[53.08px]" />
      <button className="cursor-pointer [border:none] p-0 bg-royalblue-100 absolute top-[501px] left-[685px] rounded-[4.11px] w-[139px] h-[53.46px]" />
      <div className="absolute top-[530px] left-[217px] font-medium">
        Service
      </div>
      <div className="absolute top-[515px] left-[1175px] font-medium">
        Safety
      </div>
      <div className="absolute top-[515px] left-[709px] font-medium">
        Easy Pay
      </div>
      <img
        className="absolute top-[218px] left-[1086.35px] w-[252.55px] h-[196px] overflow-hidden"
        alt=""
        src="../undraw-location-tracking-re-n3ok-1.svg"
      />
      <div className="absolute top-[30px] left-[39px] text-14xl font-irish-grover text-royalblue-100">
        Motor
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[55px] left-[1382px] w-[25px] h-[25px] bg-[url(../public/cross4@3x.png)] bg-cover bg-no-repeat bg-[top]"
        to="/"
      />
    </div>
  );
};

export default Desktop7;
