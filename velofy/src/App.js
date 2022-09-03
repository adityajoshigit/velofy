import { useState } from 'react';
import Header from './components/header';
import PlaceList from './components/placeList';
import './App.css';

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
            ]
        }
    );


    return (
        <div className="App container-fluid">
            <Header label='Velofy' clsName='common-page-padding row '>
            </Header>            
            <PlaceList
                places={places.placeDataList}
                defaultNumOfColumns={3} />
        </div>
    );
};

export default App;
