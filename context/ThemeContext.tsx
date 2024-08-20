'use client'

import React, {useContext, createContext, useState, useEffect} from "react"

interface ThemeContextType {
    mode: string
    setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: {children: React.ReactNode}) {
    const [mode, setMode] = useState('')

    const handleThemeChange = () => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add('dark')
            setMode('dark');
        } else {
            document.documentElement.classList.remove('dark')
            setMode('light');
        }
    }

    useEffect(()=>{
        handleThemeChange()
    }, [mode])

    return <ThemeContext.Provider value={{mode, setMode}}>
        {children}
    </ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    
    return context
}