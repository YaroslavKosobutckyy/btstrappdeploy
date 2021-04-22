import actionTypes from '../actions/action-types';

const initialState = {
    data: {
        widget1: {},
        widget2: {},
        widget3: {}
    },
    loading: false,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_SUCCESS:
            return {
                loading: false,
                error: '',
                data: {
                    ...state.data,
                    [action.payload.widgetName]: action.payload.data
                }
            };
        case actionTypes.GET_WEATHER_START:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case actionTypes.GET_WEATHER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
