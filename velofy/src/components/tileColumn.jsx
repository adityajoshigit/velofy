import Place  from "./place";

const TileColumn = (
    {
        itemsList, showImage, showDescription, showAll
    }
) => {
    const cardStyle = {
        width: '100%', 
        maxWidth: 'fit-content',
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '0.25rem',
    };
    const showPlaces = () => {
        // console.log(itemsList);
        if (itemsList) {
            return itemsList.map((item, index) => {
                // console.log(item);
                return (
                    <Place 
                        key={item.name+index} 
                        placeDetails={item} 
                        cardStyle={cardStyle}
                        showImage={showImage}
                        showDescription={showDescription}
                        showAll={showAll}
                    /> 
                );
            });
        }
    };

    return (
        <>
            {
                showPlaces()
            }
        </>
    );
};

export default TileColumn;