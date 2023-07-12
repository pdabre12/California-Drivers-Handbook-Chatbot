const { openai } = require('./api.js');

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('davinci:ft-self-2023-04-29-22-51-36')
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()