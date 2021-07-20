export const initialState = {
  value: 0,
  startValue: 0,
  maxValue: 5,
  isMessage: false,
  isError: false
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE": {
      return {...state, value: state.value + 1 }
    }
    case "RESET-VALUE": {
      return {...state, value: state.startValue}
    }
    case "SET-START-VALUE": {
      return {...state, startValue: action.startValue}
    }
    case "SET-MAX-VALUE": {
      return {...state, maxValue: action.maxValue}
    }
    case "SET-IS-MESSAGE": {
      return {...state, isMessage: action.isMessage}
    }
    case "SET-IS-ERROR": {
      return {...state, isError: action.isError}
    }
    default:
      return state
  }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setStartValueAC = (newValue: number) => ({type: 'SET-START-VALUE', startValue: newValue} as const)
export const setMaxValueAC = (newValue: number) => ({type: 'SET-MAX-VALUE', maxValue: newValue} as const)
export const setIsMessageAC = (newValue: boolean) => ({type: 'SET-IS-MESSAGE', isMessage: newValue} as const)
export const setIsErrorAC = (newValue: boolean) => ({type: 'SET-IS-ERROR', isError: newValue} as const)

type IncValuesActionType = ReturnType<typeof incValueAC>
type ResetValueAT = ReturnType<typeof resetValueAC>
type setStartValueAT = ReturnType<typeof setStartValueAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setIsMessageAT = ReturnType<typeof setIsMessageAC>
type setIsErrorAT = ReturnType<typeof setIsErrorAC>

type ActionType = IncValuesActionType | ResetValueAT | setStartValueAT | setMaxValueAT | setIsMessageAT | setIsErrorAT