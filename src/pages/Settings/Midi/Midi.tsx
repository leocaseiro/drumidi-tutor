import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonButtons,
    IonContent,
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
    IonTitle,
    IonToggle,
    IonToolbar,
    useIonAlert,
} from '@ionic/react';
import { options } from 'ionicons/icons';

import { Note, getDrumMapNotes } from '../../../utils/drumMap';

const Midi: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [presentAlert] = useIonAlert();

    const confirmReset = (noteLabel: string, noteName: string) => () =>
        presentAlert({
            header: `Are you sure you want to reset ${noteLabel}?`,
            cssClass: 'custom-alert',
            buttons: [
                {
                    text: 'No',
                    cssClass: 'alert-button-cancel',
                },
                {
                    text: 'Yes',
                    cssClass: 'alert-button-confirm',
                },
            ],
        });

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
                                <IonToggle
                                    checked={note.show}
                                    slot="start"
                                ></IonToggle>
                                <IonLabel>
                                    {note.label} ({note.midi.join(',')})
                                </IonLabel>
                            </IonItem>

                            <IonItemOptions>
                                <IonItemOption>Edit</IonItemOption>
                                <IonItemOption
                                    onClick={confirmReset(
                                        note.label,
                                        note.name
                                    )}
                                    disabled={true}
                                    color="danger"
                                >
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
