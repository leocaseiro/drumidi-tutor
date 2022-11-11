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

const Lessons: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonIcon className="IonTitle__IonIcon" icon={school} />
                        <IonLabel>Lessons</IonLabel>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Lessons</IonLabel>
                    </IonListHeader>
                    <IonItemGroup>
                        <IonItemDivider>
                            <IonLabel>1. Note Identification</IonLabel>
                        </IonItemDivider>
                        <IonItem routerLink={`${match.url}/note/hi-hat`}>
                            <IonLabel>1.1 Hi-Hat</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/note/snare`}>
                            <IonLabel>1.2 Snare</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/note/bass`}>
                            <IonLabel>1.3 Bass</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/note/toms`}>
                            <IonLabel>1.4 Toms</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/note/ride`}>
                            <IonLabel>1.5 Ride</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/note/crash`}>
                            <IonLabel>1.6 Crash</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/note/effects`}>
                            <IonLabel>1.7 Effects</IonLabel>
                        </IonItem>
                    </IonItemGroup>
                    <IonItemGroup>
                        <IonItemDivider>
                            <IonLabel>2. Note Duration</IonLabel>
                        </IonItemDivider>
                        <IonItem routerLink={`${match.url}/tempo/bpm`}>
                            <IonLabel>2.1 BPM (Beats per Minute)</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/tempo/quarter`}>
                            <IonLabel>2.2 Quarter Notes</IonLabel>
                        </IonItem>
                    </IonItemGroup>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Lessons;
