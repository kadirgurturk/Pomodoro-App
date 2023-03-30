import { useState } from "react";
import SettingPopup from "./SettingPopup";
import { AiFillSetting } from "react-icons/ai";
import {motion} from "framer-motion"

const Settings = () =>{
    const [isOpen,setOpen] = useState(false)


    return(
        <>
            <motion.div whileHover={{rotate:180}} transition={{duration:.8}} className="settings" onClick={()=>{setOpen(true)}}>< AiFillSetting size={28}/></motion.div>
            {isOpen && <SettingPopup setOpen={setOpen} />}
        </>
    )
}

export default Settings;