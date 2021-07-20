import {
  counterReducer,
  incValueAC,
  initialState,
  InitialStateType,
  resetValueAC, setIsErrorAC, setIsMessageAC, setMaxValueAC,
  setStartValueAC
} from "./counter-reducer";

let startState: InitialStateType;

beforeEach(() => {
  startState = initialState;
})

test('inc counter', () => {
  const endState = counterReducer(startState, incValueAC())
  expect(endState.value).toBe(1)
})

test('reset counter', () => {
  const endState = counterReducer(startState, resetValueAC())
  expect(endState.value).toBe(startState.startValue)
})

test('set start value', () => {
  const endState = counterReducer(startState, setStartValueAC(10))
  expect(endState.startValue).toBe(10)
})

test('set max value', () => {
  const endState = counterReducer(startState, setMaxValueAC(20))
  expect(endState.maxValue).toBe(20)
})

test('set isMessage value', () => {
  const endState = counterReducer(startState, setIsMessageAC(true))
  expect(endState.isMessage).toBe(true)
})

test('set isError value', () => {
  const endState = counterReducer(startState, setIsErrorAC(true))
  expect(endState.isError).toBe(true)
})