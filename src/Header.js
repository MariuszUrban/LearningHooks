import React, { useContext } from "react";
import { ThemeContext } from "./context";

export default function Header({ text }) {
  const { primaryColor } = useContext(ThemeContext);

  return <h1 style={{ color: primaryColor }}>{text}</h1>;
}
