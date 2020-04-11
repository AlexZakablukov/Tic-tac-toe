import React from "react";
import './Layout.css';

const Layout = ({children}) => (
  <main className="main">
    <div className="container">
      {children}
    </div>
  </main>
);

export default Layout