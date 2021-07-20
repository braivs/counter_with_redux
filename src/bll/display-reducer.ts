export const displayInitialState = {
  valueClass: '',
  isIncButtonDisabled: false,
  isResetButtonDisabled: false
}

export type DisplayInitialStateType = typeof displayInitialState

export const displayReducer = (state: DisplayInitialStateType = displayInitialState, action: ActionType): DisplayInitialStateType => {
  switch (action.type) {
    case "SET-CLASS": {
      return {...state, valueClass: action.valueClass}
    }
    case "SET-IS-INC-BUTTON-DISABLED": {
      return {...state, isIncButtonDisabled: action.isIncButtonDisabled}
    }
    case "SET-IS-RESET-BUTTON-DISABLED": {
      return {...state, isResetButtonDisabled: action.isResetButtonDisabled}
    }
    default:
      return state
  }
}

export const setClassAC = (newClass: string) => ({type: 'SET-CLASS', valueClass: newClass} as const)
export const setIsIncButtonDisabledAC = (newValue: boolean) => ({type: 'SET-IS-INC-BUTTON-DISABLED', isIncButtonDisabled: newValue} as const)
export const setIsResetButtonDisabledAC = (newValue: boolean) => ({type: 'SET-IS-RESET-BUTTON-DISABLED', isResetButtonDisabled: newValue} as const)

type SetClassAT = ReturnType<typeof setClassAC>
type SetIsIncButtonDisabledAT = ReturnType<typeof setIsIncButtonDisabledAC>
type SetIsResetButtonDisabledAT = ReturnType<typeof setIsResetButtonDisabledAC>

type ActionType = SetClassAT | SetIsIncButtonDisabledAT | SetIsResetButtonDisabledAT