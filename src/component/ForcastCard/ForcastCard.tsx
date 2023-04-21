import "./ForcastCard.css";
import MiniCard from "../MiniCard/MiniCard";
import Temp from "../Degree/Temp";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { getHumidityValue, getWindDirection } from "../../helpers";
import { ForecastDataType } from "../../types";

const ForcastCatd = ({ cityData }: { cityData: ForecastDataType }) => {
  const today = cityData.list[0];
  console.log(cityData);

  return (
    <>
      <section id="forecast-container">
        <div className="forecast-up">
          <div className="forecast-up_left">
            <div className="city-name">
              <div className="city-name-up">
                <div>
                  <h5 className="city">
                    {cityData.city.name}
                    {"  "}
                    <small className="country">/{cityData.city.country}</small>
                  </h5>
                  <div className="city-desc">
                    {today.weather[0].main} ({" "}
                    <span>{today.weather[0].description}</span> )
                  </div>
                </div>
                <div className="temp">
                  <Temp
                    fontSize="30px"
                    fontWeight="400"
                    temp={today.main.temp}
                  ></Temp>
                </div>
              </div>
              <div className="city-name-down">
                <div>
                  L : <Temp temp={Math.floor(today.main.temp_min)}></Temp>
                </div>
                <div>
                  H : <Temp temp={Math.ceil(today.main.temp_max / 1)}></Temp>
                </div>
              </div>
            </div>
            <div className="cloud">
              {cityData.list.map((item, index) => (
                <div className="icon-container">
                  <div>
                    {index == 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                  </div>
                  <img
                    className="weather-icon"
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={item.weather[0].description}
                  />
                  <div>
                    <Temp
                      fontSize="16px"
                      fontWeight="200"
                      temp={Math.floor(item.main.temp)}
                    ></Temp>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="forecast-up_right">
            <MiniCard
              title={"Feels Like"}
              icon="feels"
              desc={`${
                Math.floor(today.main.feels_like) > Math.floor(today.main.temp)
                  ? "Warmer"
                  : "Colder"
              }`}
              number={<Temp temp={Math.floor(today.main.feels_like)}></Temp>}
            />{" "}
            <div className="mini-card-container sun">
              <div className="sunrise">
                {" "}
                <BsSunrise className="sun-icon"></BsSunrise>{" "}
                {new Date(cityData.city.sunrise * 1000).getHours()} :{" "}
                {new Date(cityData.city.sunrise * 1000).getMinutes()}{" "}
              </div>
              <div className="sunset">
                {" "}
                <BsSunset className="sun-icon"></BsSunset>{" "}
                {new Date(cityData.city.sunset * 1000).getHours()} :{" "}
                {new Date(cityData.city.sunset * 1000).getMinutes()}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="forecast-down">
          <div className="mobile">
            <MiniCard
              title={"Feels Like"}
              icon="feels"
              desc={`${
                Math.floor(today.main.feels_like) > Math.floor(today.main.temp)
                  ? "Warmer"
                  : "Colder"
              }`}
              number={<Temp temp={Math.floor(today.main.feels_like)}></Temp>}
            />{" "}
            <div className="mini-card-container sun">
              <div className="sunrise">
                {" "}
                <BsSunrise className="sun-icon"></BsSunrise>{" "}
                {new Date(cityData.city.sunrise * 1000).getHours()} :{" "}
                {new Date(cityData.city.sunrise * 1000).getMinutes()}{" "}
              </div>
              <div className="sunset">
                {" "}
                <BsSunset className="sun-icon"></BsSunset>{" "}
                {new Date(cityData.city.sunset * 1000).getHours()} :{" "}
                {new Date(cityData.city.sunset * 1000).getMinutes()}{" "}
              </div>
            </div>
          </div>
          <MiniCard
            title={"Percipitation"}
            icon="percipitation"
            desc={`Clouds at ${today.clouds.all}%`}
            number={`${today.pop} %`}
          />{" "}
          <MiniCard
            title={"Wind"}
            icon="wind"
            desc={`${getWindDirection(
              Math.floor(today.wind.deg)
            )} ,gusts ${today.wind.gust.toFixed(1)} Km/h`}
            number={`${today.wind.speed} Km/h`}
          />{" "}
          <MiniCard
            title={"Pressure"}
            icon="pressure"
            desc={`${
              Math.floor(today.main.pressure) > 1013 ? "Higher" : "Lower"
            } than normal`}
            number={`${today.main.pressure} hPa`}
          />{" "}
          <MiniCard
            title={"Humidity"}
            icon="humidity"
            desc={`${getHumidityValue(today.main.humidity)}`}
            number={`${today.main.humidity} %`}
            marginRightMobile={true}
          />{" "}
        </div>
      </section>
    </>
  );
};

export default ForcastCatd;
