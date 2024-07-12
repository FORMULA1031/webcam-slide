import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "./firebase";
import { ref, set, onValue } from "firebase/database";
import LogInButton from "./tools/LogInButton";
import SlideTitle from "./slides/SlideTitle";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";

const Slides = [SlideTitle, Slide1, Slide2, Slide3];

function App() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const dbRef = ref(database, `slide/page`);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setPage(data);
      }
    });
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    navigate(page.toString());
    if (user !== null) {
      set(dbRef, page);
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <Container
      fluid
      id="topLevel"
      tabIndex={-1}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowRight":
            setPage((page) => Math.min(page + 1, Slides.length - 1));
            break;
          case "ArrowLeft":
            setPage((page) => Math.max(page - 1, 0));
            break;
          case "Home":
            setPage(0);
            break;
          case "End":
            setPage(Slides.length - 1);
            break;
          default:
            break;
        }
      }}
    >
      <Routes>
        {Slides.map((Slide, index) => (
          <Route key={`slide-${index}`} path={`${index}`} element={<Slide />} />
        ))}
        <Route path="*" element={<Navigate replace to="0" />} />
      </Routes>
      <LogInButton auth={auth} user={user} />
    </Container>
  );
}

export default App;
