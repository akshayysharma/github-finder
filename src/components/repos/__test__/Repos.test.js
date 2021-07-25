import Repos from '../Repos'
import {render} from '@testing-library/react'

const props = {
    repos: [
        {id: 356268023, node_id: "MDEwOlJlcG9zaXRvcnkzNTYyNjgwMjM=", name: "ecommerce", full_name: "akshayysharma/ecommerce", private: false},
        {id: 300847215, node_id: "MDEwOlJlcG9zaXRvcnkzMDA4NDcyMTU=", name: "hacktoberfest-2020", full_name: "akshayysharma/hacktoberfest-2020", private: false},
        {id: 296445294, node_id: "MDEwOlJlcG9zaXRvcnkyOTY0NDUyOTQ=", name: "SpaceX", full_name: "akshayysharma/SpaceX", private: false},
        {id: 296273146, node_id: "MDEwOlJlcG9zaXRvcnkyOTYyNzMxNDY=", name: "gyftr", full_name: "akshayysharma/gyftr", private: false},
        {id: 293454268, node_id: "MDEwOlJlcG9zaXRvcnkyOTM0NTQyNjg=", name: "Covid19-Tracker", full_name: "akshayysharma/Covid19-Tracker", private: false}
    ]
}

test("RepoItem  component", ()=>{
    render(<Repos {...props}/>) 
})