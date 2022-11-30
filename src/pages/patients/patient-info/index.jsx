import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import TabPane from '../../../components/TabPane';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import Laboratory from './labs'
import Vital from './Vital'
import './PatientInfo.css'

export default function PatientInfo(props) {
    const rootRef = React.useRef();
    const toolbarRef = React.useRef();
    const [value, setValue] = React.useState(0);
    const [tabPaneHeight, setTabPaneHeight] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    React.useEffect(()=> setTabPaneHeight(rootRef.current?.clientHeight - toolbarRef.current?.clientHeight), [tabPaneHeight]);

    return(
        <div ref={rootRef} className='PatientInfo-container'>
            <div className='PiiInfo-container'>
                <Avatar
                    sx={{
                        width: '150px',
                        height: '150px',
                        position: 'relative',
                        zIndex: '2',
                        bgcolor: 'lightgrey',
                        border: '4px solid var(--bg)',
                    }}
                    src="/broken-image.jpg"
                />
                <br />
                <h6>ODILI PETER UGO</h6>
            </div>

            <div className='Floating-divider'/>

            <div className='NavMonitor-container'>
                <Box ref={toolbarRef} >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        className='Main-tabs'
                        centered >
                        <Tab icon={<HealthAndSafetyOutlinedIcon />} iconPosition="start" label="Vitals" />
                        <Tab icon={<ScienceOutlinedIcon />} iconPosition="start" label="Laboratory" />
                        <Tab icon={<SellOutlinedIcon />} iconPosition="start" label="Billings" />
                        <Tab icon={<TourOutlinedIcon />} iconPosition="start" label="Visits" />
                        <Tab icon={<HeartBrokenOutlinedIcon />} iconPosition="start" label="Diagnosis" />
                        <Tab label="" sx={{width: '100px'}} disabled />
                    </Tabs>
                </Box>
                <TabPane
                    value={value}
                    style={{height: `${tabPaneHeight}px`}}
                    index={0}>
                    <Vital height={tabPaneHeight} />
                </TabPane>

                <TabPane
                    value={value}
                    style={{height: `${tabPaneHeight}px`}}
                    index={1}>
                    <Laboratory height={tabPaneHeight} />
                </TabPane>

                <TabPane value={value} index={2}>

                </TabPane>
            </div>
        </div>
    )
}