// context/EquipeContext.js
import React, { createContext, useContext, useState } from 'react';

const EquipeContext = createContext();

export const EquipeProvider = ({ children }) => {
    const [equipe, setEquipe] = useState([]); // ou outro estado que você precise

    return (
        <EquipeContext.Provider value={{ equipe, setEquipe }}>
            {children}
        </EquipeContext.Provider>
    );
};

export const useEquipe = () => {
    const context = useContext(EquipeContext);
    if (!context) {
        throw new Error('useEquipe must be used within an EquipeProvider');
    }
    return context;
};
