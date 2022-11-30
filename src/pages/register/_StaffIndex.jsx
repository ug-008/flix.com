import * as React from 'react'

export default function RegisterStaff(props) {
    const [state, dispatch] = cacheState({
                                  key: 'RegisterStaff',
                                  cache: false,
                                  initState: {

                                  },
                                  dispatchHandler: function(state, action) {

                                  }
                              })
    return(
        <div className='RegisterStaff-root'>
            <h2 className='Title'>Register Staff</h2>
        </div>
    )
}