const express=require('express')
const connection = require('../config/db');

function getTotalPopulation(req,res){
    const q="SELECT SUM(Population) AS total_population FROM country";

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            totalPopulation:result[0].total_population,
            success:true
        });
    });
}

function getTenPopulatedCountries(req,res){
    const q="SELECT Name,Population FROM country ORDER BY Population DESC LIMIT 10";

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            countries:result,
            success:true
        });
    });
}

function getTenLeastPopulatedCountries(req,res){
    const q="SELECT Name,Population FROM country ORDER BY Population ASC LIMIT 10";

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            countries:result,
            success:true
        });
    });
}

function getTotalCountries(req,res){
    const q="SELECT COUNT(*) AS total_countries FROM country";

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            totalCountries:result[0].total_countries,
            success:true
        });
    });
}

function getAveragePopulation(req,res){
    const q="SELECT AVG(Population) AS average_population FROM country";

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            averagePopulation:result[0].average_population,
            success:true
        });
    });
}

function getTotalPopulationByContinent(req,res){
    const q=`
    SELECT Continent,SUM(Population) AS total_population
    FROM country
    GROUP BY Continent`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            data:result,
            success:true
        });
    });
}

function getPopulationGreaterThanSpecificVal(req,res){
    try {

        const x = req.body.population;

        const q5 = `
        SELECT Name, Population
        FROM country
        WHERE Population > ?
        ORDER BY Population DESC`;

        connection.execute(q5,[x],(err,result)=>{

            if(err){
                return res.status(400).send({
                    msg:"Database Error"
                });
            }

            res.status(200).send({
                result,
                success:true
            });
        });

    } catch (error) {

        res.status(500).send({
            msg:"Server Error"
        });
    }
}

function getPopulationLessThanSpecificVal(req,res){
    try {

        const x = req.body.population;

        const q5 = `
        SELECT Name, Population
        FROM country
        WHERE Population < ?
        ORDER BY Population DESC`;

        connection.execute(q5,[x],(err,result)=>{

            if(err){
                return res.status(400).send({
                    msg:"Database Error"
                });
            }

            res.status(200).send({
                result,
                success:true
            });
        });

    } catch (error) {

        res.status(500).send({
            msg:"Server Error"
        });
    }
}

function getPopulationByCountries(req,res){
    const country=req.query.country;

    

    const q=`
    SELECT Name,Population
    FROM country
    WHERE Name=?`;

    connection.query(q,[country],(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            country:result,
            success:true
        });
    });
}

function getLanguageSpokenInCountry(req,res){
    const country=req.query.country;

    const q=`
    SELECT cl.Language
    FROM countrylanguage cl
    JOIN country c
    ON c.Code=cl.CountryCode
    WHERE c.Name=?`;

    connection.query(q,[country],(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            languages:result,
            success:true
        });
    });
}

function getLanguageSpokenWorldWide(req,res){

    const q = `
    SELECT COUNT(DISTINCT Language) AS total_languages
    FROM countrylanguage`;

    connection.query(q,(err,result)=>{

        if(err){
            return res.status(500).send({
                msg: err.message
            });
        }

        res.status(200).send({
            totalLanguages: result[0].total_languages,
            success: true
        });
    });
}

function getTenMostSpokenLanguage(req,res){
    const q=`
    SELECT Language,COUNT(*) AS country_count
    FROM countrylanguage
    GROUP BY Language
    ORDER BY country_count DESC
    LIMIT 10`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            languages:result,
            success:true
        });
    });
}

function getCountriesWithGDP(req,res){
    const q=`
    SELECT Name,GNP
    FROM country
    ORDER BY GNP DESC`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            countries:result,
            success:true
        });
    });
}

function getAveLifeExpectancyAllCountries(req,res){
    const q=`
    SELECT AVG(LifeExpectancy) AS avg_life_expectancy
    FROM country`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            avgLifeExpectancy:result[0].avg_life_expectancy,
            success:true
        });
    });
}

function getCountriesWithHighLifeExpect(req,res){
    const q=`
    SELECT Name,LifeExpectancy
    FROM country
    ORDER BY LifeExpectancy DESC
    LIMIT 10`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            countries:result,
            success:true
        });
    });
}

function getCountriesWIthLowLifeExpect(req,res){
    const q=`
    SELECT Name,LifeExpectancy
    FROM country
    WHERE LifeExpectancy IS NOT NULL
    ORDER BY LifeExpectancy ASC
    LIMIT 10`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            countries:result,
            success:true
        });
    });
}

function getSpecificCityinfo(req,res){
    const city=req.query.city;

    const q=`
    SELECT *
    FROM city
    WHERE Name=?`;

    connection.query(q,[city],(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            cityInfo:result,
            success:true
        });
    });
}

function getLargestCityByPopulation(req,res){
    const q=`
    SELECT Name,Population
    FROM city
    ORDER BY Population DESC
    LIMIT 1`;

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            city:result[0],
            success:true
        });
    });
}

function getTotalNoOfcities(req,res){
    const q="SELECT COUNT(*) AS total_cities FROM city";

    connection.query(q,(err,result)=>{
        if(err){
            return res.status(500).send({msg:err.message});
        }

        res.status(200).send({
            totalCities:result[0].total_cities,
            success:true
        });
    });
}


module.exports={
    getTotalPopulation,
    getTenPopulatedCountries,
    getTenLeastPopulatedCountries,
    getTotalCountries,
    getAveragePopulation,
    getTotalPopulationByContinent,
    getPopulationGreaterThanSpecificVal,
    getPopulationLessThanSpecificVal,
    getPopulationByCountries,
    getLanguageSpokenInCountry,
    getLanguageSpokenWorldWide,
    getTenMostSpokenLanguage,
    getCountriesWithGDP,
    getAveLifeExpectancyAllCountries,
    getCountriesWithHighLifeExpect,
    getCountriesWIthLowLifeExpect,
    getSpecificCityinfo,
    getLargestCityByPopulation,
    getTotalNoOfcities
}