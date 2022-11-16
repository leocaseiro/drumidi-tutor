import React, { createContext, useContext } from 'react';
import {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Exercise from './pages/Exercises/Exercise';
import Exercises from './pages/Exercises/Exercises';
import Lesson from './pages/Lessons/Lesson';
import Lessons from './pages/Lessons/Lessons';
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

setupIonicReact();

const App: React.FC = () => {
    return (
        <IonApp>
            <DataProvider>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <Menu />
                        <IonRouterOutlet id="main">
                            <Route path="/" exact={true}>
                                <Redirect to="/page/lessons" />
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
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonReactRouter>
            </DataProvider>
        </IonApp>
    );
};

export default App;