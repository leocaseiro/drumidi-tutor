import React, { useEffect, useState } from 'react';
import { school } from 'ionicons/icons';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { getDrumAbcString } from '../../hooks/useDrumAbcString';
import { useParams } from 'react-router';
import AbcNotation from '../../components/AbcNotation';
import { Note, getDrumMapNotes, getNoteByName } from '../../utils/drumMap';

const Lesson: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [note, setNote] = useState<Note | undefined>(undefined);
    const [abcString, setAbcString] = useState<string>('');
    const { category, id } = useParams<{ category: string; id: string }>();

    useEffect(() => {
        setNotes(getDrumMapNotes());
    }, [id]);

    useEffect(() => {
        setNote(getNoteByName(notes, id));
    }, [id, notes]);

    useEffect(() => {
        if (!note?.abc) {
            return;
        }

        setAbcString(getDrumAbcString(note.label, note.abc));
    }, [note]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon icon={school} />
                        {` `}
                        <IonLabel>
                            Lesson - {category} {note?.label}
                        </IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {abcString && <AbcNotation abcString={`${abcString}`} />}
            </IonContent>
        </IonPage>
    );
};

export default Lesson;
