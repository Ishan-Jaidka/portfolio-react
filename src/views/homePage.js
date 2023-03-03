import React from "react";
import MyName from "../components/myName";

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <MyName name="Ishan Jaidka" title="Software Engineer" />
      </header>
    </div>
  );
}
