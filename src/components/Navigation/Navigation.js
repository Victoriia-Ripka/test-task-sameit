import React from "react";
import { NavLink as ReactNav } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <button to="/ttn" component={ReactNav} >
        Перевірити ТТН
      </button>
      <button to="/departments" component={ReactNav} >
        Список відділень
      </button>
    </div>
  );
};

export default Navigation;
