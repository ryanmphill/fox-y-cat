fetch('https://randomfox.ca/floof/')
    .then(response => response.json()) // Converts string of data to object
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector('#fox')
            foxImgElement.src = convertedData.image
        }
    )

// FETCH CAT IMG WITH ASYNC/AWAIT SYNTAX
const getTheCat = async () => {  // The 'async' is need on a FUNCTION when 'await' is inside of it. Lines 12 through 16 could work independently of the function.
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json() // Converts string of data to an array
        
    const catImgElement = document.querySelector('#cat')
    catImgElement.src = convertedData[0]
}

// INVOKE THE ASYNC/AWAIT FUNCTION
getTheCat()


/* FETCH CAT IMG WITH .THEN
fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    .then(response => response.json()) // Converts string of data to array
    .then(
        (convertedData) => {
            const catImgElement = document.querySelector('#cat')
            catImgElement.src = convertedData[0]
        }
    )
*/