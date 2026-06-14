import React, { useEffect, useState } from 'react'
import { GetTotalCountries } from '../api/Api'
import './Dashboard.css';

const TotalCountries = () => {

    const[totalCountries,setTotalCountries]=useState()

    async function fetchData(){
        const res=await GetTotalCountries()
        setTotalCountries(res)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
      <div className="dashboard-card country-card">

            <h3 className="card-title">
                Total Countries
            </h3>

            <h1 className="card-value">
                {totalCountries}
            </h1>

            <p className="card-desc">
                Countries in Database
            </p>
        </div>
  )
}

export default TotalCountries