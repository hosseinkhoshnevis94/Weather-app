import axios from "axios";
import { useState } from "react";
import { ForecastDataType, OptionType } from "../types";


const useForecast =()=>{
const [term, setTerm] = useState<string>("");
const [options,setOptions] = useState<OptionType[] | null>(null)
const [city,setCity] = useState<OptionType | null >(null)
const [showData,setShowData] = useState(false)
const [forecastData,setForecastData] = useState<ForecastDataType|null |any>(null)

  const fetchingDataByCityName = (value: any) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=5311beb487aef19654ee3d14aec2a4d4`
      )
      .then((res) => setOptions(res.data)
      );
  };
  const handleSearch =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value) {
        fetchingDataByCityName(value);
        setTerm(value)
    }
    if(value.length==0){
        setOptions(null);
    }
  };
  const getForcast = (city:OptionType) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=5311beb487aef19654ee3d14aec2a4d4`)
    .then((res) => {
        const newList = res.data.list.slice(0,12)        
        setForecastData({...res.data ,list:newList})}
    )
  }
  const onSubmit = () =>{
    if(!city) return
    getForcast(city)
  }
  const onOptionSelect = (option:OptionType) =>{
    setCity(option)
    setTerm(option.name)
    setOptions(null)
  }
  return({handleSearch,getForcast,onSubmit,onOptionSelect,term,forecastData,options})
}

export default useForecast