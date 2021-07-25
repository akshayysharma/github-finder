import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <>
            <img src={spinner} alt='Loading...' style={{width: '200px', margin:'auto', display:"block"}} data-testid="spinner"/>  
        </>
    )
}

export default Spinner; 