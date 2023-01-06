import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import ListSelectPage from "./pages/ListSelectPage";

function App() {

    return (<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar />
        <div className="col-span-5">
            <Route path="/table">
                <TablePage />
            </Route>
            <Route path="/list-select">
                <ListSelectPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/modal">
                <ModalPage />
            </Route>
            <Route path="/counter">
                <CounterPage initialCount={10}/>
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
        </div>
    </div>);
}

export default App;