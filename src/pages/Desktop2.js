import { Link } from "react-router-dom";

const Desktop2 = () => {
  return (
    <div className="relative bg-studio-darkmode-allwhite-ffffff w-full h-[1024px] overflow-hidden text-left text-4xl text-studio-darkmode-allwhite-ffffff font-istok-web">
      <div className="absolute top-[66px] left-[809.81px] rounded-[7.32px] bg-royalblue-300 w-[490.39px] h-[658px]" />
      <div
        className="absolute top-[123px] left-[873.76px] rounded-[8.92px] bg-royalblue-200 box-border w-[363.48px] h-[535px] border-[0.9px] border-solid border-royalblue-100"
        id="LOGIN"
      />
      <p className="m-0 absolute top-[142px] left-[1020px] text-9xl font-bold">
        Log in
      </p>
      <p className="m-0 absolute top-[430px] left-[897px] opacity-[0.8]">
        Password
      </p>
      <p className="m-0 absolute top-[220px] left-[897px]">
        Vehicle’s Owner Name
      </p>
      <p className="m-0 absolute top-[289px] left-[897px] text-snow">Email</p>
      <p className="m-0 absolute top-[358px] left-[897px]">Phone No.</p>
      <textarea
        className="bg-studio-darkmode-allwhite-ffffff absolute top-[246px] left-[897px] rounded box-border w-[300px] h-[25px] border-[0.7px] border-solid border-studio-darkmode-allwhite-ffffff"
        placeholder="name"
        required
      />
      <textarea
        className="bg-studio-darkmode-allwhite-ffffff absolute top-[315px] left-[897px] rounded box-border w-[300px] h-[25px] border-[0.6px] border-solid border-studio-darkmode-allwhite-ffffff"
        placeholder="Email"
        required
      />
      <textarea
        className="bg-studio-darkmode-allwhite-ffffff absolute top-[527px] left-[897px] rounded box-border w-[300px] h-[25px] border-[0.6px] border-solid border-studio-darkmode-allwhite-ffffff"
        placeholder="Password"
        required
      />
      <textarea
        className="bg-studio-darkmode-allwhite-ffffff absolute top-[458px] left-[897px] rounded box-border w-[300px] h-[25px] border-[0.6px] border-solid border-studio-darkmode-allwhite-ffffff"
        placeholder="Vehicle no."
        required
      />
      <textarea
        className="bg-studio-darkmode-allwhite-ffffff absolute top-[386px] left-[897px] rounded box-border w-[300px] h-[25px] border-[0.6px] border-solid border-studio-darkmode-allwhite-ffffff"
        placeholder="Phone No."
        required
      />
      <p className="m-0 absolute top-[499px] left-[897px]">Vehicle No.</p>
      <button className="cursor-pointer p-0 bg-whitesmoke-100 absolute top-[603px] left-[1009px] rounded-small box-border w-[100px] h-[30px] border-[1px] border-solid border-whitesmoke-100" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[603px] left-[1025px] text-6xl font-istok-web text-black text-left inline-block">
        Submit
      </button>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[55px] left-[1378px] w-[25px] h-[25px] bg-[url(../public/cross4@3x.png)] bg-cover bg-no-repeat bg-[top]"
        to="/"
      />
      <h1 className="m-0 absolute top-[42px] left-[88px] text-14xl font-normal font-irish-grover text-royalblue-100">
        Motor
      </h1>
      <img
        className="absolute top-[130px] left-[105px] w-[600px] h-[600px] object-cover"
        alt=""
        src="../bus-1@2x.png"
      />
    </div>
  );
};

export default Desktop2;
