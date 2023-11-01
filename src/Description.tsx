
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import db from './assets/db/db'


const Description = () => {
const [data] = useState(db)

 const [darkMode, setDarkMode] = useState<boolean>(false);
     const {id} = useParams()
    const findFlag = data.find((ok) => ok.name=== id)

  return (
   <>
<Navbar darkMode={darkMode}  setDarkMode={setDarkMode}/>
<div className='max-w-6xl lg:mx-auto mx-4'>
<NavLink to='/'>
    <button className="border-2 shadow-lg py-2 px-6 rounded-md lg:mt-20 mt-10"> ← Back</button>
</NavLink>
<div className='flex space-x-12 lg:mt-20 mt-10 lg:flex-row flex-col'>
    <img src={findFlag?.flags.svg} alt="" className='contain lg:w-[30rem] lg:h-96 countain'/>
<div className='mt-2  ' >
    <h1 className="font-bold text-3xl">{findFlag?.name}</h1>
  <div className="flex lg:space-x-16 lg:flex-row flex-col">
      <ul className="mt-4  space-y-3 text-md">
        <li><p className="font-bold">Native Name: <span className="font-normal">{findFlag?.nativeName}</span></p></li>
        <li><p className="font-bold">Population: <span className="font-normal">{findFlag?.population.toLocaleString()}</span></p></li>
        <li><p className="font-bold">Region: <span className="font-normal">{findFlag?.region}</span></p></li>
        <li><p className="font-bold">Sub Region: <span className="font-normal">{findFlag?.subregion}</span></p></li>
        <li><p className="font-bold">Capital: <span className="font-normal">{findFlag?.capital}</span></p></li>
    </ul>
     <ul className="mt-4  space-y-3">
        <li><p className="font-bold">Top Level Domain: <span className="font-normal">{findFlag?.topLevelDomain}</span></p></li>
        <li><p className="font-bold">Currencies: <span className="font-normal">{findFlag?.currencies && findFlag?.currencies[0].name}</span></p></li>
        <li><p className="font-bold">Languages: { findFlag?.languages.map((country, index) => <span className="font-normal" key={index}>{country.nativeName + ', '}</span>)}</p></li>
 
    </ul>
  </div>
  <div>
  
    <ul className="flex flex-wrap  items-center space-x-2 mt-12 lg:mb-0 mb-12 space-y-3">
      {
        findFlag?.borders && 
        <li className="mr-2 flex ">Border Countries : </li>
      }
    {
       findFlag?.borders && findFlag?.borders.map((countries, index )=> <li key={index} className="border-2 shadow-lg py-2 px-6 rounded-md ">{countries}</li>)
    }

    </ul>
  </div>
</div>
</div>
</div>
   </>
  )
}

export default Description