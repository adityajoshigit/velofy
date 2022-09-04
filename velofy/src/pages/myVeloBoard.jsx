import PlaceList from './placeList';

const MyVeloBoard = ({
    places, 
    clsName, 
    defaultNumOfColumns,
    showConfigurator
}) => {
    return (
        <PlaceList
            places={places}
            defaultNumOfColumns={defaultNumOfColumns} 
            showConfigurator={showConfigurator} 
        />
    );
};

export default MyVeloBoard;