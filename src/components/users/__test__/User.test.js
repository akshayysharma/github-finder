import User from '../User'
import {render, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'

const props = {
    loading: false, 
    repos: [], 
    getUser: () => {}, 
    getUserRepo: () => {}, 
    match: {
        params: {
            login: "akshayysharma"
        }
    }, 
    user: {
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
}

const loadingProp = {
    ...props,
    loading: true
}

test("Spinner will show", ()=>{
    const {queryByTestId} = render(
        <Router>
            <User {...loadingProp}/>
        </Router>
    ) 
    const spinner = queryByTestId('spinner')
    expect(spinner).toBeTruthy()
})

test('User details will show', ()=>{
    const {queryByTestId} = render(<Router>
        <User {...props}/>
    </Router>
    )
    // screen.debug()
    const backBtn = queryByTestId('back-btn')
    const userImg = queryByTestId('user-img')

    const btntxt = screen.getByText('Back To Search')
    const name = screen.getByText('Akshay sharma')
    const location = screen.getByText('Location : localhost')
    const userName = screen.getByText('akshayysharma')
    const website = screen.getByText('https://akshayysharma.herokuapp.com')
    const hireable = screen.getByText('Hireable:')

    expect(backBtn).toBeTruthy()
    expect(userImg).toBeTruthy()

    expect(btntxt).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(userName).toBeInTheDocument()
    expect(website).toBeInTheDocument()
    expect(hireable).toBeInTheDocument() 
})