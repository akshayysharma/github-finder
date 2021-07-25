import RepoItem from '../RepoItem'
import {render, screen} from '@testing-library/react'

const props = {
    star: "far fa-star",
    fork: "fas fa-code-branch",
    repo: {
        html_url:"https://github.com/akshayysharma/hacktoberfest-2020",
        name:"hacktoberfest-2020",
        language:"HTML",
        stargazers_count: 20,
        forks: 46
    }
}

test("RepoItem  component", ()=>{
    render(<RepoItem {...props}/>)
    const reponame = screen.getByText('hacktoberfest-2020')
    const language = screen.getByText('HTML')
    const stargazers_count = screen.getByText('20')
    const forks = screen.getByText('46')
    expect(reponame).toBeInTheDocument()
    expect(language).toBeInTheDocument()
    expect(stargazers_count).toBeInTheDocument()
    expect(forks).toBeInTheDocument()
})