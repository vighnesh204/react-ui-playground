import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Cards />
        <Form />
      </div>
    </div>
  );
};

export default App;
