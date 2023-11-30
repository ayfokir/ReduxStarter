import logo from "./logo.svg";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import configureStore from "./store/configureStore";
// import * as actions from "./store/bugs";
import { bugAdded,bugResolved,getUnresolvedBugs, getBugsByUser, bugAssignedToUser } from "./store/bugs";
import { userAdded } from "./store/users";
import { projectAdded } from "./store/projects";
import reducer from "./store/reducer";
import logger from "./store/middleware/logger";
function App() {
  const store = configureStore();
  console.log(store);
  console.log(store.getState());
  store.subscribe(() => {
    console.log("store changed");
  });

  store.dispatch( (dispatch, getState) =>
  {
    //  store.dispatch( { type: 'bugsReceived', bugs: [ 1, 2, 3 ] } )
    dispatch( { type: 'bugsReceived', bugs: [ 1, 2, 3 ] } )
    console.log(getState())
})

  store.dispatch( {
    type: "error",
    payload: { message: "An Error Occurred" }
  })
  
  
  //see below how to use middleware without reduxtoolkit
  // const store = createStore(reducer, applyMiddleware(logger))  //applyMiddleware(logger)) is  a function used to  enhance store 

  store.dispatch(userAdded({ name: "user 1" }));
  // store.dispatch(userAdded({name: "user 2"}))
  // store.dispatch(projectAdded({name: "project 1"}))
  // store.dispatch(bugAdded( {description:  "Bug 1"}));
  // store.dispatch(bugAdded( {description:  "Bug 2"}));
  // store.dispatch(bugAdded( {description:  "Bug 3"}));
  // store.dispatch(bugResolved( {id: 1} ) );
  // store.dispatch( bugResolved( { id: 3 } ) );
  // store.dispatch( bugAssignedToUser( { bugId: 1, userId: 1 } ) )

  const userBugs = getBugsByUser(1)(store.getState());

  console.log(userBugs);
  const unresolvedBugs = getUnresolvedBugs(store.getState());
  console.log(unresolvedBugs);
  console.log(store);
  // when dispatch  the store calls the reducer this means:
  //state = reducer( state, action ) then, notify the subscribers
  return (
    <div className="App">
      <h1>Hello Redux</h1>
    </div>
  );
}

export default App;


