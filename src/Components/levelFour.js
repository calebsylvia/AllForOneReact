import { levelFourCall } from "../Services/Data-Service";
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react"
import arrowLeft from "../assets/ArrowCircleLeft.png"
import arrowRight from "../assets/ArrowCircleRight.png"
import homeBtn from "../assets/House.png"


export default function LevelFour() {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [inputThree, setInputThree] = useState('');
    const [inputFour, setInputFour] = useState('');
    const [inputFive, setInputFive] = useState('');
    const [inputSix, setInputSix] = useState('');
    const [result, setResult] = useState('');


    const getResult = async () => {
        const response = await levelFourCall(inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix);
        setResult(response);
      }

  return (
    <div className="columns-1 lg:columns-2 lg:space-x-10 pt-5 pl-0 sm:pl-5 max-[769px]:mx-auto">
      <div className="pl-3">
        <div className="font-text text-neutral-100 max-[769px]:text-center">
          <p className="text-8xl max-[321px]:text-6xl">LEVEL 4</p>
          <p className="text-lg sm:text-3xl">MAD LIB!</p>
        </div>
        <div className="bg-[#212121] w-11/12 sm:w-4/5 h-[220px] sm:h-[350px] rounded-md mt-5 mx-auto lg:hidden text-left">
          <p className="pl-4 pt-2 text-2xl sm:text-3xl font-text text-neutral-100">&gt;{result}</p>
      </div>
      <div className="columns-1 md:columns-2 md:flex md:space-x-5 max-lg:justify-center max-sm:space-y-3">
        <div className="md:space-y-5">
            <div className="font-text mt-3 lg:mt-36 w-72 md:w-72 mx-auto lg:mx-0">
              <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
                ENTER NOUN:{" "}
              </p>
              <input
                type="text"
                className="rounded-md w-72 md:w-72 h-10 sm:h-12 pl-3 text-xl"
                placeholder="NOUN..."
                onChange={(e) => setInputOne(e.target.value)}
              ></input>
            </div>
            <div className="font-text mt-3 lg:mt-52 w-72 md:w-72 mx-auto lg:mx-0">
              <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
                ENTER NOUN:{" "}
              </p>
              <input
                type="text"
                className="rounded-md w-72 md:w-72 h-10 sm:h-12 pl-3 text-xl"
                placeholder="NOUN..."
                onChange={(e) => setInputTwo(e.target.value)}
              ></input>
            </div>
            <div className="font-text mt-3 lg:mt-52 w-72 md:w-72 mx-auto lg:mx-0">
              <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
                ENTER NOUN:{" "}
              </p>
              <input
                type="text"
                className="rounded-md w-72 md:w-72 h-10 sm:h-12 pl-3 text-xl"
                placeholder="NOUN..."
                onChange={(e) => setInputThree(e.target.value)}
              ></input>
            </div>
        </div>
        <div className="md:space-y-5">
            <div className="font-text mt-3 lg:mt-36 w-72 md:w-72 mx-auto lg:mx-0">
              <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
                ENTER VERB:{" "}
              </p>
              <input
                type="text"
                className="rounded-md w-72 md:w-72 h-10 sm:h-12 pl-3 text-xl"
                placeholder="VERB..."
                onChange={(e) => setInputFour(e.target.value)}
              ></input>
            </div>
            <div className="font-text mt-3 lg:mt-52 w-72 md:w-72 mx-auto lg:mx-0">
              <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
                ENTER PLACE:{" "}
              </p>
              <input
                type="text"
                className="rounded-md w-72 md:w-72 h-10 sm:h-12 pl-3 text-xl"
                placeholder="PLACE..."
                onChange={(e) => setInputFive(e.target.value)}
              ></input>
            </div>
            <div className="font-text mt-3 lg:mt-52 w-72 md:w-72 mx-auto lg:mx-0">
              <p className="text-neutral-100 text-nowrap text-3xl max-[769px]:hidden">
                ENTER ADJECTIVE:{" "}
              </p>
              <input
                type="text"
                className="rounded-md w-72 md:w-72 h-10 sm:h-12 pl-3 text-xl"
                placeholder="ADJECTIVE..."
                onChange={(e) => setInputSix(e.target.value)}
              ></input>
            </div>
            </div>
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
        <div className="flex bg-[#D9CAB3] space-x-10 sm:space-x-48 justify-center w-2/3 sm:w-4/5 lg:w-11/12 rounded-2xl mt-24 md:mt-16 lg:mt-32 max-lg:mb-5 max-[769px]:mx-auto">
          <Link to={"/levelThree"}>
            <img src={arrowLeft} alt="Arrow Left" />
          </Link>
          <Link to={"/"}>
            <img src={homeBtn} alt="Home Button" />
          </Link>
          <Link to={"/levelFive"}>
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
  )
}
