import axios from 'axios'



const action = {
    type: 'apiCallBegan',
    payload: {
        url: '/bugs',
        method: 'get',
        data: {},
        onSuccess: 'bugsReceived',
        onError: 'apiRequestFail'
    }
}


const api = store => next => action =>
{
    if(action.type !== 'apiCallBegan') return next(action)

    const { url, } = action.payload






};

export default api;