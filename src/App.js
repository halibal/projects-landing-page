import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import projectData from './data';

function App() {
	const cards = projectData.map((data) => {
		return <Card
			key={data.id}
			{...data}
		/>
	});

	return (
		<div className="App">
			<div className="container">
				<Header />
				<hr className="bg-dark" />
				<div className="d-flex flex-wrap flex-column align-items-center flex-md-row justify-content-center m-auto">
					{cards}
				</div>
			</div>
		</div >
	);
}

export default App;
