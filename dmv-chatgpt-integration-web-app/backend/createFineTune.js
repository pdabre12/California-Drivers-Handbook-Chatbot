const { openai } = require('./api.js');
const fileId  = require('./fileId.js');

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: 'davinci:ft-self-2023-04-29-23-37-06'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()
