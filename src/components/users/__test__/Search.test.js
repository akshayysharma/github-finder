import Search from '../Search'
import {render} from '@testing-library/react'

const props = {
    clearUsers: jest.fn,
    searchUsers: jest.fn,
    setAlert: jest.fn,
    showClear: false
}

test("Spinner will show", ()=>{
    render(<Search {...props}/>)
})