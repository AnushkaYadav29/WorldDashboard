import React, { useEffect, useState } from 'react'
import { getTotalPopulation } from '../api/Api'
import './Dashboard.css';

const TotalPopulation = () => {

    const [totalPop, setTotalPop]=useState()

    async function fetchData(){
        const res=await getTotalPopulation()
        setTotalPop(res)
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(totalPop)

  return (
       <div className="dashboard-card population-card">

            <h3 className="card-title">
                Total Population
            </h3>

            <h1 className="card-value">
                {totalPop?.toLocaleString()}
            </h1>

            <p className="card-desc">
                World Population
            </p>
        </div>
  )
}

export default TotalPopulation