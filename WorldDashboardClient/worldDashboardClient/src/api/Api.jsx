import axios from "axios";
import axiosInstance from "./AxiosInstance";

export async function getTotalPopulation() {
    const res=await axiosInstance.get('/getTotalPopulation')
    if(res.data.success){
    return res.data.totalPopulation
    }
}

export async function GetTotalCountries() {
    const res=await axiosInstance.get('/getTotalCountries')
    if(res.data.success){
    return res.data.totalCountries
    }
}

export async function getTotalNoOfcities() {
    const res=await axiosInstance.get('/getTotalNoOfcities')
    if(res.data.success){
    return res.data.totalCities
    }
}

export async function getLanguageSpokenWorldWide(){
    const res=await axiosInstance.get('/getLanguageSpokenWorldWide')
    if(res.data.success){
    return res.data.totalLanguages
    }
}

export async function GetLargestCity() {
    const res=await axiosInstance.get('/GetLargestCity')
    if(res.data.success){
    return res.data.city
    }
}

export async function getTenPopulatedCountries() {

    const res = await axiosInstance.get('/getTenPopulatedCountries');

    if (res.data.success) {
        return res.data.countries;
    }

}

export async function getTenLeastPopulatedCountries() {

    const res = await axiosInstance.get('/getTenLeastPopulatedCountries');

    if (res.data.success) {
        return res.data.countries;
    }

}

export async function getTopLanguages(){
    const res = await axiosInstance.get('/getTenMostSpokenLanguage');

    if(res.data.success){
        return res.data.languages;
    }
}

export async function getHighLifeExpectancy(){
    const res = await axiosInstance.get('/getCountriesWithHighLifeExpect');

    if(res.data.success){
        return res.data.countries;
    }
}

export async function getLowLifeExpectancy(){
    const res = await axiosInstance.get('/getCountriesWIthLowLifeExpect');

    if(res.data.success){
        return res.data.countries;
    }
}

export async function getCountriesGDP(){
    const res = await axiosInstance.get('/getCountriesWithGDP');

    if(res.data.success){
        return res.data.countries;
    }
}

export async function getTotalPopulationByContinent(){
    const res = await axiosInstance.get('/getTotalPopulationByContinent');

    console.log(res.data); 

    if(res.data.success){
        return res.data.data;
    }
}

export async function getAveragePopulation() {
    const res=await axiosInstance.get('/getAveragePopulation');

    if(res.data.success){
        return res.data.averagePopulation
    }
}

export async function getPopulationGreaterThan(value) {
    const res = await axiosInstance.post('/getPopulationGreaterThanSpecificVal', {
        population: value
    });

    if (res.data.success) {
        return res.data.result;
    }
}

export async function getPopulationLessThan(value) {
    const res = await axiosInstance.post('/getPopulationLessThanSpecificVal', {
        population: value
    });

    if (res.data.success) {
        return res.data.result;
    }
}

export async function getPopulationByCountries() {
    const res = await axiosInstance.get('/getPopulationByCountries');

    if (res.data.success) {
        return res.data.countries;
    }
}


export async function getLanguageSpokenInCountry(country) {
    const res = await axiosInstance.get(`/getLanguageSpokenInCountry/${country}`);

    if (res.data.success) {
        return res.data.languages;
    }
}

export async function getAveLifeExpectancyAllCountries() {
    const res = await axiosInstance.get('/getAveLifeExpectancyAllCountries');

    if (res.data.success) {
        return res.data.averageLifeExpectancy;
    }
}

export async function getSpecificCityinfo(city) {
    const res = await axiosInstance.get(`/getSpecificCityinfo/${city}`);

    if (res.data.success) {
        return res.data.city;
    }
}