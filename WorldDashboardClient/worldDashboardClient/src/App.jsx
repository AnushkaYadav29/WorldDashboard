import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

// KPI Cards
import TotalPopulation from './components/TotalPopulation';
import TotalCountries from './components/TotalCountries';
import TotalCities from './components/TotalCities';
import TotalLanguages from './components/TotalLanguages';
import Averagepopulation from './components/Averagepopulation';
import LargestCity from './components/LargestCity';

// Charts
import TopTenPopCountries from './components/TopTenPopCountries';
import TopTenLeastPopCountries from './components/TopTenLeastPopCountries';
import TopTenLanguages from './components/TopTenLanguages';
import HighLifeExpectancy from './components/HighLifeExpectancy';
import LowLifeExpectancy from './components/LowLifeExpectancy';
import GDPCountries from './components/GDPCountries';
import PopulationByContinentChart from './components/PopulationByContinentChart';
import PopulationByCountries from './components/PopulationByCountries';


// Filters / Search
import PopulationGreaterThan from './components/PopulationGreaterThan';
import PopulationLessThan from './components/PopulationLessThan';
import LanguageInCountry from './components/LanguageInCountry';
import AverageLifeExpectancyAllCountries from './components/AverageLifeExpectancyAllCountries';
import SpecificCityInfo from './components/SpecificCityInfo';

const App = () => {
  return (
    <div className="container-fluid">

      <Header />

      {/* KPI ROW */}
      <div className="row mt-3 text-center">
        <div className="col-md-2"><TotalPopulation /></div>
        <div className="col-md-2"><TotalCountries /></div>
        <div className="col-md-2"><TotalCities /></div>
        <div className="col-md-2"><TotalLanguages /></div>
        <div className="col-md-2"><Averagepopulation /></div>
        <div className="col-md-2"><LargestCity /></div>
      </div>

      {/* POPULATION SECTION */}
      <h4 className="mt-4"> Population Analytics</h4>
      <div className="row">
        <div className="col-md-6"><TopTenPopCountries /></div>
        <div className="col-md-6"><TopTenLeastPopCountries /></div>
        <div className="col-md-6"><PopulationByCountries /></div>
        <div className="col-md-6"><PopulationByContinentChart /></div>
      </div>

      {/* LANGUAGE SECTION */}
      <h4 className="mt-4"> Language Analytics</h4>
      <div className="row">
        <div className="col-md-6"><TopTenLanguages /></div>
        <div className="col-md-6"><LanguageInCountry /></div>
      </div>

      {/* ECONOMY & LIFE EXPECTANCY */}
      <h4 className="mt-4"> Economy & Life Expectancy</h4>
      <div className="row">
        <div className="col-md-6"><GDPCountries /></div>
        <div className="col-md-6"><HighLifeExpectancy /></div>
        <div className="col-md-6"><LowLifeExpectancy /></div>
        <div className="col-md-6"><AverageLifeExpectancyAllCountries /></div>
      </div>

      {/* FILTERS */}
      <h4 className="mt-4"> Filters & Search</h4>
      <div className="row">
        <div className="col-md-4"><PopulationGreaterThan /></div>
        <div className="col-md-4"><PopulationLessThan /></div>
        <div className="col-md-4"><SpecificCityInfo /></div>
      </div>

    </div>
  );
};

export default App;