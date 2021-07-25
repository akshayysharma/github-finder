import Alert from '../Alert'
import {render} from '@testing-library/react'

const noProps = {
    alert: null
}

const alertProps = {
    msg: "Please enter something",
    type: "light"
}

describe('Alert', ()=> {
    test('Component not present initially', ()=>{
        const {queryByTestId} = render(<Alert {...noProps}/>)
        const alert = queryByTestId('alert')
        expect(alert).not.toBeInTheDocument()
    })
    // test('Alert Component appeard if nothing is passed in input box', ()=>{
    //     const {queryByTestId} = render(<Alert {...alertProps}/>)
    //     const alert = queryByTestId('alert')
    //     expect(alert).toBeInTheDocument()
    // })
})