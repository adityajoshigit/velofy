import { useState } from 'react';
import ColumnConfig from './columnConfig';
import TileColumn from './tileColumn';

const PlaceList = (
    {places, clsName, defaultNumOfColumns}
) => {

    const bucketsPerSize = {
        'xxs': 1,
        'xs': 2,
        'sm': 3,
        'md': 3,
        'lg': 3,
        'xl': 4,
        ''  : 1
    };
    
    const columnWidthPerSize = {
        'xxs': 12,
        'xs': 6,
        'sm': 4,
        'md': 4,
        'lg': 4,
        'xl': 3,
        ''  : 12
    };

    const [windowSize] = useState(
        ((window.innerWidth < 400) && 'xxs' ) 
        || ((window.innerWidth >= 400 && window.innerWidth < 768) && 'xs')
        || ((window.innerWidth >= 768 && window.innerWidth < 992) && 'sm')
        || ((window.innerWidth >= 992 && window.innerWidth < 1200) && 'md')
        || ((window.innerWidth >= 1200) && 'lg')
        || ''
    );
    const [numberOfColumns, setNumberOfColumns] = useState(defaultNumOfColumns || bucketsPerSize[windowSize]);
    const [columnClsName, setColumnClsName] = useState(
        defaultNumOfColumns ? 'col' : ('col-' + windowSize + '-' + columnWidthPerSize[windowSize])
    );

    const getCssClassNameForContainer = () => {
        return ' place-list container-fluid py-2' + (clsName || '');
    };

    const segregatePlaceLists = () => {
        console.log(places);
        
        if (places) {
            let buckets = [];
            for(let i=0;i<numberOfColumns;i++)
                buckets.push([]);
            places.forEach((place, index) => {
                buckets[index % numberOfColumns].push(place);
            });
            console.log(buckets);
            return buckets;
        }
        else
            return [];
    };

    const handleOptionChange = (selectedValue) => {
        console.log('selection changed to = ', selectedValue);
        setNumberOfColumns(selectedValue);
    };

    return (
        <div className={getCssClassNameForContainer()}>
            <ColumnConfig 
                numberOfColumns={numberOfColumns} 
                availableOptions={[1,2,3,4,5]} 
                onOptionChange={handleOptionChange} />
            <div className='row'>
                {
                    segregatePlaceLists().map((individualList, index) => {
                        return (
                            <div className={columnClsName} key={'list-col-num'+index}>
                                <TileColumn itemsList={individualList} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
 
export default PlaceList;