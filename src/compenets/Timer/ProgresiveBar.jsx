import { useDispatch, useSelector } from "react-redux"


const ProgresiveBar = ({sec, minutes}) =>{

    const timeValue = useSelector(state => state.timer.timeValue)
    const color = useSelector(state => state.style.color)
    const dashArray = 2 * 3.14 * 3.4 * 44 ; 

    let perctenge = (minutes * 60 + sec) * 100 / (timeValue * 60);

    let dashoffset = dashArray - (dashArray * perctenge) /100


    return(
        <svg className="p-bar" style={{position:"absolute", width:"100%", height:"100%", rotate:"270deg", transformOrigin:"center center"}}>
            <circle cx="50%" cy={"50%"} r="44%" fill="none" stroke = {color.kod} strokeWidth={"12px"} strokeLinecap="round" 
            strokeDasharray={dashArray} strokeDashoffset={dashoffset}>

            </circle>
        </svg>
    )
}

export default ProgresiveBar;