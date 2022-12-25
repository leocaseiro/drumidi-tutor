import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonContent,
    IonIcon,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonSelect,
    IonSelectOption,
    SelectChangeEventDetail,
} from '@ionic/react';
import { options } from 'ionicons/icons';

import { Note, getDrumMapNotes } from '../../../utils/drumMap';
import MidiItemOption from './MidiItemOption';

const Midi: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    const onSelectMidiListChange = (
        e: CustomEvent<SelectChangeEventDetail>
    ) => {
        console.log(e.detail.value);
    };

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
                        <IonSelect
                            onIonChange={onSelectMidiListChange}
                            placeholder="Devices"
                            okText="Select"
                            value="E-DRUM"
                        >
                            <IonSelectOption>E-DRUM</IonSelectOption>
                        </IonSelect>
                        <IonButton disabled={true}>Reset All</IonButton>
                        <IonButton>Save as</IonButton>
                        <IonButton>
                            <IonIcon icon={options}></IonIcon>
                        </IonButton>
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
