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
const models = require.context("./models", true, /^\.\/.*\.js$/);
models.keys().forEach(key => {
  app.model(models(key).default);
});
// app.model(require("./models/dbsy.js").default);
// app.model(require("./models/login.js").default);
// app.model(require("./models/submission.js").default);
// app.model(require("./models/ts.js").default);
// app.model(require("./models/oldBuilding.js").default);
// app.model(require("./models/jy.js").default);
// app.model(require("./models/usualcall.js").default);
// app.model(require("./models/anouce.js").default);
// app.model(require("./models/xqxx.js").default);
// app.model(require("./models/ywhxx.js").default);
// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
