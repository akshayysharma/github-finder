import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

// afterEach(cleanup)
// jest.useFakeTimers()
// jest.setTimeout(30000)

afterEach(() => {
  // jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

describe('App component', ()=>{
  test('Navbar', ()=>{
    render(<App/>)
    expect(screen.getByText('Github Finder')).toBeTruthy()
    expect('Home').toBeTruthy()
    expect('About').toBeTruthy()
  })
  test('test input field', ()=>{
    render(<App/>)
    const input =  screen.getByTestId('search-user')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', "text")
    fireEvent.change(input, {target: {value: 'Hello'}})
    expect(input).toHaveAttribute('value', "Hello")
  })
  test('test search button', ()=>{
    render(<App/>)
    const input =  screen.getByTestId('search-btn')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', "submit")
    expect(input).toHaveAttribute('value', "Search")
  })
})

describe('Navbar button click', ()=>{
  test('Home Navbar click', ()=>{
    render(<Router><App/></Router>)

    const homeBtn = screen.getByText('Home')
    fireEvent.click(homeBtn)

    expect(screen.getByText('You can search for users globally across all of GitHub here.')).toBeTruthy()
  })

  test('About Navbar click', ()=>{
    render(<Router><App/></Router>)

    const aboutBtn = screen.getByText('About')
    fireEvent.click(aboutBtn)
    expect(screen.getByText('App to search Github users')).toBeTruthy()
  })
})

describe('Search button click', ()=>{
  test('Click without user', ()=>{
    const {queryByTestId} = render(<Router><App/></Router>)
    // get back to home tab
    const homeBtn = screen.getByText('Home')
    fireEvent.click(homeBtn)

    // click seach button without any input
    const input =  screen.getByTestId('search-user')
    const searchBtn =  screen.getByTestId('search-btn')
    expect(input).toHaveAttribute('value', "")

    fireEvent.click(searchBtn)
    expect(screen.getByText('Please enter something')).toBeTruthy()

    jest.useFakeTimers()
    setTimeout(() => {
      expect(queryByTestId('alert')).toBeFalse()
    }, 3000)
  })
  test('Click button with unknown user', async()=>{
    const {queryByTestId} = render(<Router><App/></Router>)
   
    // click seach button without any input
    const input =  screen.getByTestId('search-user')
    const searchBtn =  screen.getByTestId('search-btn')
    
    fireEvent.change(input, {target: {value: 'ncjfdvjndfvn'}})
    fireEvent.click(searchBtn)
    const spinner = queryByTestId('spinner')
    expect(spinner).toBeInTheDocument()

    await waitFor(() => expect(screen.getByText('No user present')).toBeTruthy())

    jest.useFakeTimers()
    setTimeout(() => {
      expect(queryByTestId('no-user')).toBeFalsy()
    }, 3000)
  })
  test('Click button with actual user', async()=>{
    const {queryByTestId} = render(<Router><App/></Router>)
   
    // click seach button without any input
    const input =  screen.getByTestId('search-user')
    const searchBtn =  screen.getByTestId('search-btn')
    
    fireEvent.change(input, {target: {value: 'akshayysharma'}})
    fireEvent.click(searchBtn)
    const spinner = queryByTestId('spinner')
    expect(spinner).toBeInTheDocument()

    // Load data after the spinner gif
    await waitFor(() => {
      const moreBtn = queryByTestId('more-btn')
      expect(screen.getByText('akshayysharma')).toBeTruthy()
      expect(moreBtn).toBeTruthy()
      expect(spinner).not.toBeInTheDocument()

      // click on more button to show user data
      fireEvent.click(moreBtn)
      expect(screen.getByText('Visit Github Profile')).toBeInTheDocument()

      // go back to search
      const bckBtn = queryByTestId('back-btn')
      fireEvent.click(bckBtn)

      // clear user data
      const clrBtn = queryByTestId('clear')
      fireEvent.click(clrBtn)
      
      expect(screen.getByText('You can search for users globally across all of GitHub here.')).toBeInTheDocument()
    })
  })
})

