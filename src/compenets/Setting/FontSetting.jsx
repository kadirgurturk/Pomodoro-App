import { useDispatch, useSelector } from "react-redux"
import { changeFont } from "../../reducers/StyleReducer";


const FontSetting = () =>{
    
    const FONTS = [
        {name:"KUMBH_SANS", kod: 'Kumbh Sans'},
        {name : "ROBOTO_SLAB", kod: 'Roboto Slab'},
        {name:"SPACE_MONO",kod: 'Space Mono'},
    ];

    const stateFont = useSelector(state => state.style.font);
    const dispatch = useDispatch()

    console.log(FONTS[1]);
      

    return(
        <div className="setting font" >
            <h4>Fonts</h4>
            <div className="picks">
                {FONTS.map(font => <div onClick={()=>{dispatch(changeFont(font))}} className={stateFont.name === font.name ? "pick active" : "pick"} key={font.name} style={{fontFamily:font.kod}} >Aa</div>)}
            </div>
        </div>
    )
}

export default FontSetting;