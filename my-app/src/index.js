import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// named import: 括弧をつけることで、明示的に使用するコンポーネントを指定している。
// default import: 括弧をつけない場合は、default export されたコンポーネントを自由な命名で使用できる。

// defaultだとコンポーネント名を自由に決めれてしまうので、ややこしいため基本的にはnamed importで良さそう。
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
