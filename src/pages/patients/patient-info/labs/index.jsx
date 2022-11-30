import * as React from 'react';
import Badge from '@mui/material/Badge';
import TabPane from '../../../../components/TabPane';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LabOrder from './order/LabOrder-xml.jsx'
import ReceiveLabOrder from './ReceiveLabOrder'
import './Laboratory.css';


export default function Laboratory(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [receiveOrder, setReceiveOrder] = React.useState(false);

    return(
        <div className='Laboratory-main'>
            <TabPane value={value} index={0}>
                { receiveOrder ? <ReceiveLabOrder height={props.height} />:<LabOrder height={props.height} /> }
            </TabPane>
            <TabPane value={value} index={1}>
                Laboratory History
            </TabPane>
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical" >
                <Tab
                    iconPosition="start"
                    label= {
                        <div style={{display: 'flex',}} >
                            <span style={{display: 'flex', alignItems: 'center'}}>Order</span>
                            {receiveOrder && (
                                <Badge
                                    badgeContent={1}
                                    sx={{
                                        "& .MuiBadge-badge": {
                                            background: 'var(--highlight)',
                                            position: 'relative',
                                            top: 8
                                        }
                                    }} />
                            )}
                        </div>
                    } />
                <Tab iconPosition="start" label="History" />
            </Tabs>
        </div>
    )

}