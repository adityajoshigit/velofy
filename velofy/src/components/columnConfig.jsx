const ColumnConfig = (
    { 
        availableOptions, 
        numberOfColumns,
        showImage, 
        showDescription,
        showAll,
        showAllDisabled,
        onOptionChange,
        onShowDescriptionChange,
        onShowImageChange,
        onShowAllChange
    }
) => {
    return (
        <div className="column-config-container" style={{display: 'inline-flex', maxWidth: 'fit-content'}}>
            <div className="form-check form-switch" >
                <input type="checkbox" 
                    className="form-check-input" 
                    id="descriptionShowInput" 
                    role="switch"
                    onChange={
                        (e) => onShowDescriptionChange(e.target.checked)
                    } 
                    checked={showDescription} />
                <label className="form-check-label" htmlFor="descriptionShowInput">Show Description</label>
            </div>
            <div className="form-check form-switch">
                <input 
                type="checkbox" 
                className="form-check-input" 
                id="imgShowInput"  
                role="switch"
                onChange={
                    (e) => onShowImageChange(e.target.checked)
                } 
                checked={showImage} />
                <label className="form-check-label" htmlFor="imgShowInput">Show Image</label>
            </div>
            <div className="form-check form-switch">
                <input 
                type="checkbox" 
                className="form-check-input" 
                id="showAllInput"  
                role="switch"
                onChange={
                    (e) => onShowAllChange(e.target.checked)
                } 
                checked={showAll}
                disabled={showAllDisabled} />
                <label className="form-check-label" htmlFor="showAllInput">Show Everything</label>
            </div>
            <select className="form-select form-select column-config-select-list"
                value={numberOfColumns}
                onChange={
                    (e) => onOptionChange(e.target.value)
                }
            >
            {
                availableOptions.map((op, index) => {
                    return <option key={'col-opt-'+op+index} value={op}>{op}</option> ;
                })
            }
            </select>
        </div>
    );
};

export default ColumnConfig;