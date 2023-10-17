// Retrieve my current url parameters
function getParameter(theParameter) {
  var params = window.location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
     if (p[0] == theParameter) {
      return decodeURIComponent(p[1]);
    }
  }
  return false;
}
url_src = getParameter('utm_source');
url_mdm = getParameter('utm_medium');
url_cpn = getParameter('utm_campaign');
url_purl = getParameter('purl');

// I retrieve data from my cookie (if it exists) and I create an object in JavaScript.
var pepites = new Object();
var pate_cookie = Cookies.get('cookie_utms');
// If at least one URL parameter exist AND the cookie doesn't exist
if((url_src!== false || url_mdm!==false || url_cpn!==false || url_purl!==false) && (pate_cookie == null || pate_cookie == "" )) {
  if(url_src!== false){ 
    pepites["source"] = url_src; 
  }
  if(url_mdm!==false){
    pepites["medium"] = url_mdm; 
  }
  if (url_cpn!==false) {
    pepites["campaign"] = url_cpn;
  }
     if (url_cpn!==false) {
    pepites["purl"] = url_purl;
  }
Cookies.set('cookie_utms', pepites, { expires: 120 } );
    //document.cookie = ('cookie_utms', pepites, { expires: 120 } );
}

// Else if we get at least URL parameter AND the cookie exist
else if((url_src!== false || url_mdm!==false || url_cpn!==false || url_purl!==false) && (pate_cookie != null || pate_cookie != "")) {
  pate_cookie_choco = JSON.parse(pate_cookie);
  if(pate_cookie_choco["source"] != undefined) {
    if(url_src!== false && pate_cookie_choco["source"].indexOf(url_src) != -1 ){
      pepites["source"] = pate_cookie_choco["source"]; 
    }

      else if(url_src!== false){
      pepites["source"] = pate_cookie_choco["source"] 
      }

    else if ( url_src == false && pate_cookie_choco["source"] != undefined) { 
    pepites["source"] = pate_cookie_choco["source"]; 
    }
  }                            
  else if ( url_src!== false ) { 
      pepites["source"] = url_src; 
  }
  if(pate_cookie_choco["medium"] != undefined) {
    if(url_mdm!== false && pate_cookie_choco["medium"].indexOf(url_mdm) != -1 ){
      pepites["medium"] = pate_cookie_choco["medium"];
    }
      else if(url_mdm!== false ) { 
      pepites["medium"] = pate_cookie_choco["medium"]
      }
    else if(url_mdm == false){
    pepites["medium"] = pate_cookie_choco["medium"]; 
    }
  }
  else if(url_mdm!== false){
    pepites["medium"] = url_mdm; 
  }
  if(pate_cookie_choco["campaign"] != undefined) {
    if(url_cpn!== false && pate_cookie_choco["campaign"].indexOf(url_cpn) != -1 ){
      pepites["campaign"] = pate_cookie_choco["campaign"];
    }
      else if(url_cpn!== false) { 
      pepites["campaign"] = pate_cookie_choco["campaign"] 
      }  
    else if(url_cpn == false){
      pepites["campaign"] = pate_cookie_choco["campaign"]; 
    } 
  }
  else if(url_cpn!== false){
    pepites["campaign"] = url_cpn; 
  }
//
//// Else if we get at least URL parameter AND the cookie exist
if(pate_cookie_choco["purl"] != undefined) {
if(url_purl!== false && pate_cookie_choco["purl"].indexOf(url_purl) != -1 ){
  pepites["purl"] = pate_cookie_choco["purl"];
}
    else if(url_purl!== false) { 
    pepites["purl"] = pate_cookie_choco["purl"]
    }  
else if(url_purl == false){
  pepites["purl"] = pate_cookie_choco["purl"]; 
} 
}
else if(url_purl!== false){
pepites["purl"] = url_purl; 
}
Cookies.set('cookie_utms', pepites, { expires: 120 } );
}


// Retrieve data from the cookie and use it on your page
var cookie = Cookies.get('cookie_utms');
if(cookie != undefined){
cookie_choco = JSON.parse(cookie);
cookie_src = cookie_choco["source"];
cookie_mdm = cookie_choco["medium"];
cookie_cpn = cookie_choco["campaign"];
cookie_purl = cookie_choco["purl"];
  value = cookie_choco["purl"];
  

};



console.log(cookie_purl);
//			console.log(queryString);

// Set the cookies
if(cookie_purl == undefined) {
  value = getParameter('purl');
        };

console.log(value);


        
//console.log(phonenumber);	
  
async function makeGetRequest() {

  let res = await axios.get('./rythmiaNumbers.json')

  data = res.data;
  console.log(data);
  // document.getElementById("mRate").innerHTML = data.miracleRate;

  var pNumbers = document.getElementsByClassName('pNumber');
  for (var i = 0; i < pNumbers.length; ++i) {
  var pNumber = pNumbers[i];  
  pNumber.innerHTML = data[value][0].number;
}
  }


makeGetRequest();
