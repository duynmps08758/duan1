import { getDataService } from '../services/DataServices'
import Actions from './Actions'

export const getDataRequest = () => {
    return {
        type: Actions.GET_DATA_REQUEST,
    }
}

export const getDataSuccess = (incomes, positions, healthinsurances) => {
    return {
        type: Actions.GET_DATA_SUCCESS,
        incomes,
        positions,
        healthinsurances
    }
}

export const getDataFailure = (error) => {
    return {
        type: Actions.GET_DATA_FAILURE,
        error
    }
}

export function getData(onSuccess) {
    //console.log('PARAMS LOGIN ===>', JSON.stringify(params))
    return (dispatch) => {
        // console.log('VAO LOGIN ===>')
        dispatch(getDataRequest())
        getDataService()
            .then((data) => {
                console.log('GET DATA SUCCESS ===>', JSON.stringify(data.data[0].incomes))
                dispatch(getDataSuccess(data.data[0].incomes, data.data[0].positions, data.data[0].healthinsurances))
              // onsuccess de khong bi pug app
                if (onSuccess) {
                    onSuccess()
                }
            })
            .catch((err) => {
                console.log('GET DATA FAILURE ===>', JSON.stringify(err))
                // dispatch(loginFailure(err))
            })
    }
}