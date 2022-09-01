import Header from './components/header';
import Place from './components/place';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header label='Velofy' >
                </Header>
            </header>
            <Place 
                name='Notre-Dame Basilica'
                imageLink='#'
                description=''
                city='Montreal'
                country='Canada'
            />
        </div>
    );
}

export default App;
