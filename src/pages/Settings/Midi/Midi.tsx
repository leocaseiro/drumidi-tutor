import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { options, pencil } from 'ionicons/icons';

import { Note, getDrumMapNotes } from '../../../utils/drumMap';

const Midi: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        (async () => {
            setNotes(await getDrumMapNotes());
        })();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon className="IonTitle__IonIcon" icon={options} />
                        <IonLabel>Setting Map Midi</IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList lines="full">
                    <IonListHeader>
                        <IonLabel>Map Midi</IonLabel>
                        <IonButton disabled={true}>Reset All</IonButton>
                        <IonButton>Save as</IonButton>
                    </IonListHeader>
                    {notes.map((note, i) => (
                        <IonItemSliding key={i}>
                            <IonItem>
                                <IonLabel>
                                    {note.label} ({note.midi.join(',')})
                                </IonLabel>
                            </IonItem>

                            <IonItemOptions>
                                <IonItemOption>Edit</IonItemOption>
                                <IonItemOption disabled={true} color="danger">
                                    Reset
                                </IonItemOption>
                            </IonItemOptions>
                        </IonItemSliding>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};
export default Midi;
