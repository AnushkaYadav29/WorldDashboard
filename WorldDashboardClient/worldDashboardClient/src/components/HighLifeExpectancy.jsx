import React, { useEffect, useState } from "react";
import { getHighLifeExpectancy } from "../api/Api";

const HighLifeExpectancy = () => {

    const [countries,setCountries] = useState([]);

    async function fetchData(){
        const res = await getHighLifeExpectancy();
        setCountries(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="table-card">
            <h2> High Life Expectancy</h2>

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
    );
};

export default HighLifeExpectancy;