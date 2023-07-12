### Steps to run

```sh
npm install # or yarn
```

Next, set the environment variable for your OpenAI API Key

```sh
export OPENAI_KEY="your-api-key"
```

### Running the app

First, upload the file with the example or custom data set to OpenAI:

```sh
node uploadFile.js
```

Next, use the File ID that is logged out to create a new fine tune based on davinci by updating the `training_file` in `createFineTune.js`.

Finally, create the fine tune:

```sh
node createFineTune.js
```

### Listing your Fine Tunes

```sh
node listFineTunes.js
```

### Testing it out

Now that the fine tune has processed and our. new model is ready, we can try it out.

Open createCompletion.js. Here, update the fine_tuned_model value with your model name.

Next, run the script:

```sh
node createCompletion.js
```