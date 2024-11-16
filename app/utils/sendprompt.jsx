const lambdaURL = 'https://api-gateway-url.amazonaws.com';
const sendPromptAndData = async (prompt, LocationData) => {
    const response = await fetch(lambdaURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt, data: LocationData}),
    });
    //assuming response is in format 
    // {
    //     "status": 200,
    //     "message": "Success"
    //     "data": {
    //          [
    //             {name, x, y, item, quality, price},
    //         ]
    //     }
    // }
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    //extract data as an array of objects
    let cardItems = [];
    response.json().then(data => {
        data.parse().data.forEach(element => {
            //element is an object with keys name, x, y, item, quantity, price
            cardItems.push(element);
        });
    });
    return cardItems;
}

export default sendPromptAndData();