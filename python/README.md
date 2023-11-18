OpenAI Whisper and Text-to-Speech Examples (Python)
===
There are two Python scripts in this folder:

 - tts.py - Converts text into speech, saving the audio in a file named 
   "speech.mp3".
 - whispr.py - Reads a file named "speech.mp3" and transcribes it to text.

Note that I named the 2nd script "whispr.py" so that there wouldn't be a
conflict with the actual "whisper" module that it imports.

You will need an OpenAI API Key set to the `OPENAI_API_KEY` environment
variable.

Although you could provide any MP3 you wish to the Whisper script, obviously
the tts.py script will generate an MP3 file suitable for use with whispr.py.

To run these scripts, you'll need Python and Pip installed. Then, using
Pip, download the dependencies:

~~~
$ pip install -U openai
$ pip install -U openai-whisper
~~~

Then you can run each script, perhaps starting with tts.py to generate the
speech.mp3 file:

~~~
$ python tts.py
...
$ python whispr.py
~~~



