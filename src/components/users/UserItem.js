import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ({user: {id,login,avatar_url,html_url}}) => {
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className="round-img" style={{ width: '60px' }} data-testid="user-list-img"/>
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1" data-testid="more-btn">More</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;