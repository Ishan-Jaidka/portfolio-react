import React from "react";
import HeadShot from "../components/headShot";
import MyName from "../components/myName";

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <MyName name="Ishan Jaidka" />
        <HeadShot />
      </header>
    </div>
  );
}
