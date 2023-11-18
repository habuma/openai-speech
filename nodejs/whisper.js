import axios from 'axios';
import fs from 'fs';

async function main() {
    const response = await axios.post(
        'https://api.openai.com/v1/audio/transcriptions', 
        {
            'file': fs.createReadStream('./speech.mp3'), 
            'model': 'whisper-1'
        },
        
        {
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

    console.log(response.data.text);
}

main();

