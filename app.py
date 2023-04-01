from flask import Flask, jsonify, request
from langchain import PromptTemplate, HuggingFaceHub, LLMChain
from langchain.llms import OpenAI
from gtts import gTTS
import os

app = Flask(__name__)
os.environ['HUGGINGFACEHUB_API_TOKEN'] = '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'
os.environ['OPENAI_API_KEY'] = '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'

# initialize HF LLM
flan_t5 = HuggingFaceHub(
    repo_id="google/flan-t5-xl",
    model_kwargs={"temperature": 1e-10}
)

davinci = OpenAI(model_name='text-davinci-003')

# build prompt template for simple question-answering
template = """
I want you to act as an actor who is practicing being very angry for his role. 

Here are some examples of good angry phrases to incorporate: 
- you fool!
- you silly!

The result should sound very angry and should be 2 sentences long.

Can you answer {question}?

Answer: """
prompt = PromptTemplate(template=template, input_variables=["question"])

llm_chain = LLMChain(
    prompt=prompt,
    llm=flan_t5
)


@app.route('/generate', methods=['POST'])
def generate_angry_response():
    print('hiiii')
    data = request.get_json()
    question = data['question']
    text = llm_chain.run(question)
    # tts = gTTS(text=text, lang='en', tld='com', slow=True)
    # tts.save('angry.mp3')
    # audio_url = request.url_root + 'static/angry.mp3'
    # return jsonify({'audio_url': audio_url})
    return jsonify({'text': text})


if __name__ == '__main__':
    if not os.path.exists('static'):
        os.makedirs('static')
    app.run(debug=True)
