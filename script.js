const apiKey = 'krGnvQlrvdy4ubDduhPYT7141jpgIXLh'
const sampURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&begin_date=20140101&end_date=20160101&api-key=krGnvQlrvdy4ubDduhPYT7141jpgIXLh"
let queryTerm = '';
let numResult = 0;
let startYear = 0;
let endYear = 0;

const queryURLbase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`;

let articleCounter = 0;

const runQuery = (numArticles, queryURL) => {
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        console.log(response)
    })
}
$('#searchBTN').on('click', (e) => {
    e.preventDefault()
    runQuery(10, sampURL)

})


