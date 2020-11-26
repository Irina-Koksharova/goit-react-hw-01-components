import { Fragment } from 'react';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
    return <Fragment>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </Fragment> 
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;