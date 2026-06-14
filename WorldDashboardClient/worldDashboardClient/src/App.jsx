import React from "react";
import "./components/Dashboard.css";
import Header from "./components/Header";

// KPI Cards
import TotalPopulation from "./components/TotalPopulation";
import TotalCountries from "./components/TotalCountries";
import TotalCities from "./components/TotalCities";
import TotalLanguages from "./components/TotalLanguages";
import Averagepopulation from "./components/Averagepopulation";
import LargestCity from "./components/LargestCity";

// Analytics
import TopTenPopCountries from "./components/TopTenPopCountries";
import TopTenLeastPopCountries from "./components/TopTenLeastPopCountries";
import TopTenLanguages from "./components/TopTenLanguages";
import HighLifeExpectancy from "./components/HighLifeExpectancy";
import LowLifeExpectancy from "./components/LowLifeExpectancy";
import GDPCountries from "./components/GDPCountries";
import PopulationByContinentChart from "./components/PopulationByContinentChart";
import PopulationByCountries from "./components/PopulationByCountries";

// Filters
import PopulationGreaterThan from "./components/PopulationGreaterThan";
import PopulationLessThan from "./components/PopulationLessThan";
import LanguageInCountry from "./components/LanguageInCountry";
import AverageLifeExpectancyAllCountries from "./components/AverageLifeExpectancyAllCountries";
import SpecificCityInfo from "./components/SpecificCityInfo";

function App() {
  return (
    <div className="dashboard-container">

      <Header />

      {/* KPI SECTION */}
      <section>
        <h2 className="section-title">Global Overview</h2>

        <div className="top-cards">
          <TotalPopulation />
          <TotalCountries />
          <TotalCities />
          <TotalLanguages />
          <Averagepopulation />
          <LargestCity />
        </div>
      </section>

      {/* POPULATION */}
      <section>
        <h2 className="section-title">Population Analytics</h2>

        <div className="analytics-grid">
          <TopTenPopCountries />
          <TopTenLeastPopCountries />
          <PopulationByCountries />
          <PopulationByContinentChart />
        </div>
      </section>

      {/* LANGUAGE */}
      <section>
        <h2 className="section-title">Language Analytics</h2>

        <div className="analytics-grid">
          <TopTenLanguages />
          <LanguageInCountry />
        </div>
      </section>

      {/* ECONOMY */}
      <section>
        <h2 className="section-title">Economy & Health</h2>

        <div className="analytics-grid">
          <GDPCountries />
          <HighLifeExpectancy />
          <LowLifeExpectancy />
          <AverageLifeExpectancyAllCountries />
        </div>
      </section>

      {/* FILTERS */}
      <section>
        <h2 className="section-title">Search & Filters</h2>

        <div className="analytics-grid">
          <PopulationGreaterThan />
          <PopulationLessThan />
          <SpecificCityInfo />
        </div>
      </section>

    </div>
  );
}

export default App;