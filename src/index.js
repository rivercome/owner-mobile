import dva from "dva";
import "./index.css";
import createLoading from "dva-loading";
import createHistory from "history/createBrowserHistory";

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true
  }),
  history: createHistory(),
  onError(error, dispatch) {
    console.log(error);
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/dbsy.js").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
