const lambdaURL = 'https://api-gateway-url.amazonaws.com';
const sendPromptAndData = async (prompt, LocationData) => {
    const response = await fetch(lambdaURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt, data: LocationData}),
    });
    //assuming response is in format sample.json

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json().data;
}

export default sendPromptAndData();