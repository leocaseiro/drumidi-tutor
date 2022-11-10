import React from 'react';
import { school } from 'ionicons/icons';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
// import './Page.css';

const Lessons: React.FC<RouteComponentProps> = ({ match }) => {
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
                            <IonLabel>Lessons</IonLabel>
                        </IonItem>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonItem routerLink={`${match.url}/1`}>
                        <IonLabel>Lesson 1</IonLabel>
                    </IonItem>
                    <IonItem routerLink={`${match.url}/2`}>
                        <IonLabel>Lesson 2</IonLabel>
                    </IonItem>
                    <IonItem routerLink={`${match.url}/3`}>
                        <IonLabel>Lesson 3</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Lessons;
