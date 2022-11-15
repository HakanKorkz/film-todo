const request = (data,metHod="post") => {
    const apiKey = process.env.REACT_APP_API_URL

    let Link=`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
    const options={
        method: metHod, // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
        data: data,
        processData: false,
        contentType: false,
    }
    fetch(Link,options).then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(err => console.error(err));

}

export default request

