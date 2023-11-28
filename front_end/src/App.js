import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft , faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import img1 from "../src/img_data/test.jpg";
import axios from "axios";

function App() {
  const [isClose , SetisClose] = useState(true);
  const [isNext , SetisNext] = useState(false);
  const [widthG , setwidthG] = useState(0);
  const [heightG , setheightG] = useState(0);
  const [verticalline , setverticalline] = useState(0);
  const [horizontalthick , sethorizontalthick] = useState(0);
  const [numsSpot , setnumsSpot] = useState(0);
  const [numsScratch , setnumsSratch] = useState(0);
  const[numsCloudy , setnumsCloudy] = useState(0);
  const[numsRadial , setnumsRadial] = useState(0);

  const sendForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/generate' , {

    })
    .then(function(res) {
      console.log(res.data.msg);
    })
    .catch(function (error) {
      console.log(error, 'error');

  });
  };

  return (
    <main className = " overscroll-x-none overflow-x-hidden" >
      <div className = "flex">
        <div className = {`${isClose ? "md:w-1/4": "w-[100px]"} p-5 h-screen space-y-12 transition-all duration-1000 delay-100 ease-in-out bg-sky-200 relative`}>
          <div onClick={() => SetisClose(!isClose)} className=' absolute shadow-md bg-white -right-3 cursor-pointer border-2 border-sky-400 rounded-full px-2 py-1'>
            {isClose? 
              <FontAwesomeIcon className=' text-xl text-sky-500' icon={faArrowLeft} />:
              <FontAwesomeIcon className=' text-xl text-sky-500' icon={faArrowRight} />
            }
          </div>
          <div className={`${isClose? "block": 'hidden'} text-center mt-6 text-4xl font-Lora text-white`}>
            {!isNext? (<h2>Images Options</h2>): <h2>Defects Options</h2>}
          </div>
          <div className={`${isClose? "block": 'hidden'}`}>
            <div className="flex flex-col mx-auto max-w-screen-xl cursor-pointer">
                  <form className="w-full max-w-lg">
                    {!isNext? 
                      (
                        <>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                            <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="grid-first">
                                    Width of Grid
                                </label>
                                <input value={widthG} onChange={(e) => setwidthG(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                              <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                  <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="grid-second">
                                    Height of Grid
                                  </label>
                                  <input value={heightG} onChange={(e) => setheightG(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                              </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                              <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                  <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="grid-third">
                                    Vertical Line Thickness
                                  </label>
                                  <input value={verticalline} onChange={(e) => setverticalline(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                              </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                              <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                  <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="grid-four">
                                    Horizontal Line Thickness
                                  </label>
                                  <input value={horizontalthick} onChange={(e) => sethorizontalthick(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                              </div>
                          </div>  
                        </>
                      ): (
                          <>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                            <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="defect1">
                                    Number of Spot Defects
                                </label>
                                <input value={numsSpot} onChange={(e) => setnumsSpot(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                              <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                  <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="defect2">
                                    Number of Scratch Defects
                                  </label>
                                  <input value={numsScratch} onChange={(e) => setnumsSratch(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                              </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                              <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                  <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="defect3">
                                    Number of Cloudy Defects
                                  </label>
                                  <input value={numsCloudy} onChange={(e) => setnumsCloudy(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                              </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 lg:mb-2">
                              <div className="w-full px-3 lg:mb-3 mb-2 space-y-2 md:mb-0">
                                  <label className="block tracking-wide text-gray-700 text-lg italic font-bold mb-3" htmlFor="defect4">
                                    Number of Radial Defects
                                  </label>
                                  <input value={numsRadial} onChange={(e) => setnumsRadial(e.target.value)} className="appearance-none focus:outline-none bg-white block w-full text-gray-700  rounded py-3 px-4 mb-3 leading-tight" type="number" placeholder="0" />
                              </div>
                          </div>  
                        </>
                      )
                  }                                                             
                  </form>
                  <div className='flex justify-center mt-4 mb-5'>
                    <button className=' shadow-lg border-2 font-semibold hover:opacity-60 rounded-full text-lg w-[250px] bg-yellow-200 py-4'>Randomnize</button>
                  </div>
                  <div className='flex justify-center mb-5'>
                    <button onClick={() => SetisNext(!isNext)} className=' shadow-lg border-2 font-semibold hover:opacity-60 rounded-full text-lg w-[250px] bg-yellow-200 py-4'>
                      {!isNext? ('Next'): 'Back'}
                    </button>
                  </div>         
                  <div className={`${isNext? 'flex': 'hidden'} justify-center `}>
                    <button type='submit' onClick={(e) => sendForm(e)} className='border-2 shadow-lg font-semibold hover:opacity-60 rounded-full text-lg w-[250px] bg-yellow-200 py-4'>
                        Submit
                    </button>
                  </div>                   
              </div>
          </div>
        </div>

        <div className={`${!isClose? "lg:px-52" : "lg:px-24"} transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:py-12`}>
            <div className='shadow-lg p-2 hover:opacity-60 w-[calc(100vh-400px)] h-3/5'>
              <img src={img1} className='w-full h-full'/>
            </div>
            <div className=' hidden border-2 w-[calc(100vh-400px)] border-red-200  h-3/5'>
              dadad
            </div>
        </div>
      </div>      
    </main>
  );
}

export default App;
