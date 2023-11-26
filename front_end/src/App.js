import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft , faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function App() {

  const [isClose , SetisClose] = useState(true);

  return (
    <main className = "" >

      <div className = "flex">
        <div className = {`${isClose ? "md:w-1/3": "w-0"} p-5 h-screen transition-all duration-1000 delay-100 ease-in-out bg-blue-300 relative`}>
          <div onClick={() => SetisClose(!isClose)} className=' absolute shadow-md bg-white -right-3 cursor-pointer border-2 border-sky-400 rounded-full px-2 py-1'>
            {isClose? 
              <FontAwesomeIcon className=' text-xl text-sky-500' icon={faArrowLeft} />:
              <FontAwesomeIcon className=' text-xl text-sky-500' icon={faArrowRight} />
            }
          </div>
        </div>
        <div className='p-8'>
            <div className=' border-2 w-[400px]  h-1/2'>
              dadad
            </div>
          </div>
          <div className='p-8'>
            <div className=' border-2  w-[400px] h-1/2'>
              dadad
            </div>
          </div>
      </div>      
    </main>
  );
}

export default App;
