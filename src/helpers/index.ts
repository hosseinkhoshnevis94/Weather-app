export const getWindDirection = (deg:number) : string => {

if(deg > 15 && deg <= 75) return 'NE'

if(deg > 76 && deg <= 105) return 'E'
if(deg > 105 && deg <= 165) return 'SE'

if(deg > 166 && deg <= 195) return 'S'
if(deg > 15 && deg <= 105) return 'SW'

if(deg > 255 && deg <= 285) return 'W'
if(deg > 285 && deg <= 345) return 'NW'
return 'N'
}

export const getHumidityValue = (humidity:number) : string => {
    if(humidity <= 55) return 'Dry and comfortable'
    if(humidity > 55 && humidity <= 65) return 'A little uncomfortable, sticky feeling'
    return 'Lots of moisture, uncomfortable air!'
    
}

