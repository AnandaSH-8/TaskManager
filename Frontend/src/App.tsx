import { Container } from "@mui/material";
import "./App.css";
import { Nav } from "./components/AppBar";
import { TaskManager } from "./components/TaskManager";

function App() {
  return (
    <div>
      <Nav />
      <Container>
        <TaskManager />
      </Container>
    </div>
  );
}

export default App;
