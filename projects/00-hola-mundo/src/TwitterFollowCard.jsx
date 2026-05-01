import { useState } from 'react';

export function TwitterFollowCard({ userName, name = 'unknown', initialIsFollowing = false }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    const text = isFollowing ? "Dejar de seguir" : "Seguir";

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const userUrl = `https://unavatar.io/twitter/${userName}`;



    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={userUrl} alt={`El avatar de ${name}`} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} type="button" onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}