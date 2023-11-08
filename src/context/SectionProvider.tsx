// MyContext.tsx
import React, { createContext, useContext, useState } from 'react';

type MyContextType = {
    value: string;
    updateValue: (newValue: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState<string>('');

    const updateValue = (newValue: string) => {
        setValue(newValue);
    };

    const contextValue: MyContextType = {
        value,
        updateValue,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};
