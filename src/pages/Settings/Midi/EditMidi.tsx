import React, { useState, useRef, useEffect } from 'react';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
    IonText,
} from '@ionic/react';
import { Note } from '../../../utils/drumMap';

function EditMidi() {
    const note: Note = {
        abc: '',
        label: 'Snare',
        midi: [48, 49],
        name: 'snare',
        short: 'SN',
        show: true,
        sound: 'accoustic-snare',
    };

    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);

    const [presentingElement, setPresentingElement] =
        useState<HTMLElement | null>(null);

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <IonPage ref={page}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton id="open-modal" expand="block">
                    Open
                </IonButton>
                <IonModal
                    ref={modal}
                    trigger="open-modal"
                    presentingElement={presentingElement!}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Edit Midi</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={() => dismiss()}>
                                    Close
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonHeader>
                            {note.label} [{note.sound}]
                        </IonHeader>
                        <IonList>
                            {note.midi.map((m) => (
                                <IonItem key={`midi--${m}`}>{m}</IonItem>
                            ))}
                        </IonList>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default EditMidi;
