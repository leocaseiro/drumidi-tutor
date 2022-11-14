import React, { useState } from 'react';
import { checkmarkCircle, closeCircle, school } from 'ionicons/icons';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    useIonToast,
} from '@ionic/react';
import { getDrumAbcString } from '../../hooks/useDrumAbcString';
import { useParams } from 'react-router';
import AbcNotation from '../../components/AbcNotation';
import {
    getDrumMapNotes,
    getNoteByMidi,
    getNoteByName,
    getRandomNote,
    getShownNotes,
} from '../../hooks/useDrumMap';

const Exercise: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();

    const [notes, setNotes] = useState(getDrumMapNotes());
    const [shownNotes, setShownNotes] = useState(getShownNotes(notes));
    const [note, setNote] = useState(getRandomNote(shownNotes));
    const [abcString, setAbcString] = useState(getDrumAbcString('', note.abc));
    const [present] = useIonToast();

    const handleClick = (
        event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
    ) => {
        // eslint-disable-next-line
        // debugger;
        // console.log('note', note);
        const { noteMidi } = (event.target as HTMLIonButtonElement).dataset;
        let msg;
        let icon;
        let color;
        let duration = 1000;

        if (Number(noteMidi) === note.midi) {
            msg = `Correct ${note.label}`;
            icon = checkmarkCircle;
            color = 'success';
            duration = 1000;
        } else {
            const wrongMidi = getNoteByMidi(shownNotes, Number(noteMidi));
            msg = `Wrong, it was ${note.label}:${note.midi}, instead of ${wrongMidi?.label}`;
            icon = closeCircle;
            color = 'danger';
            duration = 3000;
        }

        present({
            message: msg,
            duration,
            icon,
            color,
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                },
            ],
        });

        const randomNote = getRandomNote(shownNotes);
        setNote(randomNote);
        setAbcString(getDrumAbcString('', randomNote.abc));
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon slot="start" icon={school} />
                        <IonLabel>
                            Exercise {category} {id}
                        </IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                Exercise {category} {id}
                {abcString && <AbcNotation abcString={`${abcString}`} />}
                <hr />
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'open-hi-hat')?.midi
                                }
                            >
                                Open Hi-hat
                            </IonButton>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'closed-hi-hat')?.midi
                                }
                            >
                                Closed Hi-hat
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'crash-cymbal-1')?.midi
                                }
                            >
                                Crash
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'ride-cymbal-1')?.midi
                                }
                            >
                                Ride
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'acoustic-snare')?.midi
                                }
                            >
                                Snare
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'hi-mid-tom')?.midi
                                }
                            >
                                High Tom
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'low-mid-tom')?.midi
                                }
                            >
                                Low Tom
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'pedal-hi-hat')?.midi
                                }
                            >
                                Pedal Hi-Hat
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'acoustic-bass-drum')
                                        ?.midi
                                }
                            >
                                Bass
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'high-floor-tom')?.midi
                                }
                            >
                                Floor Tom
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Exercise;
