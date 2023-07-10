import { Home } from "./screens/Home";
import { AssetsProvider } from "./contexts/assetsContext";

function App() {
  return (
    <AssetsProvider>
      <Home />
    </AssetsProvider>
  );
}

export default App;
