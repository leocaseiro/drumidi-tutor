import React from 'react';
import { flask } from 'ionicons/icons';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';

const Exercises: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon className="IonTitle__IonIcon" icon={flask} />
                        <IonLabel>Exercises</IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Exercises</IonLabel>
                    </IonListHeader>
                    <IonItemGroup>
                        <IonItemDivider>
                            <IonLabel>1. Note Identification</IonLabel>
                        </IonItemDivider>
                        <IonItem
                            routerLink={`${match.url}/note/identification`}
                            routerDirection="none"
                        >
                            <IonLabel>1.1 Identification</IonLabel>
                        </IonItem>
                        {/* <IonItem
                            routerLink={`${match.url}/note/midi`}
                            routerDirection="none"
                        >
                            <IonLabel>1.2 Identification MIDI</IonLabel>
                        </IonItem> */}
                    </IonItemGroup>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Exercises;
