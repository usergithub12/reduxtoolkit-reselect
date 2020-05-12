import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();
store.subscribe(() => {
  console.log("Store changed!");
});
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// //store.dispatch(action.bugResolved({ id: 1 }));
// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
// console.log(x === y);

store.dispatch((dispatch, getState) => {
  //call an API
  //when promise is resolved=>dispatch()
  //if promise is rejected =>error
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  console.log(getState());
});

store.dispatch({
  type: "error",
  payload: { message: "An error occured." },
});
