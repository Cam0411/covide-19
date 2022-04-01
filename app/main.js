const CovidApi = 'https://api.covid19api.com/summary'
const dataCovid = document.querySelector('.container .grid .row')


function getStart(){
    getCovidApi(renderCovid)
}

function renderCovid(covids){
   const htmls = covids.Countries.map(covid => {
       return `
       <div class="col l-4 m-6 c-12"> 
       <div class="detail"> 
       <p class="country">${covid.Country} </p>
       <p class="NewConfirmed">Số ca mới nhất: ${covid.NewConfirmed}</p>
       <p class="TotalConfirmed">Tổng số ca: ${covid.TotalConfirmed}</p>
       <p class="NewDeaths">Số ca tử vong: ${covid.NewDeaths}</p>
       <p class="TotalDeaths">Tổng số ca tử vong: ${covid.TotalDeaths}</p>
       </div>
       </div>
       `
   })
   const html = htmls.join('')
   dataCovid.innerHTML = html
}


function getCovidApi(callback){
    fetch(CovidApi)
    .then(response => {return response.json()})
    .then(callback)
}

getStart()
