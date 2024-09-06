import { useState } from "react";
import Alert from "./components/alert";
import Buttons from "./components/buttons";

function App() {
	const [showAlert, setShowAlert] = useState(false);

	const showAlertPopUp = () => {
		setShowAlert((prevShowAlert) => !prevShowAlert);
		console.log(showAlert);
	};

	const hideAlertPopUp = () => {
		setShowAlert(false);
	};

	return (
		<div>
			{showAlert && <Alert onClick={hideAlertPopUp} />}
			<Buttons type="success" onClick={showAlertPopUp} />
		</div>
	);
}

export default App;
