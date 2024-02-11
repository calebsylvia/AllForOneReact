import { levelFiveCall } from "../Services/Data-Service";
import { React, useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import arrowLeft from "../assets/ArrowCircleLeft.png";
import arrowRight from "../assets/ArrowCircleRight.png";
import homeBtn from "../assets/House.png";

export default function LevelFive() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const getResult = async () => {
    const response = await levelFiveCall(input);
    setResult(response);
  }

  return (
    <div className="columns-1 lg:columns-2 lg:space-x-10 pt-5 pl-0 sm:pl-5 max-[769px]:mx-auto">
      <div className="pl-3">
        <div className="font-text text-neutral-100 max-[769px]:text-center">
          <p className="text-8xl max-[321px]:text-6xl">LEVEL 5</p>
          <p className="text-lg sm:text-3xl">ODD OR EVEN!</p>
        </div>
        <div className="bg-[#212121] w-11/12 sm:w-4/5 h-[220px] sm:h-[350px] rounded-md mt-5 mx-auto lg:hidden text-left">
            <p className="pl-4 pt-2 text-2xl sm:text-3xl font-text text-neutral-100">&gt;{result}</p>
        </div>
        <div className="font-text mt-12 lg:mt-52 w-72 md:w-96 mx-auto lg:mx-0">
          <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
            ENTER A NUMBER:{" "}
          </p>
          <input
            id="input"
            type="number"
            className="rounded-md w-72 md:w-96 h-10 sm:h-12 pl-3 text-xl"
            placeholder="NUMBER..."
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <div className="flex font-text text-[#D9CAB3] mt-6 lg:mt-16  max-[769px]:justify-center">
          <Button
            className="px-12 py-5 text-base font-medium text-center bg-[#212121] rounded-lg"
            onClick={() => getResult()}
          >
            SUBMIT
          </Button>
          {" "}
        </div>
      </div>
      <div>
        <div className="flex bg-[#D9CAB3] space-x-10 sm:space-x-48 justify-center w-2/3 sm:w-4/5 lg:w-11/12 rounded-2xl mt-[170px] md:mt-16 lg:mt-32 max-lg:mb-5 max-[769px]:mx-auto">
          <Link to={"/levelFour"}>
            <img src={arrowLeft} alt="Arrow Left" />
          </Link>
          <Link to={"/"}>
            <img src={homeBtn} alt="Home Button" />
          </Link>
          <Link to={"/levelSix"}>
            <img src={arrowRight} alt="Arrow Right" />
          </Link>
        </div>
        <div className="bg-[#212121] w-11/12 h-[200px] md:h-[300px] xl:h-[650px] rounded-xl mt-3 max-[769px]:hidden">
          <p className="pl-4 pt-2 text-3xl font-text text-neutral-100">
            &gt;{result}
          </p>
        </div>
      </div>
    </div>
  );
}
