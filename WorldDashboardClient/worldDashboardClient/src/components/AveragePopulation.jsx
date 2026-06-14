import React, { useEffect, useState } from 'react'
import { getAveragePopulation } from '../api/Api'

const Averagepopulation = () => {
    const[AveragePop,setAvePop]=useState()
    
        async function fetchData(){
            const res=await getAveragePopulation()
            setAvePop(res)
        }
    
        useEffect(()=>{
            fetchData()
        },[])
    
  return (
   <div className="dashboard-card aveargePop-card">

            <h3 className="card-title">
                Avearge Population
            </h3>

            <h1 className="card-value">
                {AveragePop?.toLocaleString()}
            </h1>

            <p className="card-desc">
                Average Population
            </p>
        </div>
  )
}

export default Averagepopulation