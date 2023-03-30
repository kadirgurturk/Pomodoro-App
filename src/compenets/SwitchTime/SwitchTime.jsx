import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeChange } from "../../reducers/TimerReducer"
import {motion} from "framer-motion"



const SwitchTime = () =>{

    const stateFont = useSelector(state => state.style.font);
    const pomodoro = useSelector(state => state.timer.pomodoroTime)
    const shortBreak = useSelector(state => state.timer.shortBreak)
    const longBreak = useSelector(state => state.timer.longBreak)
    const color = useSelector(state => state.style.color)

    const timers = [
        { id: 1, name: "pomodoro", time: pomodoro },
        { id: 2, name: "short break", time: shortBreak },
        { id: 3, name: "long break", time: longBreak },
      ]

      
    const [activeTimer,setActiveTimer] = useState(timers[0])
    const [mainTime,setMainTime] = useState(pomodoro)
    const [showPop, setShowPop] = useState(false)
    const isStart = useSelector(state => state.isStart.isStart);

    console.log(color.name);

    const dispatch = useDispatch();

    const handleTime = (timer) =>{
        if(!isStart){
            setActiveTimer(timer)
            setMainTime(timer.time)
        }else{
            setShowPop(true)
            setTimeout(()=>{ setShowPop(false)},2000)
        }
    }

    useEffect(()=>{
        dispatch(timeChange(activeTimer.time))
    },[activeTimer])


    const Popup = () =>{
        return <motion.div initial={{top:"500px"}} animate={{top:"460px"}} transition={{duration: 0.2}} className="warning-popup">
           A timer is running. Pause it to change mode 
        </motion.div>
    }

 

    return(
        <div className="switcher" >
            {timers.map(timer => {
                return (
                <>
                    {showPop === true && <Popup/>}
                    <button className={timer.id === activeTimer.id ? `switch active ${color.name}` : "switch"} key={timer.id} onClick={()=>{handleTime(timer)}} style={{fontFamily:stateFont.kod}} >{timer.name}</button>
                    
                </>   
                )
                 
            })}
        </div>
    )
}

export default SwitchTime;