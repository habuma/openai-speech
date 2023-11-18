OpenAI Whisper and Text-to-Speech Examples (Node.js)
===
There are two Node.js scripts in this folder:

 - tts.js - Converts text into speech, saving the audio in a file named 
   "speech.mp3".
 - whisper.js - Reads a file named "speech.mp3" and transcribes it to text.

Note that AFAIK there is no Node.js library for the Whisper API. Therefore,
the whisper.js script uses the Axios HTTP client library to invoke the API
directly. The tts.js script uses the OpenAI library for Node.js.

You will need an OpenAI API Key set to the `OPENAI_API_KEY` environment
variable.

Although you could provide any MP3 you wish to the Whisper script, obviously
the tts.js script will generate an MP3 file suitable for use with whisper.js.

To run these scripts, you'll need Node.js and NPM installed. Then, using
NPM, download the dependencies:

~~~
$ npm install
~~~

Then you can run each script, perhaps starting with tts.js to generate the
speech.mp3 file:

~~~
$ node tts.js
...
$ node whisper.js
~~~



