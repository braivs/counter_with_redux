import React from 'react';
import {Redirect, Route } from 'react-router-dom';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {Counter2} from "./components/Counter2/Counter2";
import {Counter21} from "./components/Counter21";

const startValue = 0;
const maxValue = 5;
const value = 0;
const isMessage = false;
const isError = false;
const startValueHandler = () => {
  alert('startValueHandler')
}
const maxValueHandler = () => {
  alert('maxValueHandler')
}
const setValuesHandler = () => {
  alert('setValuesHandler')
}

function App() {
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
