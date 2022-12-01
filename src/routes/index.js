import React from "react";
import Reports from "@pages/reports"
import Patients from "@pages/patients";
import Overview from "@pages/overview";
import Register from "@pages/register";
import { Navigate } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import NewPatient from "@pages/patients/add-patient";
import InsightsIcon from '@mui/icons-material/Insights';

export const appRoutes = {
    index: {
        element: <Navigate to="overview" replace />,
    },
    register: {
        text: 'Register',
        path: 'register',
        icon: <HowToRegIcon />,
        element: <Register />,
        childRoute: {},
    },
    overview: {
        text: 'Overview',
        path: 'overview',
        icon: <InsightsIcon />,
        element: <Overview />,
        childRoute: {},
    },
    appointments: {
        text: 'Appointment',
        path: 'appointments',
        icon: <CalendarMonthOutlinedIcon  />,
        element: <Patients />,
        childRoute: {},
    },
    reports: {
        text: 'Reports',
        path: 'reports',
        icon: <ReceiptLongOutlinedIcon  />,
        element: <Reports />,
        childRoute: {},
    },
}