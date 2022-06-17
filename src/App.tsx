
import { Link } from "react-router-dom";
import { AppContent } from "./components/AppContent";
import { AppHeader } from "./components/AppHeader";

export function App() {
  return (
    <>
      <AppHeader></AppHeader>
      <AppContent></AppContent>
    </>
    /* <Link to="/expenses">Expenses</Link> */
  );
}
