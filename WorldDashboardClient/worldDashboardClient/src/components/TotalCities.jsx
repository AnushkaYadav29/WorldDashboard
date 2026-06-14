import React, { useEffect, useState } from 'react'
import { getTotalNoOfcities } from '../api/Api'

const TotalCities = () => {

    const [totalCities,setTotalCities]=useState()

    async function fetchData() {
        const res=await getTotalNoOfcities()
        setTotalCities(res)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
     <div className="dashboard-card city-card">
            

            <h3 className="card-title">
                Total Cities
            </h3>

            <h1 className="card-value">
                {totalCities}
            </h1>

            <p className="card-desc">
                Cities in Database
            </p>
        </div>
  )
}

export default TotalCities