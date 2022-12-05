/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { checkmarkCircle, closeCircle, flask } from 'ionicons/icons';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonListHeader,
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
    Note,
    getDrumMapNotes,
    getNoteByMidi,
    getNoteByName,
    getRandomNote,
    getShowingNotes,
} from '../../utils/drumMap';
// import { useMidi } from '../../hooks/useMidi';
import { useDataProvider } from '../../store';

const Exercise: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const { messages } = useDataProvider() ?? {};

    const [notes, setNotes] = useState<Note[]>([]);
    const [shownNotes, setShowingNotes] = useState<Note[]>([]);
    const [note, setNote] = useState<Note | undefined>(undefined);
    const [abcString, setAbcString] = useState<string>();
    const [present] = useIonToast();

    useEffect(() => {
        (async () => {
            const drumNotes = await getDrumMapNotes();
            const showingNotes = getShowingNotes(drumNotes);
            const randomNote = getRandomNote(showingNotes);
            setNotes(drumNotes);
            setShowingNotes(showingNotes);
            setNote(randomNote);
            setAbcString(await getDrumAbcString('', randomNote.abc));
        })();
    }, []);

    useEffect(() => {
        if (!messages || messages.length === 0) {
            return;
        }
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.type === 'NoteOn') {
            checkNote(lastMessage.note);
        }
    }, [messages]);

    const handleClick = async (
        event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
    ) => {
        const { noteMidi } = (event.target as HTMLIonButtonElement).dataset;
        await checkNote(Number(noteMidi));
    };

    const checkNote = async (noteMidi: number) => {
        if (!note) {
            return false;
        }

        let msg;
        let icon;
        let color;
        let duration = 1000;

        if (note.midi.includes(noteMidi)) {
            msg = `Correct ${note.label}`;
            icon = checkmarkCircle;
            color = 'success';
            duration = 1000;
        } else {
            const wrongMidi = getNoteByMidi(shownNotes, noteMidi);
            msg = `Wrong, it was ${note.label}:${note.midi.join(
                ','
            )}, instead of ${wrongMidi?.label}`;
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
        setAbcString(await getDrumAbcString('', randomNote.abc));
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon className="IonTitle__IonIcon" icon={flask} />
                        <IonLabel>
                            Exercise {category} {id}
                        </IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonListHeader>
                    <IonLabel>
                        Exercise {category} {id}
                    </IonLabel>
                </IonListHeader>

                {abcString && <AbcNotation abcString={`${abcString}`} />}
                <hr />
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'open-hi-hat')?.midi[0]
                                }
                            >
                                Open Hi-hat
                            </IonButton>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'closed-hi-hat')
                                        ?.midi[0]
                                }
                            >
                                Closed Hi-hat
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'crash-cymbal')
                                        ?.midi[0]
                                }
                            >
                                Crash
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'ride-cymbal')?.midi[0]
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
                                    getNoteByName(notes, 'acoustic-snare')
                                        ?.midi[0]
                                }
                            >
                                Snare
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'hi-mid-tom')?.midi[0]
                                }
                            >
                                High Tom
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'low-mid-tom')?.midi[0]
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
                                    getNoteByName(notes, 'pedal-hi-hat')
                                        ?.midi[0]
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
                                        ?.midi[0]
                                }
                            >
                                Bass
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton
                                onClick={handleClick}
                                data-note-midi={
                                    getNoteByName(notes, 'high-floor-tom')
                                        ?.midi[0]
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
