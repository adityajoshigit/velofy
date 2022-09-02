import Header from './components/header';
import PlaceList from './components/placeList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header label='Velofy' >
                </Header>
            </header>
            <PlaceList places={[{name: 'Old Port', description: 'Old city of Montreal', city: 'Montreal', country: 'Canada', imageLink: '#'}]} />
        </div>
    );
}

export default App;
