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
    getNoteByLabel,
    getRandomNote,
    getShownNotes,
} from '../../hooks/useDrumMap';

const Exercise: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();

    const [notes, setNotes] = useState(getShownNotes(getDrumMapNotes()));
    const [note, setNote] = useState(getRandomNote(notes));
    const [abcString, setAbcString] = useState(getDrumAbcString('', note.abc));
    const [present] = useIonToast();

    const handleClick = (
        event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
    ) => {
        // eslint-disable-next-line
        // debugger;
        console.log('note', note);
        const { noteMidi } = (event.target as HTMLIonButtonElement).dataset;
        let msg;
        let icon;
        let color;

        if (Number(noteMidi) === note.midi) {
            msg = `Correct ${note.label}`;
            icon = checkmarkCircle;
            color = 'success';
        } else {
            msg = `Wrong, it was ${note.label}:${note.midi}, instead of ${noteMidi}`;
            icon = closeCircle;
            color = 'danger';
        }

        present({
            message: msg,
            duration: 3000,
            icon,
            color,
        });

        const randomNote = getRandomNote(notes);
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
                                    getNoteByLabel(notes, 'open-hi-hat')?.midi
                                }
                            >
                                Open Hi-hat
                            </IonButton>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByLabel(notes, 'closed-hi-hat')?.midi
                                }
                            >
                                Closed Hi-hat
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByLabel(notes, 'crash-cymbal-1')
                                        ?.midi
                                }
                            >
                                Crash
                            </IonButton>
                        </IonCol>
                        <IonCol
                            onClick={handleClick}
                            data-note-midi={
                                getNoteByLabel(notes, 'ride-cymbal-1')?.midi
                            }
                        >
                            <IonButton>Ride</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByLabel(notes, 'acoustic-snare')
                                        ?.midi
                                }
                            >
                                Snare
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByLabel(notes, 'hi-mid-tom')?.midi
                                }
                            >
                                High Tom
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByLabel(notes, 'low-mid-tom')?.midi
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
                                    getNoteByLabel(notes, 'closed-hi-hat')?.midi
                                }
                            >
                                Pedal Hi-Hat
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByLabel(notes, 'acoustic-bass-drum')
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
                                    getNoteByLabel(notes, 'high-floor-tom')
                                        ?.midi
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
