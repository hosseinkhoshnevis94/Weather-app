import { MiniCardTypes } from '../../types'
import './MiniCard.css'
import {CiTempHigh} from 'react-icons/ci'
import {WiHumidity} from 'react-icons/wi'
import {FiWind} from 'react-icons/fi'
import {FaCloudscale} from 'react-icons/fa'
import {BsFillCloudDrizzleFill} from 'react-icons/bs'


const Icons ={
    feels : CiTempHigh,
    humidity : WiHumidity,
    wind: FiWind,
    pressure : FaCloudscale,
    percipitation : BsFillCloudDrizzleFill
}
const MiniCard = ({title,icon,number,desc,marginleftMobile,marginRightMobile}:MiniCardTypes) : JSX.Element =>{
const Icon  =icon ? Icons[icon] : Icons['feels']

    return(
        <div className={`mini-card-container ${marginRightMobile && 'margin-right-mobile'}`}>
            <div className='mini-card-title'><Icon/>{" "}{title}</div>
            <div className='mini-card-disc'>
            <div className='mini-card-num'>{number}</div>
            <div className='mini-card-text'>{desc}</div>
            </div>
        </div>
    )
}

export default MiniCard