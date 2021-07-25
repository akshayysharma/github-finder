import Users from '../Users'
import {render, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'

const props = {
    loading: false, 
    noUser: false,
    users: [
        {
            avatar_url: "https://avatars.githubusercontent.com/u/14957894?v=4",
            location: "localhost",
            name: "Akshay sharma",
            bio: null,
            blog: "https://akshayysharma.herokuapp.com",
            login: "akshayysharma",
            html_url: "https://github.com/akshayysharma",
            followers: 38,
            following: 91,
            public_repos: 19,
            public_gists: 0,
            hireable: true,
            company: null
        }
    ]
}

const loadingProp = {
    ...props,
    loading: true
}

test("Spinner will show", ()=>{
    const {queryByTestId} = render(
        <Router>
            <Users {...loadingProp}/>
        </Router>
    ) 
    const spinner = queryByTestId('spinner')
    expect(spinner).toBeTruthy()
})

test('list of users will show', ()=>{
    const {queryByTestId} = render(
        <Router>
            <Users {...props}/>
        </Router>
    ) 
    const img = queryByTestId('user-list-img')
    const name = screen.getByText('akshayysharma')
    const btn = screen.getByText('More')
    expect(img).toBeTruthy()
    expect(name).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
})