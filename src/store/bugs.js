import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
const bugUpdated = createAction("bugUpdated" )
console.log(bugUpdated({id: 1} ))
console.log( bugUpdated.toString() )



// Action Types

//  const BUG_ADDED = "bugAdded";
//  const BUG_REMOVED = " bugRemoved";
//  const BUG_RESOLVED = "bugResolved";

//Action Creators

// export function bugAdded(description) {
//   return {
//     type: BUG_ADDED,
//     payload: {
//       description
//     }
//   };
// }
let lastId = 0;
 const slice =  createSlice( {
  //here takes configuration object
  name: 'bugs',
  initialState: [],
  reducers: {
    //here reducers maps actions to action handlers. below bugAdded is action type
    bugAssignedToUser: ( bugs, action ) =>
    {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex( bug => bug.id === bugId );
      bugs[ index ].userId = userId;
  },


    bugAdded: ( bugs, action ) =>
    {
       bugs.push({
         id: ++lastId,
         description: action.payload.description,
         resolved: false
       });
    },
    bugResolved: ( bugs, action ) =>
    {
       {
         const index = bugs.findIndex((bug) => bug.id === action.payload.id);
         bugs[index].resolved = true;
       }
    }
  }
 } )

 console.log(slice )

// export const bugAdded = createAction("bugAdded")
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved")


export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer; 


// selector
// export const getUnresolvedBugs = (state) => {
//  return state.entities.bugs.filter((bug) => !bug.resolved);
// };

 export const getUnresolvedBugs =  createSelector(
   state => state.entities.bugs,
   state => state.entities.projects,
   ( bugs, projects ) => bugs.filter( bug => !bug.resolved ) )
  
export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
)

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id
//   }
// });

//Reducer

// let lastId = 0;

//  export default createReducer( [], {
//   //the key is action and the value is handel action
//   // bugAdded: ( state, action ) => // here bugs is state 
//   // { 
//   //   bugs.push({
//   //     id: ++lastId,
//   //     description: action.payload.description,
//   //     resolved: false
//   //   } );
//   //   //under the hood redux toolkit uses immer(initial value lay lela add yadergal )
//   // },
  
  
  
//   //see below it is similar to the above
//   [bugAdded.type]: ( bugs, action ) => // here bugs is state 
//   { 
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false
//     } );
//     //under the hood redux toolkit uses immer(initial value lay lela add yadergal )
//   },
//   bugResolved: ( bugs, action ) => // the name of bugResolved is similar to
//   //the above bugResolved.type
//   {
//     const index = bugs.findIndex( bug => bug.id === action.payload.id )
//     bugs[ index ].resolved = true;
//   }
// })
//initially the state is null array madereg alebeh redux undefined return madereg aychilm







// export default function reducer ( state = [], action )
// {
//     console.log(lastId);
//     if (action.type == bugAdded.type) {
//     return [
//         ...state,
//         {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false
//         }
//     ];
//     } else if (action.type == bugRemoved.type) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//     } else if (action.type == bugResolved.type) {
//     return state.map((bug) =>  bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//     );
//     }
//   return state; // if you mistak(if you dispatche action not the above one )
// }

