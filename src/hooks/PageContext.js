import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export default function PageProvider({ children, defaultState }) {
    const [currentValue, setCurrentValue] = useState(defaultState ? defaultState : '');
    return (
        <PageContext.Provider value={{ currentValue, setCurrentValue }}>
            { children }
        </PageContext.Provider>
    )
} 

export function useValue() {
     const context = useContext(PageContext);
     const { currentValue, setCurrentValue } = context;
     return { currentValue, setCurrentValue };
}