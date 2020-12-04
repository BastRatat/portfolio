 // @ts-nocheck

import React from 'react';
import './Tab.css'

type TabProps = {
    tabName: string,
    handleHover: (string, boolean)=>void
}

const Tab:React.FunctionComponent<TabProps> = ({ tabName, handleHover }) => {
    return ( 
        <li
            className="list-inline-item py-2 px-5"
            onMouseEnter={() => handleHover(tabName)}
            onMouseLeave={() => handleHover(tabName)}
        >
            {tabName.toUpperCase()}
        </li>
    )
}
 
export default Tab;