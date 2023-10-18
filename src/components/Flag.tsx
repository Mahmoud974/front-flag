import React from 'react'
import { NavLink, useParams } from 'react-router-dom'


const Flag:React.FC = ({card}) => {
 const { userId } = useParams();
 console.log(userId);
 
  
  return (
 <NavLink to='/'>
  <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"  >
        <img className="w-auto" src={card.flags.svg} alt={`flag ${card.name}`}/>
        <div className="px-6 py-4">
          <h2 className="font-bold text-lg mb-2">{card.name}</h2>
          <ul className="mt-3">
            <li><p className="font-bold">Population: <span className="font-normal">{card.population.toLocaleString()}</span> </p></li>
            <li><p className="font-bold">Region: <span className="font-normal">{card.region}</span> </p></li>
            <li><p className="font-bold">Capital: <span className="font-normal">{card.capital}</span> </p></li>
          </ul>
        
        </div>
      </div>
 </NavLink>  
  )
}

export default Flag