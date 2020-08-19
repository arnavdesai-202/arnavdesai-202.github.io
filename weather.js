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
let a,b,c;

// function findCity(city){
//     for(var i = 0; i < cities.length; i++){
//         if(cities[i] == city){
//             return temp[i];
//         }
//     }
// }
    
function gotoTemp(city){
    
    getPlaylist(data[city]);
}


function getPlaylist(temperature)
{
    
    if(temperature == 'rainy'){
        // h2.innerHTML = "You've got a rainy day ahead of you! Here's the perfect list:";
        // backgroundImg.style.background = url('https://thefalconpress.org/wp-content/uploads/2019/01/Rain-900x691.jpg');
        // mood.src= "https://open.spotify.com/embed/playlist/2sh2q33eQ6onZwRUuhfwrv";
        a = "You've got a rainy day ahead of you! Here's the perfect list:";
        c = 'https://thefalconpress.org/wp-content/uploads/2019/01/Rain-900x691.jpg';
        b = "https://open.spotify.com/embed/playlist/2sh2q33eQ6onZwRUuhfwrv";
    }

    else if(temperature == 'sunny'){
        // h2.innerHTML = "You've got a sunny day ahead of you! Here's the perfect list:";
        // mood.src="https://open.spotify.com/embed/playlist/7vBShQfXqgKHshNTD9JnWQ";
        // backgroundImg.style.background = url('https://c7.uihere.com/files/406/1005/182/sunbeam-plant-lichtspiel-sunny-thumb.jpg');
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
    localStorage.setItem("msg", a);
    localStorage.setItem("spotify", b);
    localStorage.setItem("img", c);
    console.log(localStorage.getItem("msg"));
    window.location.href = "playlistScreen.html";
}

function storeVars(){
    let h2 = document.getElementById('headerMessage');
    let mood = document.createElement('iframe');
    mood.id = 'mood';
    let backgroundImg = document.getElementsByTagName('body')[0];
    // console.log(localStorage.getItem("msg"));
    // console.log(localStorage.getItem("spotify"));
    h2.innerHTML = localStorage.getItem("msg");
    mood.src = localStorage.getItem("spotify");
    backgroundImg.style.backgroundImage = "url('" + localStorage.getItem("img") + "')";
    backgroundImg.appendChild(mood)
}

function goBack(){
    window.location.href = "index.html";
}