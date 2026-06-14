import React, { useEffect, useState } from 'react'
import { GetTotalCountries } from '../api/Api'
import './Dashboard.css';

const LargestCity = () => {

    const[LargeCity,setLargeCity]=useState()

    async function fetchData(){
        const res=await GetTotalCountries()
        setLargeCity(res)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
      <div className="dashboard-card country-card">

            <h3 className="card-title">
                Largest City
            </h3>

            <h1 className="card-value">
                {LargeCity}
            </h1>

            <p className="card-desc">
                Largest City
            </p>
        </div>
  )
}

export default LargestCity