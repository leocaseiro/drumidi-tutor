/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import {
    IonButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonSelect,
    IonSelectOption,
    IonToggle,
    SelectChangeEventDetail,
    ToggleChangeEventDetail,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
    flask,
    musicalNotes,
    options,
    play,
    reload,
    school,
} from 'ionicons/icons';
import './Menu.css';
import { useDataProvider } from '../store';
import { useMidi } from '../hooks/useMidi';

export interface AppPage {
    url: string;
    icon: string;
    title: string;
}

export const appPages: AppPage[] = [
    {
        title: 'Lessons',
        url: '/page/lessons',
        icon: school,
    },
    {
        title: 'Exercises',
        url: '/page/exercises',
        icon: flask,
    },
    // {
    //     title: 'Beats',
    //     url: '/page/beats',
    //     icon: play,
    // },
    // {
    //     title: 'Songs',
    //     url: '/page/songs',
    //     icon: musicalNotes,
    // },
    {
        title: 'Settings',
        url: '/page/settings',
        icon: options,
    },
];

const Menu: React.FC = () => {
    const location = useLocation();
    const { midiDevice, midiEnabled, setMidiDevice, setMidiEnabled } =
        useDataProvider() ?? {};
    const { devices, init: initMidi, openDevice } = useMidi();

    useEffect(initMidi, []);

    const onToggleMidiChange = (e: CustomEvent<ToggleChangeEventDetail>) => {
        const { checked } = e.detail;
        setMidiEnabled && setMidiEnabled(checked);
        if (checked === false) {
            setMidiDevice && setMidiDevice(null);
        }
    };

    const onSelectMidiChange = (e: CustomEvent<SelectChangeEventDetail>) => {
        openDevice(e.detail.value);
        setMidiDevice && setMidiDevice(e.detail.value);
    };

    const onReload = () => {
        setMidiEnabled && setMidiEnabled(false);
        setMidiDevice && setMidiDevice(null);
        initMidi();
    };

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="menu-list">
                    <IonListHeader>
                        DruMIDI Tutor
                        <IonButton
                            onClick={onReload}
                            shape="round"
                            fill="clear"
                        >
                            <IonIcon icon={reload} />
                        </IonButton>
                    </IonListHeader>
                    <IonNote>by @lcaseiro</IonNote>
                    <IonItem lines="none" detail={false}>
                        <IonLabel>MIDI</IonLabel>
                        <IonToggle
                            enableOnOffLabels={true}
                            checked={midiEnabled}
                            disabled={devices.length === 0}
                            slot="start"
                            onIonChange={onToggleMidiChange}
                        ></IonToggle>
                        {devices.length > 0 && (
                            <IonSelect
                                onIonChange={onSelectMidiChange}
                                placeholder="Devices"
                                okText="Select"
                                value={midiDevice}
                            >
                                {devices.map((device, index) => (
                                    <IonSelectOption key={index} value={index}>
                                        {device}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        )}
                    </IonItem>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    className={
                                        location.pathname === appPage.url
                                            ? 'selected'
                                            : ''
                                    }
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}
                                >
                                    <IonIcon slot="start" icon={appPage.icon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
