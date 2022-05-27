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
				<div className="row my-4 d-flex flex-column flex-md-row m-auto">
					{cards}
				</div>
			</div>
		</div >
	);
}

export default App;
