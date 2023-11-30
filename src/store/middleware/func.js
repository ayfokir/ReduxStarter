const func = ({dispatch, getState} )=> next => action =>
{
    if ( typeof action === "function" )
        action(dispatch, getState);
    else 
        next(action)//to the reducer if there is no another middleware
}

export default func;