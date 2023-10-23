import Navbar from "./components/Navbar"
import db from './assets/db/db.json'
import { useState } from "react";
import Flag from "./components/Flag";

const App = () => {
const [data] = useState(db)
const [continent, setContinent] = useState<string>('')
const [country, setCountry] = useState<string>('')
const [darkMode, setDarkMode] = useState<boolean>(false);
 
 return (
    <div>
      <Navbar darkMode={darkMode}  setDarkMode={setDarkMode}/>
      <div className="flex md:flex-row flex-col justify-between md:mt-12  max-w-6xl mx-auto px-5 md:px-0 ">
        <input type="search"  placeholder="🔎 Search for a country..." className={ ` ${darkMode ? 'bg-black border-black  ': ` border `} mt-12 lg:mt-0 px-16 h-12 rounded-md  `} onChange={(e) => setCountry(e.currentTarget.value)}/>

      {/* Dropdown */}
      <div className="hs-dropdown relative inline-flex md:mt-0 mt-8">
        <button id="hs-dropdown-default" type="button" className={` ${darkMode && 'bg-black text-white'}  hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium  shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm`}>
          {!continent ? 'Filter by Region' :  continent }
          <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 " aria-labelledby="hs-dropdown-default">
          <a onClick={() => setContinent('Africa')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            Africa
          </a>
          <a onClick={() => setContinent('Americas')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            America
          </a>
          <a onClick={() => setContinent('Asia')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            Asia
          </a>
          <a onClick={() => setContinent('Europe')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
           Europe
          </a>
           <a onClick={() => setContinent('Oceania')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
           Oceania
          </a>
        </div>
      </div>
      </div>
       <div className="max-w-6xl max-auto grid md:grid-cols-4 md:px-0 px-8 mx-auto gap-12 mt-12">
      {
      
        data?.filter(item => Array.isArray(item.borders)).filter((item) =>  country ? item.name  === country : item.name ).filter((item) => continent ? item.region === continent : item.region).map((card, index:number) =><Flag card={card} key={index}/>)
      }
      </div>
    </div>
  )
}

export default App