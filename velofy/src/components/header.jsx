const Header = (
    {label, clsName}
) => {
    return (
        <header className={' container-fluid app-header ' + clsName}>
            <div className='header-cmp-div'>
                <span className='fs-2'>
                    {label}
                </span>
            </div>
        </header>
    );
};
 
export default Header;