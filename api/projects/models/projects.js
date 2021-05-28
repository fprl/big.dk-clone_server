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
      }
      if (data.shortTitle) {
        const firstLetter = data.shortTitle[0];
        if (typeof firstLetter === "number") {
          data.alphabetical = "#";
        } else if (firstLetter === "x" || "w" || "z") {
          data.alphabetical = "xwz";
        } else {
          data.alphabetical = data.shortTitle[0].toLowerCase();
        }
      }
      if (data.size) {
        data.scale = utilities.getScaleBySize(data.size);
      }
    },
    async beforeUpdate(params, data) {
      if (data.title) {
        data.slug = slugify(data.title, { lower: true });
      }
      if (data.shortTitle) {
        const firstLetter = data.shortTitle[0];
        if (typeof firstLetter === "number") {
          data.alphabetical = "#";
        } else if (firstLetter === "x" || "w" || "z") {
          data.alphabetical = "xwz";
        } else {
          data.alphabetical = data.shortTitle[0].toLowerCase();
        }
      }
      if (data.size) {
        data.scale = utilities.getScaleBySize(data.size);
      }
    },
  },
};
