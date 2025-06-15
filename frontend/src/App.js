import { Container } from "react-bootstrap";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to proshop</h1>
        </Container>
      </main>
    </div>
  );
}

export default App;
