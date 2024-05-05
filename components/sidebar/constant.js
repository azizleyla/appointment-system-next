import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessibleIcon from '@mui/icons-material/Accessible';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const menuLinks = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />
    },
    {
        title: "Appointment",
        icon: <AccessAlarmsIcon />
    }, {
        title: "Doctors",
        children: ['Add Doctor', 'Doctors'],
        icon: <PersonOutlineIcon />
    },
    {
        title: "Patients",
        icon: <AccessibleIcon />
    }
]