import React from "react";
import './TabsHeader.scss';

export default function TabsHeader({ tabs, onClick, activeTab }) {
   
    return (
        <div className="tabs__header">
            {tabs.map(({ key, title }) => (
                <button 
                    key={key}
                    onClick={() => onClick(key)}
                    className={activeTab === key? 'active' : ''}
                >
                    {title}
                </button>
            ))}
        </div>
    )
}