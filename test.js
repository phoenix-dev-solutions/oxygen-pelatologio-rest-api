const OxygenRestApi = require('./index').default;

const oxygen = new OxygenRestApi({
  apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
  version: 'v1',
  sandbox: true,
});

const testing = async function () {
  const contacts = await oxygen
    .get('contacts')
    .then((response) => {
      // Successful request
      // console.log('Response Status:', response.status);
      // console.log('Response Headers:', response.headers);
      // console.log('Response Data:', response.data);

      return response.data;
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log('Response Status:', error.response.status);
      console.log('Response Headers:', error.response.headers);
      console.log('Response Data:', error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

  // console.log('List contacts', contacts.data);

  const getSearchContact = await oxygen.get('contacts', { code: '1000' });
  console.log('Search contacts', getSearchContact.data);
};

testing();
