import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import TabPane from '@components/TabPane';
import InsightsIcon from '@mui/icons-material/Insights';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import '@style/portal.css'

export default function Portal(props) {
    const rootRef = React.useRef();
    const toolbarRef = React.useRef();

    const _default = {
        currentTab: 0,
        alignToolbar: 0,
        tabPaneHeight: 0,
    }

    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch(action.type) {
                case 'tab-change':
                    return {...state, currentTab: action.value}
                case 'tab-align':
                    return {...state, alignToolbar: action.value}
                case 'tab-height':
                    return {...state, tabPaneHeight: action.value }
            }
        }, _default
    )

    React.useEffect(( ) => {
        if(rootRef && toolbarRef) {
            const atb = (rootRef.current?.clientWidth - toolbarRef.current?.clientWidth)
            dispatch({type: 'tab-align', value: atb})
            const tHeight = rootRef.current?.clientHeight - toolbarRef.current?.clientHeight
            dispatch({type: 'tab-height', value: tHeight})

        }
    }, [rootRef, toolbarRef])

    return(
        <div ref={rootRef} className='Portal-container'>
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
                <h5>ODILI PETER UGO</h5>
            </div>

            <div className='Floating-divider'/>

            <div className='NavMonitor-container'>
                <Box ref={toolbarRef}>
                    <Tabs
                        className='Main-tabs'
                        value={state.currentTab}
                        onChange={(e, num)=> dispatch({type: 'tab-change', value: num})}
                        style={{right: `${state.alignToolbar * .4}px`, position: 'relative'}}
                        centered >
                        <Tab icon={<HealthAndSafetyOutlinedIcon />} iconPosition="start" label="Vitals" />
                        <Tab icon={<ScienceOutlinedIcon />} iconPosition="start" label="Labs" />
                        <Tab icon={<SellOutlinedIcon />} iconPosition="start" label="Billings"/>
                        <Tab icon={<TourOutlinedIcon />} iconPosition="start" label="Visits" />
                        <Tab icon={<InsightsIcon />} iconPosition="start" label="Summary" />
                    </Tabs>
                </Box>
                <TabPane
                    value={state.currentTab}
                    style={{height: `${state.tabPaneHeight}px`}}
                    index={0}>

                </TabPane>

                <TabPane
                    value={state.currentTab}
                    style={{height: `${state.tabPaneHeight}px`}}
                    index={1}>

                </TabPane>

                <TabPane
                    value={state.currentTab}
                    style={{height: `${state.tabPaneHeight}px`}}
                    index={2}>

                </TabPane>

                <TabPane
                    value={state.currentTab}
                    style={{height: `${state.tabPaneHeight}px`}}
                    index={3}>

                </TabPane>

                <TabPane
                    value={state.currentTab}
                    style={{height: `${state.tabPaneHeight}px`}}
                    index={4}>

                </TabPane>

                <TabPane
                    value={state.currentTab}
                    style={{height: `${state.tabPaneHeight}px`}}
                    index={5}>

                </TabPane>

            </div>
        </div>
    )
}