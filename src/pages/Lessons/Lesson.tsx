import React from 'react';
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
import { useParams } from 'react-router';

const Lesson: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();

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
                            Lesson {category} {id}
                        </IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                Lesson {category} {id}
            </IonContent>
        </IonPage>
    );
};

export default Lesson;
