"use strict";
const slugify = require("slugify");
const { getScaleBySize } = require("../utilities/getScaleBySize");
const { getAlphabetical } = require("../utilities/getAlphabetical");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
      if (data.shortTitle) {
        data.alphabetical = getAlphabetical(data.shortTitle)
      }
      if (data.size) {
        data.scale = getScaleBySize(data.size);
      }
    },
    async beforeUpdate(params, data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
      if (data.shortTitle) {
        data.alphabetical = getAlphabetical(data.shortTitle)
      }
      if (data.size) {
        data.scale = getScaleBySize(data.size);
      }
    },
  },
};
