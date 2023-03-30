import ColorSetting from "./ColorSetting";
import FontSetting from "./FontSetting";
import TimeSetting from "./TimeSetting";
import { AiOutlineClose } from "react-icons/ai";
import {motion} from "framer-motion"



const SettingPopup = ({setOpen}) =>{
    return(
        <div className="setting-popup">
            <motion.div initial={{opacity: 0,scale: 0.75,}} animate={{opacity: 1,scale: 1,transition: {ease: "easeOut",duration: 0.30,},}} className="card">
                <div className="setting header">
                    <h2> Settings</h2> <span className="close" onClick={()=>{setOpen(false)}}><AiOutlineClose size={24}/></span>
                </div>
                <hr/>
                <TimeSetting/>
                <hr/>
                <ColorSetting/>
                <hr/>
                <FontSetting/>
            </motion.div>
        </div>
    )
}

export default SettingPopup;