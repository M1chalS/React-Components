import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
    return (<div>
        <div> <Button> <GoBell /> Click me!</Button> </div>
        <div> <Button primary rounded className={"mb-4"}> Buy now!</Button> </div>
        <div> <Button secondary> <GoCloudDownload /> See Deal!</Button> </div>
        <div> <Button success outline>Hide Ads</Button> </div>
        <div> <Button warning rounded outline> <GoDatabase /> Something</Button> </div>
        <div> <Button danger>Danger⚠️</Button> </div>
    </div>);
}

export default App;