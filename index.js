const axios = require('axios').default;

exports.handler = async function (event, context) {
  try {
    const {
      data: { message }
    } = await axios.get('https://dog.ceo/api/breeds/image/random');

    await axios.post(
      'https://discord.com/api/webhooks/<webhookId>/<webhookToken>?wait=true',
      { content: `A random dog for you!`, avatar_url: message }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Message sent! ${message}` })
    };
  } catch (error) {
    console.error(error);
  }
};
