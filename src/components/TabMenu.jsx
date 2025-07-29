import React from 'react'

export default function TabMenu({children,onSelect,menuTag,menus}) {
  return (
    <li class="me-2">
        <button onClick={onSelect} class={`${menus === menuTag ? "ActiveTabButton" : "inActiveTabButton" }`}>
            {children}
        </button>
    </li>
  )
}
