import React from 'react'
import PropTypes from 'prop-types'


const RepoItem = ({repo, star, fork}) => {
    return (
        <div className="card">
            <a href={repo.html_url} className="a-repo">{repo.name}</a>
            <span style={repoStyle}>
                {repo.language}
            </span>
            <span style={repoStyle}>
                <i className={star}></i>
                {repo.stargazers_count}
            </span>
            <span style={repoStyle}>
                <i className={fork}></i>
                {repo.forks}
            </span>
        </div>
    )
}

RepoItem.defaultProps = {
    star: "far fa-star",
    fork: "fas fa-code-branch"
}

RepoItem.propTypes={
    repo: PropTypes.object.isRequired,
}

const repoStyle={
    margin: "0 10px 0 30px",
    fontSize: "14px",
}

export default RepoItem
