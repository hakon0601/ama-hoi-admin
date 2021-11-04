import logo from './logo.svg';
import './App.css';
import NumberPicker from "react-widgets/NumberPicker";

function App() {
  return (
    <div className="App">
      <div style={{display: "flex", flex: 1, height: 100, backgroundColor: 'green', justifyContent: "space-between" }}>
        <div style={{display:"flex", margin: 10, marginLeft:20, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          Dagens Kontor Admin
        </div>
        <div style={{display:"flex", margin: 10, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          Knowit
        </div>
        <div style={{display:"flex", margin: 10, marginRight:20, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          Logg ut
        </div>
      </div>
      <div style={{display: "flex", flex: 1, height: 100, backgroundColor: 'gray', justifyContent: "space-between" }}>
        <div style={{display:"flex", margin: 10, marginLeft:20, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          Plasser bekreftet i bruk: 40
        </div>
        <div style={{display:"flex", margin: 10, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          Personer er på kontoret i følge radar: 46
        </div>
        <div style={{display:"flex", margin: 10, marginRight:20, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          Ledige plasser: 20-35
        </div>
      </div>
      <div style={{display: "flex", flex: 1, height: 100, backgroundColor: 'lightgray', justifyContent: "space-between" }}>
        <div style={{display: "flex", flexDirection: "row", margin: 10, marginLeft:20, alignItems:"center", fontSize: 20, fontWeight: "bold"}}>
          <div >Hvor mange plasser vil dere tilgjengeliggjøre for andre i dag: </div>
          <NumberPicker defaultValue={0} max={35}  step={1} style={{marginLeft: 20}} />
        </div>
        <div onClick={e => console.log("Clicked")} style={{cursor: "pointer", WebkitAppearance: "button", backgroundColor: "blue", padding: 20, paddingTop: 25, borderRadius: 10, margin: 10, marginRight:20, alignItems:"center", textAlign: "center", fontSize: 20, fontWeight: "bold"}}>
          Velg
        </div>
      </div>
    </div>
  );
}

export default App;
