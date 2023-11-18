import OpenAI from 'openai';
import fs from 'fs';

const openai = new OpenAI();

async function main() {
    const response = await openai.audio.speech.create({
        model: 'tts-1',
        voice: 'nova',
        input: "Hello. This is a demonstration of OpenAI's text to speech API. The output from this script is an MP3 file that can also be fed into OpenAI's Whisper API for speech recognition."
    });

    const mp3 = Buffer.from(await response.arrayBuffer());
    fs.writeFile("speech.mp3", mp3,  "binary",function(err) { });

}

main();