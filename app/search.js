const search = document.querySelector('.search__box')
const title = document.querySelector('.container .title ')
const data = document.querySelector('.container .grid .row')
const searchIcon = document.querySelector('.search')
function searchValue(){
    window.addEventListener('keypress',event => {
        if (event.keyCode == 13){
            if (!search.value == '' ){
          getSearch(search.value)
            title.innerHTML = `Kết Quả Tìm Kiếm: ' ${search.value} ' `
            search.value = '' 
            }
       
        }
    })
}

function getSearch(query){
    const searchApi = `https://api.covid19api.com/total/country/${query}`
    fetch(searchApi)
    .then(response => {return response.json()})
    .then(displayCountry)
    .catch(displayError)
}
function displayCountry(covid){
   data.innerHTML = `
   <div class="col l-4 m-6 c-12"> 
   <div class="detail"> 
   <p class="country">${covid[covid.length - 1].Country} </p>
   <p class="NewConfirmed">Tổng Số ca: ${covid[covid.length - 1].Confirmed}</p>
   <p class="NewDeaths">Tổng Số ca tử vong: ${covid[covid.length - 1].Deaths}</p>
   </div>
   </div>
   `
}
function searchIconEvent(){
    searchIcon.addEventListener('click',() => {
        if (!search.value == '' ){
            getSearch(search.value)
              title.innerHTML = `Kết Quả Tìm Kiếm: ' ${search.value} ' `
              search.value = '' 
        }
    })
}
function displayError(){
    data.innerHTML = `${'Kết Quả Không Nhận Được. Vui Lòng Thử Lại'}`
}
searchValue()
searchIconEvent()