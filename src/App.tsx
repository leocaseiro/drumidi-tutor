import React, { useEffect } from 'react';
import {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
// import Page from './pages/Page';
import Exercise from './pages/Exercises/Exercise';
import Exercises from './pages/Exercises/Exercises';
import Lesson from './pages/Lessons/Lesson';
import Lessons from './pages/Lessons/Lessons';
import Setting from './pages/Settings/Setting';
import Settings from './pages/Settings/Settings';
import MidiSettings from './pages/Settings/Midi/Midi';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/app.css';
import MidiComponent from './components/Midi';
import { DataProvider } from './store';
import { createStore, get, set } from './utils/storage';
import { defaultNotes } from './utils/drumMap';

setupIonicReact();

const App: React.FC = () => {
    useEffect(() => {
        const setupStore = async () => {
            await createStore();
            const notes = await get('notes');

            if (!notes) {
                set('notes', defaultNotes);
                set('allNotes', { defaultNotes });
            }
        };

        setupStore();
    }, []);
    return (
        <IonApp>
            <DataProvider>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <Menu />
                        <IonRouterOutlet id="main">
                            <Route path="/" exact={true}>
                                <Redirect to="/page/exercises/note/identification" />
                            </Route>
                            {/* <Route
                            path="/page/:name"
                            exact={true}
                            component={Page}
                        /> */}
                            <Route
                                path="/page/lessons"
                                exact={true}
                                component={Lessons}
                            />
                            <Route
                                path="/page/lessons/:category/:id"
                                component={Lesson}
                            />
                            <Route
                                path="/page/exercises"
                                exact={true}
                                component={Exercises}
                            />
                            <Route
                                path="/page/exercises/:category/:id"
                                component={Exercise}
                            />
                            <Route
                                path="/page/exercises/note/midi"
                                exact={true}
                                component={MidiComponent}
                            />
                            {/* <Route
                            path="/page/exercises/note/identification"
                            exact={true}
                            component={Exercise}
                        /> */}
                            <Route
                                path="/page/settings/:page"
                                component={Setting}
                            />
                            <Route
                                path="/page/settings/map-midi"
                                exact={true}
                                component={MidiSettings}
                            />
                            <Route
                                path="/page/settings"
                                exact={true}
                                component={Settings}
                            />
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonReactRouter>
            </DataProvider>
        </IonApp>
    );
};

export default App;
