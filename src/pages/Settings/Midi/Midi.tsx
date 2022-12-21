import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonContent,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
} from '@ionic/react';

import { Note, getDrumMapNotes } from '../../../utils/drumMap';
import MidiItemOption from './MidiItemOption';

const Midi: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        (async () => {
            setNotes(await getDrumMapNotes());
        })();
    }, []);

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonList lines="full">
                    <IonListHeader>
                        <IonLabel>Map Midi</IonLabel>
                        <IonButton disabled={true}>Reset All</IonButton>
                        <IonButton>Save as</IonButton>
                    </IonListHeader>
                    {notes.map((note, i) => (
                        <MidiItemOption key={i} note={note} />
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Midi;
