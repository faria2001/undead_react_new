import * as React from "react";
import { ThemeProvider } from 'react-theme-provider';



export function Provider({ children, ...props }) {
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  );
}
