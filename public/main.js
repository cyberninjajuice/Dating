var male = document.getElementById("male"),
  female = document.getElementById("female"),
  us = document.getElementById("us"),
  gb = document.getElementById("gb"),
  swipeButton = document.getElementById("swipe"),
  baseURL = "http://api.randomuser.me/?result=1&nat=",
  apiRU = "&key=ABCD-1234-EFGH-5678",
  body = document.getElementsByTagName("body")[0], main=document.main;
  fullInfo = {};

function getFull() {
  var fullURL = baseURL + (us.checked ? "us" : "gb");
  if ((male.checked && female.checked) || (male.checked === false && female.checked)) {
    fullURL += apiRU;
  } else {
    fullURL += "&gender=" + (male.checked ? "female" : "male") + apiRU;
  }
  return fullURL;
}

function addText(text) {
  var p = document.createElement("p");
  p.innerText = text;
  if (p)
    body.appendChild(p);
}

function ajaxGetPerson() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", getFull());
  xhr.addEventListener("load", function() {
    var response = JSON.parse(xhr.response).results[0].user;
    var ul = document.createElement("ul");
    var i = document.createElement("img");
    var date = document.createElement("button");
    date.setAttribute("id", "date");
    date.innerText="Date";
    var dump = document.createElement("button");
    dump.setAttribute("id", "dump");
    dump.innerText="Dump /";
    var div=document.createElement("div");
    console.log(response.email);

    fullInfo = {
      name: "" + response.name.first + " " + response.name.last + "",
      email: response.email,
      phone: response.cell,
      location: "" + response.location.street + " " + response.location.city + " " + response.location.state,
      nationality: response.nationality,
      pic: response.picture.medium,
      seed: JSON.parse(xhr.response).results[0].seed,
      password: response.password
    };

    for (var key in fullInfo) {
      var li = document.createElement("li");
      li.innerText = key + ": " + fullInfo[key];
      ul.appendChild(li);
    }
    main.appendChild(ul);
    i.setAttribute("src", response.picture.large);
    main.appendChild(i);
    div.appendChild(date);
    div.appendChild(dump);
    main.appendChild(div);
  });
  xhr.send();
}

function ajaxSendPerson() {
  var xhr = newXMLHttpRequest();
  var url = "http://localhost:3000/dates";
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.addEventListener("load", function(){
    
  });
  xhr.send(JSON.stringify(fullInfo));
}

swipeButton.addEventListener("click", ajaxGetPerson);