import About from '../About'
import {render, screen} from '@testing-library/react'

const props = {
    love: "fas fa-heart"
}

test("About  component", ()=>{
    render(<About {...props}/>)
    const h1 = screen.getByText('About this App')
    expect(h1).toBeInTheDocument()
})