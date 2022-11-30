import moment from 'moment';

var latest = false;

export const ColumnProperties = [
    {
        id: 'date',
        align: 'center',
        label: 'Date',
        format: (value, optional) => {
            let now = moment(new Date());
            let diff = moment.duration(now.diff(moment(value)));
            if(diff.asHours() < 24) {
                if(optional?.latest)
                    return(<div className='Latest-tag'>Latest</div>)
                else return(<div className='Time-tag'>{moment(value).format("hh:mm A")}</div>)
            }
            else return moment(value).fromNow()
        },
        maxWidth: '100px',
    },
    {
        id: 'bp',
        align: 'center',
        label: 'BP (mmHg)',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
    {
        id: 'temperature',
        align: 'center',
        label: 'Temp (\u00b0C)',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
    {
        id: 'pulse',
        align: 'center',
        label: 'Heart Pulse Rate',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
    {
        id: 'respiratory',
        align: 'center',
        label: 'Respiratory Rate',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
    {
        id: 'weight',
        align: 'center',
        label: 'Weight (Kg)',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
    {
        id: 'height',
        align: 'center',
        label: 'Height',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
    {
        id: 'o2',
        align: 'center',
        label: 'O2 Saturation Level',
        format: (value, optional) => value && String(value).trim().length ? value:'--',
    },
]