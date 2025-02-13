import Header from "./components/Header";
import Container from "./components/Container";

const page = [
  <Container key="container" />,
  
];

function App() {
  return (
    <div className="app">
      <Header />
      {page.map((component) => component)}
    </div>
  );
}

export default App;