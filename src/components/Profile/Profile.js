import React from 'react'
import s from './Profile.module.css'



const Profile = function () { 
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
                    alt="Аватар пользователя"
                    class="avatar"
                />
                <p className={s.name}>Petra Marica</p>
                <p className={s.tag}>@pmarica</p>
                <p className={s.location}>Salvador, Brasil</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>1000</span>
                </li>
                <li>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>2000</span>
                </li>
                <li>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>3000</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
