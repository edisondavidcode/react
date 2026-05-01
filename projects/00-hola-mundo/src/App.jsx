import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

    return (
        <>
            <TwitterFollowCard
                userName="midudev"
                name="Miguel Angel Duran"
                initialIsFollowing
            />
            <TwitterFollowCard
                userName="kikopastor7"
                name="Kiko Pastor"
                initialIsFollowing={false}
            />

        </>
    )
}