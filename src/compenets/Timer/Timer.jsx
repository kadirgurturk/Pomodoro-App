import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setStart } from "../../reducers/StartReducer"
import ProgresiveBar from "./ProgresiveBar"

const Timer = () =>{

    const timeValue = useSelector(state => state.timer.timeValue)
    const dispatch = useDispatch()
    const stateFont = useSelector(state => state.style.font);


    const [sec, setSec] = useState(0)
    const [minutes, setMinutes] = useState(timeValue)
    const [isFinsh,setFinish] = useState(false)
    const [isStart,setIsStart] = useState(false)



    useEffect(()=>{
        if(sec === 0 && minutes === 0) setFinish(true)
    },[sec,minutes,isFinsh])

    useEffect(()=>{
        setMinutes(timeValue)
        setSec(0)
    },[timeValue])

    useEffect(() => {
        if(isStart && !isFinsh){
            let IntervalTimer = setInterval(() => {
                setTime()
              }, 100);
            
              return () => clearInterval(IntervalTimer);
        }
      }, [minutes,sec,isStart,isFinsh]);
      
    const setTime = () =>{
        
            if(sec <= 0){
                setSec(59)
                setMinutes(minutes - 1)
            }else( setSec(sec - 1 ))
    

    }

    

    return(
        <div className="Timer">
            <div className="watch">
                <ProgresiveBar sec = {sec} minutes = {minutes}/>
                <div className="time">
                    <div className="clock" ><span>{minutes}</span><span>:</span><span>{sec < 10 && "0"}{sec}</span></div>
                    {isFinsh ? <button style={{fontFamily:stateFont.kod}} onClick={()=>{setFinish(false);setMinutes(timeValue);setIsStart(false);dispatch(setStart())}}>Restart</button> :
                    <button style={{fontFamily:stateFont.kod}} onClick={()=>{setIsStart(!isStart);dispatch(setStart())}}>{isStart ? "Pause" : "Start"}</button>}
                </div>      
            </div>
        </div>
    )
}

export default Timer;