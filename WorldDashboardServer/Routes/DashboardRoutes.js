const express=require('express')
const DashboardController=require('../Controllers/DashboardController')
const router=express.Router()

router.get('/getTotalPopulation',DashboardController.getTotalPopulation)

router.get('/getTenPopulatedCountries',DashboardController.getTenPopulatedCountries)

router.get('/getTenLeastPopulatedCountries',DashboardController.getTenLeastPopulatedCountries)

router.get('/getTotalCountries',DashboardController.getTotalCountries)

router.get('/getAveragePopulation',DashboardController.getAveragePopulation)

router.get('/getTotalPopulationByContinent',DashboardController.getTotalPopulationByContinent)

router.post('/getPopulationGreaterThanSpecificVal',DashboardController.getPopulationGreaterThanSpecificVal)

router.post('/getPopulationLessThanSpecificVal',DashboardController.getPopulationLessThanSpecificVal)

router.get('/getPopulationByCountries',DashboardController.getPopulationByCountries)

router.get('/getLanguageSpokenInCountry',DashboardController.getLanguageSpokenInCountry)

router.get('/getLanguageSpokenWorldWide',DashboardController.getLanguageSpokenWorldWide)

router.get('/getTenMostSpokenLanguage',DashboardController.getTenMostSpokenLanguage)

router.get('/getCountriesWithGDP',DashboardController.getCountriesWithGDP)

router.get('/getAveLifeExpectancyAllCountries',DashboardController.getAveLifeExpectancyAllCountries)

router.get('/getCountriesWithHighLifeExpect',DashboardController.getCountriesWithHighLifeExpect)

router.get('/getCountriesWIthLowLifeExpect',DashboardController.getCountriesWIthLowLifeExpect)

router.get('/getSpecificCityinfo',DashboardController.getSpecificCityinfo)

router.get('/getLargestCityByPopulation',DashboardController.getLargestCityByPopulation)

router.get('/getTotalNoOfcities',DashboardController.getTotalNoOfcities)


module.exports=router;


//http:localhost:5003/dashboard/getTotalPopulation
