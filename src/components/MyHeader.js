import React from "react";
import { MyNav } from "./MyNav";

export const MyHeader = () => {
  return (
    <>
      <header className="main-header">
        <MyNav />
        <h1 className="band-name band-name-large">Orla Gartland</h1>
        <div className="container">
          <button className="btn btn-header" type="button">
            Get Our Latest Album
          </button>
        </div>
        <button
          className="btn btn-header btn-play"
          type="button"
          dangerouslySetInnerHTML={{ __html: `&#9658` }}
        />
      </header>
    </>
  );
};
