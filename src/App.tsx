import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ArticlesFetch from "./components/ArticlesFetch";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <ArticlesFetch />
    </Container>
  );
}

export default App;
