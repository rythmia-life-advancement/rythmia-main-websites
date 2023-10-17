/////console.log(phonenumber);	
		
async function GetRequest() {

    let res = await axios.get('./rythmiaSoulsServed.json')
  
    data2 = res.data;
    console.log(data2);
    
  
    var soulsServeds = document.getElementsByClassName('soulsServed');
    for (var i = 0; i < soulsServeds.length; ++i) {
    var soulsServed = soulsServeds[i];  
    soulsServed.innerHTML = data2['souls'][0].number;
  }
    }
  
  
 GetRequest();

 		
async function GetRequesttrip () {

    let res = await axios.get('./tripAdvisorReviews.json')
  
    data3 = res.data;
    console.log(data3);
    
  
    var tripAdvisorNs = document.getElementsByClassName('tripAdvisorN');
    for (var i = 0; i < tripAdvisorNs.length; ++i) {
    var tripAdvisorN = tripAdvisorNs[i];  
    tripAdvisorN.innerHTML = data3['reviews'][0].number;
  }
    }
  
  
 GetRequesttrip ();
 
 
