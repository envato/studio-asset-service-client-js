var assign = require('object-assign');

var Asset = function(assetJson) {
  this.assetJson = assetJson;
  assign(this, assetJson);
};

Asset.prototype.getVariant = function(variantName) {
  if (this.assetJson.variants) {
    for (var i = 0; i < this.assetJson.variants.length; i++) {
      if (this.assetJson.variants[i].name == variantName) {
        return this.assetJson.variants[i];
      }
    }
    return null;
  }
};
