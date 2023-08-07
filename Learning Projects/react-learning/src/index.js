import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SimpleReducer from './ExtractingStateLogicIntoAReducer_ManagingState/SimpleReducer';
// import ChatMessenger from './ExtractingStateLogicIntoAReducer_ManagingState/ChatMessengerWIthUsingreducer/ChatMessanger';
// import TodoListUsingReducer from './ExtractingStateLogicIntoAReducer_ManagingState/TaskListUsingReducer';
// import TodoList from './ExtractingStateLogicIntoAReducer_ManagingState/TaskList';
// import PreservingState from './PreservingAndResettingState_ManagingState/PreservingState';
// import Accordion from './SharingStateBetweenComponents/Accordion';
// import MailClient from './ManagingState-Intermediate/FixthedisappearingselectionChallange';
// import TravelPlan from './ManagingState-Intermediate/AvoidDeeplyNestesState';
// import Menu from './ManagingState-Intermediate/DuplicationInSTates';
// import Feedback from './ManagingState-Intermediate/PretendingNetworkCall';
// import TransformArray from './UpdatingStateInArrays/TranformArray';
// import ReplaceArray from './UpdatingStateInArrays/ReplaceArray';
// import InsertInToArray from './UpdatingStateInArrays/InsertInToArray';
// import BucketList from './UpdatingStateInArrays/UpdatingObjectsInsideArray';
// import CityQuiz from './ManagingState-Intermediate/ReactingToInputWithState';
// import PointerMove from './ManagingState-Intermediate/ChoosingStateStructure';

// import { legacy_createStore as createStore} from 'redux'
// import { Provider } from 'react-redux';
// import rootReducer from './reducer';
// import Counter from './ReduxComponent/Counter';

// const store = createStore(rootReducer);


// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Gallery from './ImportAndExport/Gallery';
// import Parent from './PaasingProps/ParentComponent';
// import Profile from './PaasingProps/Profile';
// import PassingJSX from './PaasingProps/PassingJSX';
// import PeopleList from './RenderingLists/PeopleList';
// import {EventHandlers, Toolbar, PassingEventhandlersAsProps, EventPropagation} from './AddingInteractivity/EventHandlers';
// import SculptureGallery from './AddingInteractivity/ComponentWithState';
// import Counter from './QueuingStateUpdates/Counter';
// import Pointer from './UpdatingObjectsInState/PointerMove';
// import SpreadSyntax from './UpdatingObjectsInState/SpreadSyntax';
// import ImmerComponent from './UpdatingObjectsInState/Immer';
// import ArrayStateComponent from './UpdatingStateInArrays/ArrayStateComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Provider store={store}>
      <Counter />
    </Provider>, */}

    {/* <App />
    <Gallery /> */}

    {/* <Parent /> */}
    {/* <Profile /> */}
    {/* <PassingJSX /> */}
    {/* <PeopleList /> */}
    {/* <EventHandlers /> */}
    {/* <Toolbar /> */}
    {/* <PassingEventhandlersAsProps /> */}
    {/* <SculptureGallery />
    <SculptureGallery /> */}

    {/* <Counter /> */}
    {/* <Pointer /> */}
    {/* <SpreadSyntax /> */}
    {/* <ImmerComponent /> */}
    {/* <ArrayStateComponent /> */}
    {/* <TransformArray /> */}
    {/* <ReplaceArray /> */}
    {/* <InsertInToArray children={'Inspiring sculptors'}/> */}
    {/* <BucketList heading={'Art Bucket List'} subHeading={'list of art to see:'}/> */}

    {/* INTERMEDIATE REACT MANGING STATE */}
    {/* <CityQuiz children={'City Quiz'} /> */}
    {/* <PointerMove /> */}
    {/* <Feedback children={'Venizia'}/> */}
    {/* <Menu /> */}
    {/* <TravelPlan /> */}
    {/* <MailClient /> */}
    {/* <Accordion /> */}
    {/* <PreservingState /> */}
    {/* <TodoList /> */}
    {/* <TodoListUsingReducer /> */}
    {/* <ChatMessenger /> */}
    <SimpleReducer />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
