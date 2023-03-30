import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "../../reducers/StyleReducer";
import { BsCheckLg } from "react-icons/bs";


const ColorSetting = () =>{
    const Colors = [{name:"red",kod: "rgb(253, 79, 79)"},{name:"blue", kod: "rgb(106, 235, 255)"},{name:"purple", kod: "rgb(120, 2, 255)"}]

    const stateColor = useSelector(state => state.style.color)
    const dispatch = useDispatch();

    return(
        <div className="setting color">
            <h4>Color</h4>
            <div className="picks">
                {Colors.map(color => {return (<div className="select" > <div key={color.name} className="pick" style={{background: color.kod}} 
                onClick={()=>{dispatch(changeColor(color))}} > </div> 
                {color.name === stateColor.name && <span className="check">< BsCheckLg size={20}/></span>  }   </div>)})}
            </div>    
        </div>
    )
}

export default ColorSetting;

//{color.name === stateColor.name && }  BsCheckLg