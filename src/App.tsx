import React from 'react';
import {Redirect, Route } from 'react-router-dom';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {Counter2} from "./components/Counter2/Counter2";
import {Counter21} from "./components/Counter21";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {setIsMessageAC, setMaxValueAC, setStartValueAC} from "./bll/counter-reducer";

function App() {
  const value = useSelector<AppStateType, number>(state => state.counter.value)
  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
  const isMessage = useSelector<AppStateType, boolean>(state => state.counter.isMessage);
  const isError = useSelector<AppStateType, boolean>(state => state.counter.isError);

  const dispatch = useDispatch()

  // изменение стартового значения в settings
  const startValueHandler = (newValue: number) => {
    dispatch(setIsMessageAC(true)) // показ месседжа вместо value
    dispatch(setStartValueAC(newValue))
  }

  // изменение максимального значения в settings
  const maxValueHandler = (newValue: number) => {
    dispatch(setIsMessageAC(true)) // показ месседжа вместо value
    dispatch(setMaxValueAC(newValue))
  }

  // обработчик для кнопки set в settings
  const setValuesHandler = () => {
    // TODO: тут возможно должна быть установка в localStorage
    dispatch(setIsMessageAC(false))
    dispatch(dispatch(setStartValueAC(startValue)))
  }

  return (
    <div className="App">
      <Navbar/>
      <Route path={'/'} exact render={() => <Redirect to="/counter2"/>}/>
      <Route path="/counter2" render={() => <Counter2
        startValue={startValue}
        maxValue={maxValue}
        value={value}
        isMessage={isMessage}
        isError={isError}
        startValueHandler={startValueHandler}
        maxValueHandler={maxValueHandler}
        setValuesByButton={setValuesHandler}
      />}
      />
      <Route path="/counter2.1" render={() => <Counter21
        startValue={startValue}
        maxValue={maxValue}
        value={value}
        isMessage={isMessage}
        isError={isError}
        startValueHandler={startValueHandler}
        maxValueHandler={maxValueHandler}
        setValuesByButton={setValuesHandler}
      />}
      />
    </div>
  );
}

export default App;
