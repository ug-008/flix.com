const Post = (url, {body, options, loading, onComplete, onSuccess, onFailure}) => {

    if(loading) loading( );

    const baseUrl = process.env.REACT_APP_BASE_URL;

    fetch( baseUrl + url, {
        credentials: 'include',
        ...options,
        headers: {
            accept: 'application/json',
            contentType: 'application/json',
            ...options?.headers,
        },
        body: JSON.stringify(body),
        method: 'POST'
    })
    .then(function(response){
        if(!response.ok){
            throw new Error('HTTP status '+ response.status)
        }
        return response.json();
    })
    .then(function(parsedJson) {
        onSuccess(parsedJson);
    })
    .catch(function(error){
        onFailure(error);
    })
    .finally(function(){
        if(onComplete) onComplete( );
    })

}

export default Post;