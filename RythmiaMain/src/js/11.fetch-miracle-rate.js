// //Fetch ---------->

async function makeGetRequest() {

    let res = await axios.get('https://secret-spire-96232.herokuapp.com/https://terceroleadapi.azurewebsites.net/api/Miracle', {
        headers: {
          authorization: 'ad97e0d5-4da9-4016-af37-4eb80c0b16fd'
        }})
        
    data = res.data;
    console.log(data);
    // document.getElementById("mRate").innerHTML = data.miracleRate;
    var mRates = document.getElementsByClassName('mRate');
    for (var i = 0; i < mRates.length; ++i) {
    var mRate = mRates[i];  
    mRate.innerHTML = data.miracleRate;
}
    }

    
  makeGetRequest();
