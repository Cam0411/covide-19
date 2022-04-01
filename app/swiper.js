const worldCovidApi = 'https://api.covid19api.com/world/total'
const worldConfirmed = document.querySelector('.Confirmed span')
const worldDeath = document.querySelector('.Death span')

function getWorld(){
    getWorldApi(renderWorldApi)
}


function renderWorldApi(worldCovids){
    const TotalConfirmed = worldCovids.TotalConfirmed 
    const TotalDeaths = worldCovids.TotalDeaths
    worldConfirmed.innerHTML = TotalConfirmed
    worldDeath.innerHTML = TotalDeaths
}


function getWorldApi(callback){
   fetch(worldCovidApi)
   .then(response => {return response.json()})
   .then(callback)
}


getWorld()