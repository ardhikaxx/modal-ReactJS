import React, { useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleModal}>Show Modal</button>

        <CSSTransition
          in={showModal}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <div className="modal-overlay">
            <div className="modal">
              <h2>Modal Title</h2>
              <p>This is the modal content.</p>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        </CSSTransition>
      </header>
    </div>
  );
}

export default App;