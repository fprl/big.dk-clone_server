"use strict";
const slugify = require("slugify");
const utilities = require("../utilities/getScaleBySize");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
        data.alphabetical = data.title[0].toLowerCase();
      }
      if (data.size) {
        data.scale = utilities.getScaleBySize(data.size);
      }
    },
    async beforeUpdate(params, data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
        data.alphabetical = data.title[0].toLowerCase();
      }
      if (data.size) {
        data.scale = utilities.getScaleBySize(data.size);
      }
    },
  },
};
