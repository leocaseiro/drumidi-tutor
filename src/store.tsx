import React, { createContext, useContext, useRef, useState } from 'react';
import { MidiMessage } from 'capacitor-midi';

type Data = {
    messages: MidiMessage[];
    setMessages: React.Dispatch<React.SetStateAction<MidiMessage[]>>;

    midiDevice: number | null;
    setMidiDevice: React.Dispatch<React.SetStateAction<number | null>>;

    midiEnabled: boolean;
    setMidiEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DataContext = createContext<Data | null>(null);

export const DataProvider = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const [messages, setMessages] = useState<MidiMessage[]>([]);
    const [midiEnabled, setMidiEnabled] = useState<boolean>(false);
    const [midiDevice, setMidiDevice] = useState<number | null>(null);

    const state: Data = {
        messages,
        setMessages,

        midiDevice,
        setMidiDevice,

        midiEnabled,
        setMidiEnabled,
    };

    return (
        <DataContext.Provider value={state}>{children}</DataContext.Provider>
    );
};

export default DataContext;
export const useDataProvider = () => useContext(DataContext);
