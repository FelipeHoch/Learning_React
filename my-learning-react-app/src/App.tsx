import { useState } from "react";
import MaterialButton from "./components/Buttons/MaterialButton";


export default function App() {
    const [disabled, setDisabled] = useState(true);

    // Use setDisabled para mudar o valor de disabled ao longo do tempo
    // Por exemplo, você pode mudar o valor de disabled para true depois de 5 segundos
    setTimeout(() => setDisabled(false), 5000);

    return (
        <div>
            <MaterialButton label="Teste Label" disabled={disabled}/>
        </div>
    );
}