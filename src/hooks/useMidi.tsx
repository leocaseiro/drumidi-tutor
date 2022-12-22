import { useState } from 'react';
import { DeviceOptions, MIDI, MidiMessage } from 'capacitor-midi';
import { useDataProvider } from '../store';

export const useMidi = () => {
    const [devices, setDevices] = useState<string[]>([]);
    const { setMessages, setMidiEnabled, setMidiDevice } =
        useDataProvider() ?? {};

    const updateDevices = () => {
        MIDI.listMIDIDevices()
            .then(({ value }) => {
                if (value.length === 0) {
                    return;
                }

                setDevices(value);
                openDevice(devices.length);
            })
            .catch(console.error);
    };

    const openDevice = (deviceNumber: number) => {
        const deviceOptions: DeviceOptions = {
            deviceNumber,
        };
        MIDI.openDevice(deviceOptions)
            .then(() => {
                setMidiDevice && setMidiDevice(deviceNumber);
                setMidiEnabled && setMidiEnabled(true);
                clearMessages();
            })
            .catch(console.error);
    };

    const clearMessages = () => {
        setMessages && setMessages([]);
    };

    const midiEvent = (message: MidiMessage) => {
        setMessages && setMessages((messages) => [...messages, message]);
    };

    const init = () => {
        setDevices([]);
        updateDevices();

        MIDI.addListener('MIDI_MSG_EVENT', midiEvent);
    };

    return {
        init,
        devices,
        updateDevices,
        openDevice,
        clearMessages,
        setMessages,
    };
};
