import actionTypes from "./action-types";
import formatTime from "../../Utils/timeConvertor"

export const getWeatherSuccess = payload => ({
    type: actionTypes.GET_WEATHER_SUCCESS,
    payload
});

export const getWeatherStart = (cityName, widgetName) => ({
    type: actionTypes.GET_WEATHER_START,
    payload: {
        cityName: cityName,
        widgetName: widgetName
    }
});

export const getWeatherError = payload => ({
    type: actionTypes.GET_WEATHER_ERROR,
    payload
});

const API_KEY = "1c91b203f314b71c5b6175b4308d545c";

export const getWeather = ({ cityName, widgetName }) => {
    return dispatch => {
        dispatch(getWeatherStart(widgetName));
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        fetch(api_url)
            .then(response => response.json())
            .then(response => {
                dispatch(getWeatherSuccess({
                    widgetName: widgetName,
                    data: {
                        temp: response.main.temp,
                        city: response.name,
                        country: response.sys.country,
                        sunrise: formatTime(response.sys.sunrise),
                        sunset: formatTime(response.sys.sunset),
                        pressure: response.main.pressure
                    }
                }));
            })
            .catch(error => {
                console.log(error);
                dispatch(getWeatherError(error.message));
            });
    };
};
