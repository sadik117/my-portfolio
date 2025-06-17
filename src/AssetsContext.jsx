import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

const AssetsContext = ({children}) => {
    const [snowFall, setSnowFall] = useState(false)
    const [partical, setPartical] = useState(true)

    const theme = {
        snowFall,
        setSnowFall,
        partical,
        setPartical
    }
 
    return (
      
           <ThemeContext.Provider value={theme}>
                {children}
           </ThemeContext.Provider>
        
    );
};
AssetsContext.propTypes = {
    children : PropTypes.element
}
export default AssetsContext;
