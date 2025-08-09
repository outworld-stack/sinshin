import React from 'react'

export default function TabMenu({children,onSelect,menuTag,menus}) {
  return (
    <li className="me-2">
        <button onClick={onSelect} className={`${menus === menuTag ? "ActiveTabButton" : "inActiveTabButton" }`}>
            {children}
        </button>
    </li>
  )
}
