import {useState} from 'react'
import PropTypes from 'prop-types'

function Search({ searchUsers, showClear, clearUsers, setAlert}) {
    const [state, setState] = useState('')

    const onChangeHandler = e => {
        setState(e.target.value)
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        if(state === ''){
            console.log('here')
            setAlert('Please enter something', 'light')
        }else{
            searchUsers(state)
            setState("")
        }
    }

    return (
        <div>
           <form className='form' onSubmit={onSubmitHandler} autoComplete="off">
                <input type="text" name="text" 
                    placeholder="Search Users..."
                    onChange={onChangeHandler}
                    value={state}
                    data-testid="search-user"
                />   
                <input type="submit" value="Search" className="btn btn-dark btn-block" data-testid="search-btn"/>   
            </form>
            {showClear ?
                <button className="btn btn-light btn-block" onClick={clearUsers} data-testid="clear">
                    Clear
                </button>
            : null }
        </div>
    )
}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search
