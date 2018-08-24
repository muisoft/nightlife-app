import { push } from 'react-router-redux';
import {
    signin, signup, signout, getFoods, addNewGoing, resetPrevSearch, searchLoc, resetAll, openDrawer
} from '../../../../actions';

export const mapStateToProps = ({ food }) => {
    return {
        partialState: food.partialState,
        user: food.user,
        foods: food.foods,
        success: food.success,
        visible: food.visible,
        isSearch: food.isSearch
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => {
            dispatch(signup(user))
        },
        signin: (user) => {
            dispatch(signin(user))
        },
        getFoods: () => {
            dispatch(getFoods())
        },
        resetPrevSearch: () => {
            dispatch(resetPrevSearch())
        },
        signout: () => {
            dispatch(signout())
        },
        gotoAllBars: () => {
            dispatch(push('/allbars'))
        },
        addNewGoing: (payload) => {
            dispatch(addNewGoing(payload))
        },
        gotoHome: () => {
            dispatch(push('/'))
        },
        gotoLogin: () => {
            dispatch(push('/account/login'))
        },
        resetAll: () => {
            dispatch(resetAll())
        },
        openDrawer: () => {
            dispatch(openDrawer())
        },
        searchLoc: (location) => {
            dispatch(searchLoc(location))
        }
    }
}