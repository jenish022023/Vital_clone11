import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FlagIcon from '@mui/icons-material/Flag';
import PeopleIcon from '@mui/icons-material/People';

export const navData = [
    {
        id: 0,
        icon: <LockOpenIcon/>,
        text: "Dealer Signup",
        link: "/DealerSignup",
        
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "Dealer Warrenty",
        link: "/Warrenty"
    },
    {
        id: 2,
        icon: <CategoryIcon/>,
        text: "Pending Items",
        link: "/Items"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: "Doc Center",
        link: "/Docs"
    },
    {
        id: 4,
        icon: <AccountCircleIcon/>,
        text: "My Dealers",
        link: "/MyDealers"
    },
    {
        id: 5,
        icon: <FlagIcon/>,
        text: "Reporting",
        link: "/Reporting"
    },
    {
        id: 6,
        icon: <PeopleIcon/>,
        text: "My Agents",
        link: "/Agents"
    }
]