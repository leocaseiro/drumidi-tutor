import React from 'react';
import { school } from 'ionicons/icons';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
// import './Page.css';

const Lesson: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonItem>
                            <IonIcon slot="start" icon={school} />
                            <IonLabel>Lesson {id}</IonLabel>
                        </IonItem>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>Lesson {id} Here</IonContent>
        </IonPage>
    );
};

export default Lesson;
