import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({loading, users, noUser}) => {
    if(loading) return <Spinner/>
    else{
        return (
            <div>
                { (noUser === true) && 
                    <div className="alert alert-danger" data-textid="no-user">
                        <i className="fas fa-info-circle"></i>{" "}
                        No user present
                    </div>
                }

                {(users.length == 0) && 
                    <>
                        You can search for users globally across all of GitHub here.
                    </>
                }
                <div style={userStyle}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
}

export default Users