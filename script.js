document.addEventListener('DOMContentLoaded', function () {
    console.log("script loaded");
    
    let trackData = {};
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        console.log("performing track saerch");

        let searchText = searchInput.value;
        console.log("Searching: "+ searchText);

        let searchURL = `https://api.spotify.com/v1/search?q=${searchText}&type=track&limit=1`;

        fetch(searchURL, {
            headers: {
                "Authorization":"Bearer BQDGck1ffk8HQRADos2wblzw-OprCGOJwmjzWIkK1WxGxCA0k427sY5NhtnkPtLbFMGrqxHXvUM_fO3Y4GpcfEplQGTck7f95D1wKUYXEx10F8F7zZg"     
            }
        }).then(resp => resp.json()) 
        .then(r => {
            console.log(JSON.stringify(r));
            trackData = r;

        })

    })
     
    function displayTrackInfo () {
        const albumNameElement = document.getElementById('albumName')
        const artistNameElement = document.getElementById ('artistName');
        const trackNameElement = document.getElementById('trackName')
        const durationElement = document.getElementById('duration')
        const popularityElement = document.getElementById('popularity');
        const albumImageElement = document.getElementById('albumImage');
    }


  
});





