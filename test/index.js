const { InfisicalSDK } = require("../lib");

(async () => {
  const client = new InfisicalSDK({
    siteUrl: "https://bd87c650dfad.ngrok.app"
  });

  await client.auth().awsIamAuth.login({
    identityId: "8c7ed837-8246-4ec4-aa65-508cf1349529"
  });

  console.log(client.auth().getAccessToken());
})();
