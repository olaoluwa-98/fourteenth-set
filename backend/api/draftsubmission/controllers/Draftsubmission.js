'use strict';

/**
 * Draftsubmission.js controller
 *
 * @description: A set of functions called "actions" for managing `Draftsubmission`.
 */

module.exports = {

  /**
   * Retrieve draftsubmission records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.draftsubmission.search(ctx.query);
    } else {
      return strapi.services.draftsubmission.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a draftsubmission record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.draftsubmission.fetch(ctx.params);
  },

  /**
   * Count draftsubmission records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.draftsubmission.count(ctx.query);
  },

  /**
   * Create a/an draftsubmission record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.draftsubmission.add(ctx.request.body);
  },

  /**
   * Update a/an draftsubmission record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.draftsubmission.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an draftsubmission record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.draftsubmission.remove(ctx.params);
  }
};
