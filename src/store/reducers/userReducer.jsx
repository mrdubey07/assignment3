import { AddStatsToRedux, AddUserToRedux } from "../actions/ActionConstants";


const defaultState = {
    users:[],
    stats:[]
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case AddUserToRedux:
            return {
                ...state,
                users: action.payload
            }

        case AddStatsToRedux:
            return {
                ...state,
                stats: action.payload
            }

        default: 
            return state;
    }
}

export default userReducer;