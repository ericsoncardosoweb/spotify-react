import React from 'react';
import Sidebar from '../components/sidebar.jsx'

const App = (props) => {
    return (
      <div id="main">
        <Sidebar />
        <main id="main-content">
          {props.children}
        </main>
      </div>
    );
};

export default App;