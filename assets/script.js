



// GRABS INPUT
function returnText(){
    let search = document.getElementById("userInput").value;
    console.log(search);
    city(search);
    Geo(search);
}


// SEARCH THE INPUT
function city(search){
    var APIKey = "cf1944c495b8f600e7c307c18734548b";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + APIKey;
   

    // FETCH API FOR TODAY'S WEATHER
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    }) .then(function (data) {
       

// TODAY'S WEATHER
        var name = document.querySelector("#user-task");
        var hum = document.querySelector("#h");
        var tem = document.querySelector("#t");
        var win = document.querySelector("#w");

        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

       console.log(iconurl);

        name.textContent = data.name;
        hum.textContent = data.main.humidity;
        tem.textContent = data.main.temp;
        win.textContent = data.wind.speed;
        

    //  $("#wicon".attr("src",iconurl));

       
    })


   
}

// FETCH API FOR FORECAST
function Geo(search){
    var APIKey = "cf1944c495b8f600e7c307c18734548b";
    var URL = "http://api.openweathermap.org/geo/1.0/direct?q=" + search + "&appid=" + APIKey;
    console.log(URL);
    fetch(URL)
    .then(function (response) {
        return response.json();
      }) .then(function (data) {
        console.log(data)

        console.log(data[0].lat)
        console.log(data[0].lon)
        

        var lati = data[0].lat;
        var long =  data[0].lon ;


        var APIey = "ccb5c80fc1db974c3be9f23304d10027";
        var link = "http://api.openweathermap.org/data/2.5/forecast?"+"lat="+lati+"&lon="+long+"&appid="+APIey;
  
        console.log(link)
        offical (link);
      })
     

}
function offical(link){
    fetch(link)
    .then(function (response) {
        return response.json();
      }) .then(function (info) {
        // console.log(info)
    
        console.log(info.list[1])
        console.log(info.list[2])
        console.log(info.list[3])
        console.log(info.list[4])

        var hum = document.querySelector("#hu");
        var tem = document.querySelector("#te");
        var win = document.querySelector("#wi");
        // MONDAY

        hum.textContent = info.list[1].main.humidity;
        tem.textContent = info.list[1].main.temp;
        win.textContent = info.list[1].wind.speed;
        
// TUESDAY
        var hum2 = document.querySelector("#hm");
        var tem2 = document.querySelector("#te2");
        var win2 = document.querySelector("#wi2");

        tem2.textContent = info.list[2].main.temp;
        win2.textContent = info.list[2].wind.speed;
        hum2.textContent = info.list[2].main.humidity;
// WEDNESDAY
        var hum3 = document.querySelector("#hm3");
        var tem3 = document.querySelector("#te3");
        var win3 = document.querySelector("#wi3");

        tem3.textContent = info.list[3].main.temp;
        win3.textContent = info.list[3].wind.speed;
        hum3.textContent = info.list[3].main.humidity;
// THURSDAY
        var hum4 = document.querySelector("#hm4");
        var tem4 = document.querySelector("#te4");
        var win4 = document.querySelector("#wi4");

        tem4.textContent = info.list[4].main.temp;
        win4.textContent = info.list[4].wind.speed;
        hum4.textContent = info.list[4].main.humidity;
// FRIDAY
        var hum5 = document.querySelector("#hm5");
        var tem5 = document.querySelector("#te5");
        var win5 = document.querySelector("#wi5");

        tem5.textContent = info.list[5].main.temp;
        win5.textContent = info.list[5].wind.speed;
        hum5.textContent = info.list[5].main.humidity;
    
    })
        
}

// HISTORY BAR
function searchHistory(){
var recentSearch =[]
recentSearch.push($('#userInput').val());

$.each(recentSearch, function(index,value){
const p = document.createElement("p");
p.innerHTML = value;
document.getElementById("historyline").appendChild(p);

})


}


