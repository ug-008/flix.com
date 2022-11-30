import * as React from 'react';
import {InputField} from "../../../components/InputField";
import {SelectOption} from "../../../components/SelectOption";
import {CalendarOption} from "../../../components/CalendarOption";


export default function RelativeForm(props) {

    const[data, setData] = React.useState({...props.data});

    const handleOnChange = (event) => {
        const updateData = {...data};
        updateData.nextOfKin[event.target.name] = event.target.value;
        setData(updateData);
    }

    return(
        <div className='Relative-form'>
            <div className="Title">
                <span className="Title-text">
                    Next of Kin
                </span>
            </div>
            <div className='Row-base'>
                <InputField label='Surname'
                            name='surname'
                            value={data.nextOfKin.surname}
                            onChange={handleOnChange}
                            required />
                <InputField label='First name'
                            name='firstName'
                            value={data.nextOfKin.firstName}
                            onChange={handleOnChange}
                            required />
                <InputField label='Other name'
                            name='otherName'
                            placeholder='(Optional)'
                            value={data.nextOfKin.otherName}
                            onChange={handleOnChange} />
            </div>
            <div className='Row-base' >
                <InputField label='House Address 1'
                            name='houseAddress1'
                            value={data.nextOfKin.houseAddress1}
                            onChange={handleOnChange}
                            required />
                <InputField label='House Address 2'
                            name='houseAddress2'
                            placeholder='(Optional)'
                            value={data.nextOfKin.houseAddress2}
                            onChange={handleOnChange} />
            </div>
            <div className='Row-base' >
                <InputField label='Relationship'
                            name='relationship'
                            value={data.nextOfKin.relationship}
                            onChange={handleOnChange}
                            required />
                <InputField label='Phone number 1'
                            name='phoneNumber1'
                            type='tel'
                            value={data.nextOfKin.phoneNumber1}
                            onChange={handleOnChange}
                            inputMode='numeric'
                            pattern='\d*'
                            required />
                <InputField label='Email Address'
                            name='emailAddress'
                            type={'email'}
                            value={data.nextOfKin.emailAddress}
                            onChange={handleOnChange} />
            </div>
        </div>
    )
}