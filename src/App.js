import "./App.css";
import { Free } from "./Free";
import { Plus } from "./Plus";
import { Pro } from "./Pro";

function App() {
  return (
    <div className="App">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            <Free />
            <Plus />
            <Pro />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
