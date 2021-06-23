import Dashboard from "./pages/Dashboard";
import DailyJournal from "./pages/DailyJournal";
import EditJournal from "./pages/EditJournal";
import "./sass/styles.scss";

function App() {
  return (
    <div className="dark_theme" id="app">
      {/* <Dashboard /> */}
      {/* <DailyJournal /> */}
      <EditJournal />
    </div>
  );
}
export default App;
