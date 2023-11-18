from pathlib import Path
from openai import OpenAI
client = OpenAI()

speech_file_path = Path(__file__).parent / "speech.mp3"
response = client.audio.speech.create(
  model="tts-1",
  voice="nova",
  input="Hello. This is a demonstration of OpenAI's text to speech API. The output from this script is an MP3 file that can also be fed into OpenAI's Whisper API for speech recognition."
)

response.stream_to_file(speech_file_path)