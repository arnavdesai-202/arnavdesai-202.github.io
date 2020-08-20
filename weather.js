var data = {
    "Dubai" : "sunny",
    "Manchester" : "rainy",
    "Los Angeles": "sunny",
    "Paris" : "cold",
    "New York" : "rainy",
    "Zurich" : "snow",
    "Kolkata" : "cloudy",
    "Istanbul" : "rainy",
    "Hong Kong" : "cold",
    "Prague" : "sunny",
    "Sydney" : "cold",
    "Edinburgh" : "rainy",
    "Amsterdam" : "cold",
    "London" : "sunny",
    "Miami" : "sunny"
}

//it is a lot more easier to manipulate these objects - do not need to loop then.
let a,b,c;

function gotoTemp(city){
    if(data[city] === undefined){
        //error messsage
        location.href = "404.html"
        return;
    }
    getPlaylist(data[city]);
}


function getPlaylist(temperature)
{
    if(temperature == 'rainy'){
        a = "You've got a rainy day ahead of you! Here's the perfect list:";
        c = 'https://thefalconpress.org/wp-content/uploads/2019/01/Rain-900x691.jpg';
        b = "https://open.spotify.com/embed/playlist/2sh2q33eQ6onZwRUuhfwrv";
    }

    else if(temperature == 'sunny'){
        a = "You've got a sunny day ahead of you! Here's the perfect list:";
        b = "https://open.spotify.com/embed/playlist/7vBShQfXqgKHshNTD9JnWQ";
        c = 'https://c7.uihere.com/files/406/1005/182/sunbeam-plant-lichtspiel-sunny-thumb.jpg';
        
    }
    
    else if(temperature == 'cold'){
        a = "You've got a cold day ahead of you! Here's the perfect list:";
        b = "https://open.spotify.com/embed/playlist/6m4DzQKcW0wwfBrvVC4bzQ";
        c = 'https://images.squarespace-cdn.com/content/v1/53e4d8c6e4b006554848ee40/1471517016618-0O8SNZ6PUNVL70GHOS7E/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/_DSF7815.jpg?format=2500w';
    }

    else if(temperature == 'cloudy'){
        a = "You've got a cloudy day ahead of you! Here's the perfect list:";
        c = 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';
        b = "https://open.spotify.com/embed/playlist/3cAPQqJxdwC41rXLy4ybcQ";

    }
    else if(temperature == 'snow'){
        a = "You've got a snowy day ahead of you! Here's the perfect list:";
        c = 'http://www.philipbrewer.net/wpx/wp-content/uploads/2013/12/IMG_3244.jpg';
        b = "https://open.spotify.com/embed/playlist/37i9dQZF1DX0Yxoavh5qJV";
    }
    // local storage allows you to preserve values when you move from one HTML page to another - that was my biggest problem here
    
    localStorage.setItem("msg", a);
    localStorage.setItem("spotify", b);
    localStorage.setItem("img", c);
    window.location.href = "playlistScreen.html";
}

function storeVars(){
    //this function is execute once playlistScreen.html is completely loaded - check body tag of this file.
    let h2 = document.getElementById('headerMessage');
    let mood = document.createElement('iframe');
    mood.id = 'mood';
    let backgroundImg = document.getElementsByTagName('body')[0];
    h2.innerHTML = localStorage.getItem("msg");
    mood.src = localStorage.getItem("spotify");
    backgroundImg.style.backgroundImage = "url('" + localStorage.getItem("img") + "')";
    //appending iframe to div created in the playlistScreen.html file
    document.getElementById('iframeLoc').appendChild(mood);
}

function goBack(){
    window.location.href = "index.html";
}
