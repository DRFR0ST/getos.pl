import React from 'react';
import { Switch, Route } from "react-router-dom";

import { HomePage } from "pages"

function Routes() {
  

  return (
    <Switch>
        <Route path="/" exact component={HomePage} />
    </Switch>
  );
}

export default Routes;
