import Upskill from "../../public/assets/icons/upskill.tsx"
import Forums from "../../public/assets/icons/forums.tsx"
import Learn from "../../public/assets/icons/learn.tsx"
import Dashboard from "../../public/assets/icons/dashboard.tsx"
import Contest from "../../public/assets/icons/contest.tsx"
import Leaderboard from "../../public/assets/icons/leaderboard.tsx"


export interface sidebarLinks {
    icon: React.FC;
    text: string;
    link: string;
}

const sidebarLinks: sidebarLinks[] = [
    {
        icon: Dashboard,
        text: "dashboard",
        link: "/dashboard"
    },
    {
        icon: Learn,
        text: "learn",
        link: "/learn"
    },
    {
        icon: Forums,
        text: "forums",
        link: "/forums"
    },
    {
        icon: Upskill,
        text: "upskill",
        link: "/upskill"
    },
    {
        icon: Contest,
        text: "contest",
        link: "/contest"
    },
    {
        icon: Leaderboard,
        text: "leaderboard",
        link: "/leaderboard"
    }
]



export default sidebarLinks;