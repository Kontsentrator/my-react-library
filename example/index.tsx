import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

import '../src/assets/styles/styles.scss';

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
