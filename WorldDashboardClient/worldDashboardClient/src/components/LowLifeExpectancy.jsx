import React, { useEffect, useState } from "react";
import { getLowLifeExpectancy } from "../api/Api";

const LowLifeExpectancy = () => {

    const [countries,setCountries] = useState([]);

    async function fetchData(){
        const res = await getLowLifeExpectancy();
        setCountries(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="table-card">
            <h2>Low Life Expectancy</h2>

            <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Country</th>
                        <th>Years</th>
                    </tr>
                </thead>

                <tbody>
                    {countries.map((country,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{country.Name}</td>
                            <td>{country.LifeExpectancy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default LowLifeExpectancy;