import React, { useEffect, useState } from 'react'
import { getLanguageSpokenWorldWide } from '../api/Api'

const TotalLanguages = () => {

    const[TotalLanguages,setTotalLanguages]=useState()

    async function fetchData(){
        const res=await getLanguageSpokenWorldWide()
        setTotalLanguages(res)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className="dashboard-card language-card">

            <h3 className="card-title">
                Total Languages
            </h3>

            <h1 className="card-value">
                {TotalLanguages?.toLocaleString()}
            </h1>

            <p className="card-desc">
                Total Language Spoken WorldWide
            </p>
        </div>
  )
}

export default TotalLanguages