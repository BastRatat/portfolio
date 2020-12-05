 // @ts-nocheck

import React from 'react';
import { Anchor } from 'antd';
import './Tab.css'

const { Link } = Anchor;

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
                <Anchor>
                    <Link href={`#${tabName}`} title={tabName.toUpperCase()} />
                </Anchor>
            </li>
        

    )
}
 
export default Tab;