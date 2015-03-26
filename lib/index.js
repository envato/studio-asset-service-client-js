var request = require('superagent');
var Asset = require('./asset');

var StudioAssetService = function(assetServiceUrl) {
  this.assetServiceUrl = assetServiceUrl;
};

StudioAssetService.prototype.newAsset = function(assetType, callback) {
  request.post(this.assetServiceUrl + "/asset?type=" + assetType, function(err, res) {
    callback(err, res.body);
  });
};

StudioAssetService.prototype.getAsset = function(uuid, callback) {
  request.get(this.assetServiceUrl + "/asset/" + uuid, function(err, res) {
    if (res.body != null) {
      var asset = new Asset(res.body.asset);
    }
    callback(err, asset);
  });
};

StudioAssetService.prototype.getAssets = function(uuids, callback) {
  request.post(this.assetServiceUrl + "/assets", { assetIds: uuids }, function(err, res) {
    var assets = [];
    for (var i = 0; i < res.body.length; i++) {
      assets.push(new Asset(res.body[i]));
    }

    callback(err, assets);
  });
};

module.exports = StudioAssetService;
