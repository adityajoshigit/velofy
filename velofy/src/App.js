import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import MyVeloBoard from './pages/myVeloBoard';
import Explore from './pages/explore';
import MyExperiences from './pages/myExperiences';

const App = (props) => {
    const [places, setPlaces] = useState(
        {
            placeDataList: [
                {
                    id: 1,
                    name: 'Notre-Dame Basilica', 
                    description: 'It is a basilica in the historic district of Old Montreal. The interior of the church is amongst the most dramatic in the world and regarded as a masterpiece of Gothic Revival architecture.', 
                    city: 'Montreal', 
                    country: 'Canada', 
                    imageLink: 'https://gotourismguides.com/montreal/wp-content/uploads/notre-dame-basilica-montreal-interior-main.jpg'
                },
                {
                    id: 2,
                    name: 'La Ronde', 
                    description: 'It is the largest amusement park in Quebec and second largest in Canada.', 
                    city: 'Montreal', 
                    country: 'Canada', 
                    imageLink: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/La_Ronde_Logo.svg/330px-La_Ronde_Logo.svg.png'
                },
                {
                    id: 3,
                    name: 'Saint Joseph\'s Oratory', 
                    description: 'It is a National Historic Site of Canada and is Canada\'s largest church, with one of the largest church domes in the world.', 
                    city: 'Montreal', 
                    country: 'Canada', 
                    imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Oratoire_Saint-Joseph_du_Mont-Royal_-_Montreal.jpg/330px-Oratoire_Saint-Joseph_du_Mont-Royal_-_Montreal.jpg'
                },
                {
                    id: 4,
                    name: 'Old Port', 
                    description: 'Old city of Montreal', 
                    city: 'Montreal', 
                    country: 'Canada', 
                    imageLink: 'https://images.unsplash.com/photo-1609278406593-363130c99995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwbW9udHJlYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 5,
                    name: 'Mount Royale', 
                    description: 'Inaugurated in 1876, Mount Royal Park was designed by Frederick Law Olmsted of Central Park fame.', 
                    city: 'Montreal', 
                    country: 'Canada', 
                    imageLink: 'http://site.ieee.org/pimrc-2017/files/2017/05/mount-royal-park-gomontrealtourism.com_.jpg'
                },
                {
                    id: 6,
                    name: 'Montreal Museum of Fine Arts', 
                    description: 'A bold, innovative and caring museum that is welcoming to all disciplines such as the visual arts, history and science.', 
                    city: 'Montreal', 
                    country: 'Canada', 
                    imageLink: 'https://i.smartify.org/Hv9Pyy4f7h0lWiaDiWFhgy0El8dnxE6BoV68maAVOkk/fit/1200/1200/sm/0/aHR0cHM6Ly9zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zbWFydGlmeS1tZWRpYS92ZW51ZS1pbWFnZS9NQkFNL21lZGlhX1gxZzN3d0hPbm1Uc21YRWZvbzVlOWEuanBnP3U9MjAyMTA3MjgtMDkyNzMx.jpg'
                },
            ]
        }
    );

    return (
        <div className="App container-fluid">
            <div className="row">
                <div className='col-3 header-name-panel'>
                    <Header label='Velofy' clsName='common-page-padding row '>
                    </Header>            
                </div>
                <div className="col-6 nav-bar-panel">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Link className='btn btn btn-outline-primary' to='/explore'>
                            Explore
                        </Link>
                        <Link className='btn btn btn-outline-primary' to='/my-veloboard'>
                            My VeloBoard
                        </Link>
                        <Link className='btn btn btn-outline-primary' to='/my-experiences'>
                            My Experiences
                        </Link>
                    </div>
                </div>
                <div className="col-3 header-buttons-panel">
                    <button className="btn btn btn-outline-primary login-button">
                        Logout
                    </button>
                </div>
            </div>
            <div className='row'>
                
                    <Routes>
                        <Route exact path='/my-veloboard' element={
                            <MyVeloBoard 
                                defaultNumOfColumns={4} 
                                places={places.placeDataList}
                                showConfigurator={true}
                            />
                        } />
                        <Route exact path='/my-experiences' element={
                            <MyExperiences />
                        } />
                        <Route exact path='/explore' element={
                            <Explore />
                        } />
                        <Route exact path='/' element={
                            <Explore />
                        } />
                    </Routes>
                
            </div>
        </div>
    );
};

export default App;
