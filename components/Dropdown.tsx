'use client'
import React, { useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const items = ['Hackathon', 'Builder', 'Project']
    const [actualItem, setActualItem] = useState(0) 

    const onClickOutsideListener = () => {
        closeDropdown(actualItem)
        document.removeEventListener("click", onClickOutsideListener)
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (i:number) => {
        setActualItem(i)
        setIsOpen(false);
    };

    return (
            <div onMouseLeave={() => {document.addEventListener("click", onClickOutsideListener)}} className="relative inline-block border-l-2 border-neutral-200 dark:border-neutral-700">
                <input type="hidden" name="category" value={items[actualItem].toLowerCase()} />
                <p
                    className="w-24 md:w-32 flex justify-center py-2 text-neutral-600 overflow-hidden dark:text-neutral-300 rounded-lg font-medium text-sm inline-flex items-center"
                    //onClick={toggleDropdown}
                >
                    {items[actualItem]}
                </p>

                {isOpen && (
                    <div
                        onMouseLeave={() => {
                          document.addEventListener("click", onClickOutsideListener)
                        }}
                        onMouseEnter={() => document.removeEventListener("click", onClickOutsideListener)}
                        className="z-50 origin-top-right absolute right-0 mt-6 w-44 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 dark:text-neutral-300 ring-1 ring-black ring-opacity-5"
                    >
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {items.map((item, i) => { return (
                            <li key={item}>
                                <a
                                    href="#"
                                    className={`block px-4 py-2 text-sm ${actualItem === i ? 'bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-800 dark:hover:bg-emerald-700':'hover:bg-gray-100 dark:hover:bg-neutral-700'}`}
                                    onClick={() => closeDropdown(i)}
                                >
                                    {item}
                                </a>
                            </li>
                            )})}
                        </ul>
                    </div>
                )}
            </div>
    )
}

export default Dropdown;