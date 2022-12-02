import React, { useEffect, useState } from 'react';
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
import { Note, getDrumMapNotes } from '../../utils/drumMap';

export interface NotePage {
    name: string;
    label: string;
}

const Lessons: React.FC<RouteComponentProps> = ({ match }) => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        (async () => {
            setNotes(await getDrumMapNotes());
        })();
    }, []);

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
                        {notes.map(({ label, name }, i) => (
                            <IonItem
                                key={i}
                                routerLink={`${match.url}/note/${name}`}
                            >
                                <IonLabel>
                                    1.{i + 1} {label}
                                </IonLabel>
                            </IonItem>
                        ))}
                        {/* <IonItem routerLink={`${match.url}/note/effects`}>
                            <IonLabel>
                                1.{notePages.length + 1} Effects
                            </IonLabel>
                        </IonItem> */}
                    </IonItemGroup>
                    {/* <IonItemGroup>
                        <IonItemDivider>
                            <IonLabel>2. Note Duration</IonLabel>
                        </IonItemDivider>
                        <IonItem routerLink={`${match.url}/tempo/bpm`}>
                            <IonLabel>2.1 BPM (Beats per Minute)</IonLabel>
                        </IonItem>
                        <IonItem routerLink={`${match.url}/tempo/quarter`}>
                            <IonLabel>2.2 Quarter Notes</IonLabel>
                        </IonItem>
                    </IonItemGroup> */}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Lessons;
