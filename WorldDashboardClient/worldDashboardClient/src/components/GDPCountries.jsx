import React, { useEffect, useState } from "react";
import { getCountriesGDP } from "../api/Api";

const GDPCountries = () => {

    const [countries,setCountries] = useState([]);

    async function fetchData(){
        const res = await getCountriesGDP();
        setCountries(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="table-card">
            <div className="table-wrapper">
            <h2> Top GDP Countries</h2>

            <table>
                <thead>
                    <tr>``
                        <th>Rank</th>
                        <th>Country</th>
                        <th>GDP</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.slice(0,10).map((country,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{country.Name}</td>
                            <td>{country.GNP?.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default GDPCountries;