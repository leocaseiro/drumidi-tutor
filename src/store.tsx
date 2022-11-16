import React, { createContext, useContext, useRef, useState } from 'react';

type Data = {
    midiEnabled: boolean;
    setMidiEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DataContext = createContext<Data | null>(null);

export const DataProvider = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const [midiEnabled, setMidiEnabled] = useState<boolean>(false);

    const state: Data = {
        midiEnabled,
        setMidiEnabled,
    };

    return (
        <DataContext.Provider value={state}>{children}</DataContext.Provider>
    );
};

export default DataContext;
export const useDataProvider = () => useContext(DataContext);
