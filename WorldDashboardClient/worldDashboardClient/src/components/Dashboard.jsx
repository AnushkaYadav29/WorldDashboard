import TotalPopulation from './TotalPopulation';
import TotalCountries from './TotalCountries';
import TotalCities from './TotalCities';
import TotalLanguages from './TotalLanguages';
import Averagepopulation from './Averagepopulation';

import TopLanguages from './TopLanguages';
import GDPCountries from './GDPCountries';
import HighLifeExpectancy from './HighLifeExpectancy';
import LowLifeExpectancy from './LowLifeExpectancy';
import TopCountries from './TopCountries';
import LeastPopulatedCountries from './LeastPopulatedCountries';
import PopulationByContinentChart from './PopulationByContinentChart';
import PopulationGreaterThan from './PopulationGreaterThan';
import PopulationLessThan from './PopulationLessThan';


import PopulationByCountries from './PopulationByCountries';
import LanguageInCountry from './LanguageInCountry';
import AverageLifeExpectancyAllCountries from './AverageLifeExpectancyAllCountries';
import SpecificCityInfo from './SpecificCityInfo';

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Top Cards */}
      <div className="cards-container">
        <TotalPopulation />
        <TotalCountries />
        <TotalCities />
        <TotalLanguages />
        <Averagepopulation />
      </div>

      {/* Tables / Charts Section 1 */}
      <div className="dashboard-grid">

        <TopCountries />
        <LeastPopulatedCountries />

        <TopLanguages />
        <GDPCountries />

        <HighLifeExpectancy />
        <LowLifeExpectancy />

        <PopulationByContinentChart />

        {/* NEW */}
        <PopulationByCountries />
        
      </div>

      {/* Filters Section */}
      <div className="dashboard-grid">

        <PopulationGreaterThan />
        <PopulationLessThan />

        {/* NEW */}
        <LanguageInCountry />
        <SpecificCityInfo />
      </div>

      {/* NEW SECTION: EXTRA ANALYTICS */}
      <div className="dashboard-grid">

        <AverageLifeExpectancyAllCountries />

      </div>

    </div>
  );
}

export default Dashboard;