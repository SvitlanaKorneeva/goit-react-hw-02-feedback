import React from 'react';

const FriendListItem = ({avatar, name,})  => {
    return (
        <li>
            {name}
            <img scr ={avatar} alt = {name} />
        </li>
    );
};

export default FriendListItem;