import {
  displayInitialState,
  DisplayInitialStateType,
  displayReducer,
  setClassAC,
  setIsIncButtonDisabledAC, setIsResetButtonDisabledAC
} from "./display-reducer";

let startState: DisplayInitialStateType;

beforeEach(() => {
  startState = displayInitialState;
})

test('set class name',() => {
  const endState = displayReducer(startState, setClassAC('testClass'))
  expect(endState.valueClass).toBe('testClass')
})

test('set inc button status',() => {
  const endState = displayReducer(startState, setIsIncButtonDisabledAC(true))
  expect(endState.isIncButtonDisabled).toBe(true)
} )

test('set reset button status', () => {
  const endState = displayReducer(startState, setIsResetButtonDisabledAC(true))
  expect(endState.isResetButtonDisabled).toBe(true)
})
