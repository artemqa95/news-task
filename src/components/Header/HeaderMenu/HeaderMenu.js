import React from "react";
import logoHindi from '../../../img/hindi.png'
import logoEng from '../../../img/eng.png'
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
const HeaderMenu = props => {
    return (
        <div className={'HeaderMenu'}>
            <HeaderMenuItem src={logoHindi} selector={'hindi'}/>
            <HeaderMenuItem src={logoEng} selector={'eng'}/>
        </div>
    )
}

export default HeaderMenu
