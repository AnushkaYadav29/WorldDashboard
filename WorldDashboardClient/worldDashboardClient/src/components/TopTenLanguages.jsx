import React, { useEffect, useState } from "react";
import { getTopLanguages } from "../api/Api";

const TopTenLanguages = () => {

    const [languages,setLanguages] = useState([]);

    async function fetchData(){
        const res = await getTopLanguages();
        setLanguages(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
    <div className="table-card">
        <h2>Top 10 Languages</h2>

        {languages.map((lang, index) => (
            <div key={index} className="progress-item">
                <div className="label">
                    #{index + 1} {lang.Language}
                </div>

                <div className="bar">
                    <div
                        className="fill"
                        style={{ width: `${lang.country_count * 5}px` }}
                    ></div>
                </div>

                <span>{lang.country_count}</span>
            </div>
        ))}
    </div>
);
};

export default TopTenLanguages;