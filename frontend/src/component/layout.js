import React from "react";
import Header from "./header";

function Layout(props) {
  console.log(props);
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
