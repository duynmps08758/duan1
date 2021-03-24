import Actions from '../actions/Actions'

const initialState = {
    incomes: [],
    positions: [],
    healthinsurances: [],
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_DATA_REQUEST: {
            return { ...state, incomes: [] }
        }
        case Actions.GET_DATA_SUCCESS: {
            // console.log('----> incomes:', JSON.stringify(action.incomes))
            return {
                ...state, incomes: action.incomes,
                positions: action.positions,
                healthinsurances: action.healthinsurances
                
            }
        }
        case Actions.GET_DATA_FAILURE: {
            return { ...state }
        }

        default:
            return state
    }
}

export default dataReducer