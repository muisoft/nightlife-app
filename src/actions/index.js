import * as ActionType from './ActionType';

export const isSuccess = (payload) => {
    return {
        type: ActionType.ON_SUCCESS,
        payload
    }
}
export const isSignin = (user) => ({
    type: ActionType.ON_SIGN_IN,
    user
})
export const resetPrevSearch = () => {
    return {
        type: ActionType.RESET_SEARCH
    }
}
export const isSaved = (payload) => {
    return {
        type: ActionType.IS_SAVED,
        payload
    }
}
export const openDrawer = () => {
    return {
        type: ActionType.OPEN_DRAWER
    }
}
export const resetAll = () => {
    return {
        type: ActionType.SIGN_OUT,
    }
}

export const addNewGoing = (payload) => {
    return postData('/addgoing', payload, isSaved);
}

export const signin = (user) => {
    return postData('/signin', user, isSignin);
}
export const signout = () => {
    return getData('/signout', resetAll);
}

export const signup = (user) => {
    return postData('/signup', user, isSignin);
}

export const getFoods = () => {
    return getData('/allfoods', isSuccess);
}
export const searchLoc = (payload) => {
    return postData('/search', payload, isSuccess);
}
export const getData = (url, done) => {
    return (dispatch) => {
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'same-origin'
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(done(response));
            })
            .catch((err) => console.error(err));
    }
}
const postData = (url, payload, done) => {

    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res;
            })
            .then(res => res.json())
            .then(res => dispatch(done(res)))
            .catch((err) => console.error(err));
    }
}
