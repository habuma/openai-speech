import whisper
model = whisper.load_model("base")
text = model.transcribe("speech.mp3")
print(text['text'])
