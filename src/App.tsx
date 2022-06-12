import { Component, Index } from "solid-js";

const HOURS_IN_DAY = Array.from({ length: 24 }, (_, i) => i);

const App: Component = () => {
  return (
    <div class="p-4">
      <div class="flex justify-between">
        <Index each={HOURS_IN_DAY}>{(hour) => <div>{hour()}</div>}</Index>
      </div>
    </div>
  );
};

export default App;
