import Place from './place';
import TileColumn from './tileColumn';

const PlaceList = (
    {places, clsName}
) => {

    const columnsPerSize = {
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
    
    const getWindowSize = () => {
        let size = '';
        if(window) {
            const w = window.innerWidth;
            if(w < 400) size = 'xxs';
            else if(w >= 400 && w < 768) size = 'xs';
            else if(w >= 768 && w < 992) size = 'sm';
            else if(w >= 992 && w < 1200) size = 'md';
            else if(w > 1200) size = 'lg';
        }
        console.log(size);
        return size;
    };

    const getColumnWidthNumber = () => {
        return columnWidthPerSize[getWindowSize()];
    };

    const getCssClassNameForContainer = () => {
        // segregatePlaceLists();
        return ' place-list container-fluid py-2' + (clsName || '');
    };

    const segregatePlaceLists = () => {
        console.log(places);
        
        if (places) {
            let buckets = [];
            const numOfBuckets = columnsPerSize[getWindowSize()];
            for(let i=0;i<numOfBuckets;i++)
                buckets.push([]);
            console.log(buckets);
            places.forEach((place, index) => {
                buckets[index % numOfBuckets].push(place);
            });
            console.log(buckets);
            return buckets;
        }
        else
            return [];
    };

    return (
        <div className={getCssClassNameForContainer()}>
            <div className='row'>
                {
                    segregatePlaceLists().map((individualList, index) => {
                        return (
                            <div className={'col-' + getWindowSize() + '-' + getColumnWidthNumber()} key={'list-col-num'+index}>
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