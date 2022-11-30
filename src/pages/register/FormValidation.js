/**
 * Validate form controls
 */
export const validatePatientRegistration = function({data, error, slide}) {
    var _next, 
        _fields,
        _message='This field is required or you entered an invalid input'
    switch(slide) {
        case 0: // NameForm Validation
            _next = true;
            _fields = _undefined(data, 'surname', 'firstName')
            if(_fields.error) {
                error.at = _fields.errorAt
                _next = false
            }
            return _next
        case 1: // GenderWithReligionForm Validation
            _next = true;
            _fields = _undefined(data, 'gender', 'maritalStatus', 'religion')
            if(_fields.error) {
                error.at = _fields.errorAt
                _next = false
            }
            return _next
        case 2: // AddressWithDoBForm Validation
            _next = true;
            _fields = _undefined(data, 'dateOfBirth', 'address', 'phoneNumber', 'email')
            if(_fields.error) {
                error.at = _fields.errorAt
                _next = false
            }
            return _next
        case 3: // EthnicityWithOccupationForm Validation
            _next = true;
            _fields = _undefined(data, 'occupation', 'placeOfOrigin', 'ethnicity')
            if(_fields.error) {
                error.at = _fields.errorAt
                _next = false
            }
            return _next
        case 4: // NextOfKinForm Validation
            _next = true;
            _fields = _undefined(data, 'nokName', 'nokRelationship', 'nokPhoneNumber', 'nokAddress')
            if(_fields.error) {
                error.at = _fields.errorAt
                _next = false
            }
            return _next
        case 5: // TODO: InsuranceForm Validation
        default:
            return true;
    }

}

/**
 * Check if form fields are empty or undefined
 */
function _undefined(data, ..._fields) {
    var o;
    const filtered = _fields.filter((field)=> !data[field]?.trim() > 0)
    if(filtered.length > 0) {
        o = {error: true, errorAt: filtered}
    }
    return o || { };
}
