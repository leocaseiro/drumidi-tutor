import React from 'react';
import {
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonToggle,
    useIonAlert,
} from '@ionic/react';
import { Note } from '../../../utils/drumMap';

const MidiItemOption: React.FC<{
    note: Note;
}> = ({ note }) => {
    const [presentAlert] = useIonAlert();

    const confirmReset = () =>
        presentAlert({
            header: `Are you sure you want to reset ${note.label}?`,
            cssClass: 'custom-alert',
            buttons: [
                {
                    text: 'No',
                    cssClass: 'alert-button-cancel',
                    handler: () => {
                        alert('No');
                    },
                },
                {
                    text: 'Yes',
                    cssClass: 'alert-button-confirm',
                    handler: () => {
                        alert('Yes');
                    },
                },
            ],
        });

    return (
        <IonItemSliding>
            <IonItem>
                <IonToggle checked={note.show} slot="start"></IonToggle>
                <IonLabel>
                    {note.label} ({note.midi.join(',')})
                </IonLabel>
            </IonItem>

            <IonItemOptions>
                <IonItemOption>Edit</IonItemOption>
                <IonItemOption
                    onClick={confirmReset}
                    disabled={false}
                    color="danger"
                >
                    Reset
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
};

export default MidiItemOption;
