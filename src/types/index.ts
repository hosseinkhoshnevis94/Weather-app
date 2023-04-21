export interface OptionType {
  country: string;
  name: string;
  lat: number;
  lon: number;
  state: string;
}
export interface SearchCardTypes {
  options: OptionType[] | null;
  term: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onOptionSelect: (option: OptionType) => void;
}
export interface MiniCardTypes {
  title?:string,
  icon?:'wind' | 'feels' | 'humidity' | 'pressure' | 'percipitation' ,
  number?:number | string | JSX.Element,
  desc?:string | number,
  marginRightMobile?:boolean,
  marginleftMobile?:boolean
}

export interface ForecastDataType {
    cod: string;
    message: number;
    cnt: number;
    list: {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
      rain?: {
        "3h": number;
      };

      snow?: {
        "3h": number;
      };
    }[];
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };


}
