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
import { getDrumAbcString } from '../../hooks/useDrumAbcString';
import { useParams } from 'react-router';
import AbcNotation from '../../components/AbcNotation';

const Lesson: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();

    const abcString1 = getDrumAbcString('', 'g');
    const abcString2 = getDrumAbcString('', 'c');

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
                {abcString1 && <AbcNotation abcString={`${abcString1}`} />}
                {abcString2 && <AbcNotation abcString={`${abcString2}`} />}
            </IonContent>
        </IonPage>
    );
};

export default Lesson;
