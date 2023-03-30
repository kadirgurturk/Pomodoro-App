import { useDispatch, useSelector } from "react-redux"
import { pomodoroChange,shortChange,longChange } from "../../reducers/TimerReducer"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";


const TimeSetting = () =>{

    const dispatch = useDispatch()
    const pomodoro = useSelector(state => state.timer.pomodoroTime)
    const shortBreak = useSelector(state => state.timer.shortBreak)
    const longBreak = useSelector(state => state.timer.longBreak)

    return(
        <div className="setting time">
           <h4>TIME (MINUTES)</h4>
           <div className="btn">
                <div className="timeButton pomodoro">
                    <div className="title">Pomodoro</div>
                    <div className="field"><span className="time">{pomodoro}</span><span className="ıcons"> <span className="outline" onClick={()=>{dispatch(pomodoroChange(+1))}}> <AiOutlineUp/> </span> <span className="outline" onClick={()=>{dispatch(pomodoroChange(-1))}}> <AiOutlineDown/> </span></span></div>
                </div>
                <div className="timeButton short">
                    <div className="title">Short Break</div>
                    <div className="field"><span className="time">{shortBreak}</span><span className="ıcons"> <span className="outline" onClick={()=>{dispatch(shortChange(+1))}}> <AiOutlineUp/> </span> <span className="outline" onClick={()=>{dispatch(shortChange(-1))}}> <AiOutlineDown/> </span></span></div>            
                </div>

                <div className="timeButton long">
                    <div className="title">Long Break</div>
                    <div className="field"><span className="time">{longBreak}</span><span className="ıcons"> <span className="outline" onClick={()=>{dispatch(longChange(+1))}}> <AiOutlineUp/> </span> <span className="outline" onClick={()=>{dispatch(longChange(-1))}}> <AiOutlineDown/> </span></span></div>
                </div>
            </div>
        </div>
    )
}

export default TimeSetting;