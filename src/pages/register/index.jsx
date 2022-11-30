import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPane from '@components/TabPane';
import RegisterStaff from '@pages/register/_StaffIndex'
import RegisterPatient from '@pages/register/_PatientIndex'
import './register.css';

export default function Register(props) {
    const _default = {
        value: 0,
    }
    const [state, dispatch] = React.useReducer(
        (state, action)=> {
            switch(action.type) {
                case 'handleChange':
                    return {...state, value: action.value }
            }
        }, _default
    )

    return(
        <div className='Registration-root'>
            <TabPane
                value={state.value}
                index={0}>
                <RegisterPatient />
            </TabPane>
            <TabPane
                value={state.value}
                index={1}>
                <RegisterStaff />
            </TabPane>
            <Tabs value={state.value}
                  onChange={(e, index)=> {
                    dispatch({type: 'handleChange', value: index})
                  }}
                  orientation="vertical" >
                <Tab label="Patient"
                     iconPosition="start"
                 />
                <Tab label="Staff"
                     iconPosition="start"
                />
            </Tabs>
        </div>
    )
}