import React from "react";
import { SvgProps } from "../../../components/Svg/types";

import LogoImage from '../assets/logo.png';

interface LogoProps extends SvgProps {
    isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
    return (
      <div style={{marginLeft: "10px", marginTop: "5px"}}>
        <img src={LogoImage} alt="Beef Swap" style={{width: "150px"}} />
      </div>
    );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
