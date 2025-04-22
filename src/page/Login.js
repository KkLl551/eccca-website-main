import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from "../db/config";
import "./Admin.css";
import UploadForm from "../UploadForm";
import { useIdleTimer } from 'react-idle-timer';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => alert(error.message));
  }

  const onPrompt = () => {
    //console.log("onprompt");
    // Fire a Modal Prompt
  }

  const onIdle = () => {
    //console.log("onidle");
    if(user){
      auth.signOut();
    }
    // Close Modal Prompt
    // Do some idle action like log out your user
  }

  const onActive = (event) => {
    //console.log("active");
    // Close Modal Prompt
    // Do some active action
  }

  const onAction = (event) => {
    //console.log("action");
    // Do something when a user triggers a watched event
  }

  const {
    start,
    reset,
    pause,
    resume,
    isIdle,
    isPrompted,
    getRemainingTime,
    getElapsedTime,
    getLastIdleTime,
    getLastActiveTime,
    getTotalIdleTime,
    getTotalActiveTime
  } = useIdleTimer({
    onPrompt,
    onIdle,
    onActive,
    onAction,
    timeout: 1000 * 60 * 5,
    promptTimeout: 0,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove',
      'visibilitychange'
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    element: document,
    startOnMount: true,
    startManually: false,
    stopOnIdle: false,
    crossTab: false,
    syncTimers: 0
  })

  return (
    <div className="signin-container">
      {user ? (
        <div className="userpage">
          <UploadForm />
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </div>
      ) : (
        <div className="loginpage">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Control
                    type="email"
                    placeholder="username"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button className="w-100" type="submit">
                  LOG IN
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Login;
