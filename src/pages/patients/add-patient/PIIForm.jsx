import * as React from 'react';
import {InputField} from "../../../components/InputField";
import {SelectOption} from "../../../components/SelectOption";
import {CalendarOption} from "../../../components/CalendarOption";


export default function PIIForm(props) {

    const[data, setData] = React.useState({...props.data});

    const handleOnChange = (event) => {
        const updateData = {...data};
        updateData.pii[event.target.name] = event.target.value;
        setData(updateData);
    }

    return(
        <div className='x-pii-form'>
            <div className='Row-base'>
                <InputField label='Surname'
                            name='surname'
                            value={data.pii.surname}
                            onChange={handleOnChange}
                            required />
                <InputField label='First name'
                            name='firstName'
                            value={data.pii.firstName}
                            onChange={handleOnChange}
                            required />
                <InputField label='Other name'
                            name='otherName'
                            placeholder='(Optional)'
                            value={data.pii.otherName}
                            onChange={handleOnChange} />
            </div>
            <div className='Row-base'>
                <CalendarOption label='Date of birth'
                                name='dateOfBirth'
                                onChange={handleOnChange}
                                defaultValue={data.pii.dateOfBirth}
                                required />
                <SelectOption label='Gender'
                              name='gender'
                              required
                              defaultOption={data.pii.gender}
                              menuItem={['Male', 'Female']}
                              onChange={handleOnChange} />
                <SelectOption label='Marital Status'
                              name='maritalStatus'
                              required
                              defaultOption={data.pii.maritalStatus}
                              menuItem={['Single', 'Married', 'Widow(er)', 'Divorced']}
                              onChange={handleOnChange} />
            </div>
            <div className='Row-base' >
                <InputField label='House Address 1'
                            name='houseAddress1'
                            value={data.pii.houseAddress1}
                            onChange={handleOnChange}
                            required />
                <InputField label='House Address 2'
                            name='houseAddress2'
                            placeholder='(Optional)'
                            value={data.pii.houseAddress2}
                            onChange={handleOnChange} />
            </div>
            <div className='Row-base' >
                <InputField label='Place of origin'
                            name='placeOfOrigin'
                            placeholder='(Optional)'
                            value={data.pii.placeOfOrigin}
                            onChange={handleOnChange} />
                <InputField label='Ethnicity'
                            name='ethnicity'
                            placeholder='(Optional)'
                            value={data.pii.houseAddress2}
                            onChange={handleOnChange} />
            </div>
            <div className='Row-base' >
                <InputField label='Phone number 1'
                            name='phoneNumber1'
                            type='tel'
                            value={data.pii.phoneNumber1}
                            onChange={handleOnChange}
                            inputMode='numeric'
                            pattern='\d*'
                            required />
                <InputField label='Phone number 2'
                            name='phoneNumber2'
                            placeholder='(Optional)'
                            value={data.pii.phoneNumber2}
                            onChange={handleOnChange}
                            inputMode='numeric'
                            pattern='/^-?\d+(?:\.\d+)?$/g' />
                <InputField label='Email Address'
                            name='emailAddress'
                            type={'email'}
                            value={data.pii.emailAddress}
                            onChange={handleOnChange}
                            required />
            </div>
            <div className='Row-base' >
                <InputField label='Occupation'
                            name='occupation'
                            value={data.pii.occupation}
                            onChange={handleOnChange}
                            required />
                <InputField label='Religion'
                            name='religion'
                            placeholder='(Optional)'
                            value={data.pii.houseAddress2}
                            onChange={handleOnChange} />
            </div>
        </div>
    )
}