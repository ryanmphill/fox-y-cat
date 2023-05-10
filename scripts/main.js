fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector('#fox')
            foxImgElement.src = convertedData.image
        }
    )