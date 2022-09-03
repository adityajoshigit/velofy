const ColumnConfig = (
    { availableOptions, numberOfColumns, onOptionChange}
) => {
    return (
        <div className="column-config-container">
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