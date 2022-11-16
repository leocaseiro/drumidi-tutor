import React from 'react';
import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonToggle,
    ToggleChangeEventDetail,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { flask, musicalNotes, options, play, school } from 'ionicons/icons';
import './Menu.css';
import { useDataProvider } from '../store';

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
    {
        title: 'Beats',
        url: '/page/beats',
        icon: play,
    },
    {
        title: 'Songs',
        url: '/page/songs',
        icon: musicalNotes,
    },
    {
        title: 'Settings',
        url: '/page/settings',
        icon: options,
    },
];

const Menu: React.FC = () => {
    const location = useLocation();
    const { midiEnabled, setMidiEnabled } = useDataProvider() ?? {};

    const onMidiChange = (e: CustomEvent<ToggleChangeEventDetail>) => {
        setMidiEnabled && setMidiEnabled(e?.detail?.checked ?? false);
    };

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="menu-list">
                    <IonListHeader>DruMIDI Tutor</IonListHeader>
                    <IonNote>by @lcaseiro</IonNote>
                    <IonItem lines="none" detail={false}>
                        <IonLabel>MIDI</IonLabel>
                        <IonToggle
                            enableOnOffLabels={true}
                            checked={midiEnabled}
                            slot="start"
                            onIonChange={onMidiChange}
                        ></IonToggle>
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
