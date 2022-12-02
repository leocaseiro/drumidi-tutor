import React, { useEffect, useState } from 'react';
import { cog } from 'ionicons/icons';
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
import { useParams } from 'react-router';
import { Note, getDrumMapNotes } from '../../utils/drumMap';

const Setting: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);

    const { page } = useParams<{ page: string }>();

    useEffect(() => {
        (async () => {
            setNotes(await getDrumMapNotes());
        })();
    }, [page]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon slot="start" icon={cog} />
                        <IonLabel>Setting {page}</IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>{JSON.stringify(notes)}</IonContent>
        </IonPage>
    );
};

export default Setting;
