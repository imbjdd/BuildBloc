'use client'

import React, { useState, useEffect } from 'react';
const { UilSun, UilMoon } = require('@iconscout/react-unicons')

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      const localTheme = localStorage ? localStorage.getItem('theme') : undefined;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return localTheme || (prefersDark ? 'dark' : 'not-dark');
    } catch(e) {

    }
  });

  useEffect(() => {
    localStorage.setItem('theme', theme||'');
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
<div className="flex flex-col justify-center"
          onClick={toggleTheme}>
    <input type="checkbox" name="light-switch" className="light-switch sr-only" />
    <label className="relative cursor-pointer p-2" htmlFor="light-switch">
        <UilSun className="dark:hidden" size="24" color="#171717" />
        <UilMoon className="hidden dark:block" size="24" color="#F5F5F5" />
        <span className="sr-only">Switch to light / dark version</span>
    </label>
</div>
  );
}