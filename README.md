# studio-asset-service-client-js
A javascript client for the studio asset service

## Usage:

```bash
npm install --save react-studio-uploader
```

Then:

```javascript
var studioAssetService = require('studio-asset-service-client-js');
var client = new studioAssetService('https://assetservice.com');

client.newAsset('message', function(err, asset){
  console.log(asset);
});

client.getAsset('uuid-3453-24245-3434', function(err, asset){
  console.log(asset);
});

client.getAssets(['uuid-3453-24245-3434', 'uuid-3453-24245-3333'], function(err, assets){
  console.log(assets);
});
```
