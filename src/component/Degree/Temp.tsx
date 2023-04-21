import './Temp.css'
const Temp = ({temp,color,fontWeight,fontSize}:{temp:number,color?:string,fontSize?:string,fontWeight?:string}) : JSX.Element => {
    const style = {color:color,fontSize:fontSize,fontWeight:fontWeight}
    return(
        <span style={style} className="degree-container">{temp} <span className="threshold"></span></span>
    )
}
export default Temp