import React,{useEffect} from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import  {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

const User = ({loading, repos, getUser, getUserRepo, match, user}) => {
    useEffect(()=>{
        getUser(match.params.login);
        getUserRepo(match.params.login);
    },[])

    const {name, avatar_url, location, bio, blog, login, html_url, followers,following, public_repos, public_gists, hireable, company} = user

    if(loading) return <Spinner/>
    return (
        <>
            <Link to="/" className="btn btn-light" data-testid="back-btn">Back To Search</Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}} data-testid="user-img"/>
                    <h1>{name}</h1>
                    {location && <p>Location : {location}</p>}
                    
                </div>
                <div>  
                    {bio && <>
                        <h2>Bio</h2>
                        <p>{bio}</p>
                    </>}
                    <ul>
                        <li>{login && 
                            <>
                                <b>Username: </b>{login}
                            </>}
                        </li>
                        <li>{company && 
                            <>
                                <b>Company: </b>{company}
                            </>}
                        </li>
                        <li>{blog && 
                            <>
                                <b>Website: </b>{blog}
                            </>}
                        </li>
                        <li>
                            <b>Hireable:</b> {' '}
                            {
                                hireable ?
                                <i className="fas fa-check text-success"/> 
                                : 
                                <i className="fas fa-times-circle text-danger"/>
                            }
                        </li>
                    </ul>
                    <a href={html_url} className="btn btn-dark-color my-1" target="_blank">Visit Github Profile</a>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="card text-center">
                <div className='badge badge-blue'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-orange'>Public Repos: {public_repos}</div>
                <div className='badge badge-purple'>Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos}/>
        </>
    )
}

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func,
    repos: PropTypes.array.isRequired,
}

export default User
