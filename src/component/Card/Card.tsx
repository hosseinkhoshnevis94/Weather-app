import useForecast from "../../hooks/useForecast";
import ForcastCatd from "../ForcastCard/ForcastCard";
import SearchCard from "../SearchCard/SearchCard";
// import SearchCard from "../SearchCard/SearchCard";

const Card = (): JSX.Element => {
  const {
    handleSearch,
    getForcast,
    onSubmit,
    onOptionSelect,
    term,
    forecastData,
    options,
  } = useForecast();
  return (
    <>
      {!forecastData ? (
        <SearchCard
          handleSearch={handleSearch}
          onSubmit={onSubmit}
          onOptionSelect={onOptionSelect}
          options={options}
          term={term}
        />
      ) : (
        <ForcastCatd cityData={forecastData} />
      )}
    </>
  );
};
export default Card;
