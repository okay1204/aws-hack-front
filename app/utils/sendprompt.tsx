const lambdaURL = "https://api-gateway-url.amazonaws.com";

const sendPromptAndData = async (
  prompt: string,
  locationData: {
    latitude: number;
    longitude: number;
  }
) => {
  const response = await fetch(lambdaURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, data: locationData }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const jsonResponse = await response.json();
  return jsonResponse.data;
};

export default sendPromptAndData;
