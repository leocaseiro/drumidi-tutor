import React from 'react';
import { school } from 'ionicons/icons';
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

const Settings: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon className="IonTitle__IonIcon" icon={school} />
                        <IonLabel>Settings</IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Settings</IonLabel>
                    </IonListHeader>
                    <IonItemGroup>
                        <IonItemDivider>
                            <IonLabel>Input</IonLabel>
                        </IonItemDivider>
                        <IonItem
                            routerLink={`${match.url}/map-midi`}
                            routerDirection="none"
                        >
                            <IonLabel>Map MIDI</IonLabel>
                        </IonItem>
                        <IonItem
                            routerLink={`${match.url}/buttons`}
                            routerDirection="none"
                        >
                            <IonLabel>Buttons</IonLabel>
                        </IonItem>
                    </IonItemGroup>
                    <IonItemGroup>
                        <IonItemDivider>
                            <IonLabel>Ouput</IonLabel>
                        </IonItemDivider>
                        <IonItem
                            routerLink={`${match.url}/note/identification`}
                            routerDirection="none"
                        >
                            <IonLabel>Sheet Music</IonLabel>
                        </IonItem>
                    </IonItemGroup>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Settings;
