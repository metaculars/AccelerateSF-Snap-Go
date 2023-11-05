const API_BASE_URL = 'http://api.expo.demo.metaculars.com';
const csrfToken = 'UlTLVga66iUYJPKd3zXnqcx5Nsr3OlaacRErsBOpzGgmKWJzEYmEVERXeci2G87n';

export async function evaluateImage(image) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', 'Describe the image');
    let res = await fetch(`${API_BASE_URL}/api/v1/chat/image`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: formData
    });

    return (await res.json()).result;
}

export async function evaluateText(text, language) {

    console.log(text);

   const query = `Can you tell me the problem category whether it is Street or Sidewalk Cleaning , Graffiti or Encampment issue from the following issue description, describe the problem in 10 words and any additional details that matches with the following information. Give your response in following language and in strict JSON format with fields ‘Problem_Category’, ‘Problem_Description’, ‘Additional_details’

   Additional Details can be chosen as: 
   If Problem_Category is Graffiti, then 
   Bike rack, 
   Building commercial, 
   Building residential
   Building -other
   City receptacle
   Fire/Police Callbox
   Fire hydrant
   Mail box
   Parking meter
   Street 
   Other
   If Problem_Category is Street or Sidewalk Cleaning, then 
   Transit Shelter
   Electronics/E-waste
   Furniture
   Glass
   Human/Animal Waste
   Medical Waste
   Mattress
   Oil/Paint/Other Spill
   Overflowing Public Garbage Can
   Other loose Garbage/Debris
   Other Contained Garbage
   
   issue Description: '${text}'
   Language : ${language}`
   ;

    let res = await fetch(`${API_BASE_URL}/api/v1/chat/text`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: encodeURI(query),
            model: 'gpt-4'
        })
    });

    return (await res.json()).result;

}