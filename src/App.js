import React from "react";

import "./styles.css";
import { MyHeader } from "./components/MyHeader";
import { Events } from "./components/Events";
import { MyFooter } from "./components/MyFooter";
export default function App() {
  return (
    <>
      <MyHeader />
      <Events />
      <MyFooter />
    </>
  );
}
