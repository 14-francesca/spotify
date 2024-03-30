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
                "Authorization":"Bearer BQC94QWPDPo9Yuf8ETAsRYGE1pY0Y8IABT1n5chpyS6KvZpfQi0HRFJkbFLc5lCOqCPVYvE7UgS-_85ElqepuFLGZ4FELEQTE20U9AQ4oizpO71Vnpo"     
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


    albumNameElement.text.Content = trackData.tracks.items[0].album.name;
    artistNameElement.textContent = trackData.tracks.items[0].album.artists[0].name;
    trackNameElement.textContent =trackData.tracks.items[0].name;
    durationElement.textContent = formatDuration(trackData.tracks.items[0].duration_ms);
    popularityElement.textContent = trackData.tracks.items[0].popularity;
    albumImageElement.src.trackData.tracks.items[0].album.images[0].url
;


function formatDuration(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000)/1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    
}

  
});





