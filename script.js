const apiKey = 'krGnvQlrvdy4ubDduhPYT7141jpgIXLh'
const sampURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&begin_date=20140101&end_date=20160101&api-key=krGnvQlrvdy4ubDduhPYT7141jpgIXLh"
const log = console.log


const queryURLbase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`;



const runQuery = (numArticles, queryURL) => {
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        log(queryURL)
        log(response)
        numArticles =  parseInt(numArticles)
        log(typeof numArticles)
        for(let i = 0; i < numArticles; i++){
            const responseDiv = $('<div>')
            const headLine = $('<h3>').text(response.response.docs[i].headline.main)
            responseDiv.append(headLine)
            $('#resultDiv').append(responseDiv)
        }
    })
}
$('#searchBTN').on('click', (e) => {
    e.preventDefault()
    let searchTerm = $('#search-term').val().trim()
    let newURL = `${queryURLbase}&q=${searchTerm}`;
    const startYear = $('#startYear').val().trim();    
    const endYear = $('#endYear').val().trim();
    let numArticles = $('#numRecords').val();
    
   
         
    if(parseInt(startYear)){
        newURL = `${newURL}&begin_date=${startYear}0101`
    } 
    if(parseInt(endYear)){
       newURL = `${newURL}&end_date=${endYear}0101`
    }

    
    
    runQuery(numArticles, newURL)

})


