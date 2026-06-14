import React, { useEffect, useState } from 'react';
import { getTenLeastPopulatedCountries, getTenPopulatedCountries } from '../api/Api';

const TopTenLeastPopCountries = () => {

    const [countries, setCountries] = useState([]);

    async function fetchData() {
        const res = await getTenLeastPopulatedCountries();
        setCountries(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <div className="table-container">

        <h2> Top 10 Populated Countries</h2>

        <div className="table-wrapper">

            <table>

                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Country</th>
                        <th>Population</th>
                    </tr>
                </thead>

                <tbody>

                    {countries.map((country,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{country.Name}</td>
                            <td>
                                {country.Population.toLocaleString()}
                            </td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>

    </div>
);
};

export default TopTenLeastPopCountries;