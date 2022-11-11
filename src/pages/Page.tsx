import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { usePage } from '../hooks/usePage';

const Page: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const { icon } = usePage(name);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <IonItem>
                            {icon && <IonIcon slot="start" icon={icon} />}{' '}
                            {name}
                        </IonItem>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name={name} />
            </IonContent>
        </IonPage>
    );
};

export default Page;
