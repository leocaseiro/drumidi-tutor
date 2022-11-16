/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { DeviceOptions, MIDI, MidiMessage } from 'capacitor-midi';
import { IonPage } from '@ionic/react';
import { useDataProvider } from '../store';

const MidiComponent: React.FC = () => {
    const [devices, setDevices] = useState<string[]>([]);
    const [messages, setMessages] = useState<MidiMessage[]>([]);
    const { midiEnabled, setMidiEnabled } = useDataProvider() ?? {};

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
                setMidiEnabled && setMidiEnabled(true);
                clearMessages();
            })
            .catch(console.error);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    const msgToString = (msg: MidiMessage) => {
        return JSON.stringify(msg);
    };

    const midiEvent = (message: MidiMessage) => {
        setMessages((messages) => [...messages, message]);
    };

    const start = () => {
        updateDevices();

        MIDI.addListener('MIDI_MSG_EVENT', midiEvent);
    };

    useEffect(start, []);

    return (
        <IonPage>
            <h1>Capacitor MIDI</h1>

            <h2>Devices:</h2>
            <div className="device">
                {devices.length > 0 ? (
                    devices.map((device, i) => (
                        <button
                            key={i}
                            className="button"
                            onClick={() => openDevice(i)}
                        >
                            open {device}
                        </button>
                    ))
                ) : (
                    <p>no MIDI devices found</p>
                )}
            </div>

            <h2>Messages:</h2>
            <div className="messages">
                {messages.length > 0 ? (
                    messages.map((message, i) => (
                        <div key={i}>{msgToString(message)}</div>
                    ))
                ) : (
                    <p>no messages</p>
                )}
            </div>

            <button className="button" onClick={() => clearMessages()}>
                clear
            </button>
        </IonPage>
    );
};

export default MidiComponent;
