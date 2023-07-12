const { openai } = require('./api.js')

async function createCompletion(dvmQuestion) {
  try {
    console.log("dvmQuestion", dvmQuestion);
    const response = await openai.createCompletion({
      model: 'davinci:ft-self-2023-04-30-05-11-03',
      prompt: dvmQuestion,
      max_tokens: 100
    })
    if (response.data) {
      console.log('choices: ', response.data.choices);
      const cleanedTextResponse = response.data.choices[0].text.replace(/\n/g, '').replace(/END/g, '');

      return cleanedTextResponse;
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

module.exports = {createCompletion}
