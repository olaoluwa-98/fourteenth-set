'use strict';

/**
 * Draftsouveniersuggestion.js controller
 *
 * @description: A set of functions called "actions" for managing `Draftsouveniersuggestion`.
 */

module.exports = {

  /**
   * Retrieve draftsouveniersuggestion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.draftsouveniersuggestion.search(ctx.query);
    } else {
      return strapi.services.draftsouveniersuggestion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a draftsouveniersuggestion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.draftsouveniersuggestion.fetch(ctx.params);
  },

  /**
   * Count draftsouveniersuggestion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.draftsouveniersuggestion.count(ctx.query);
  },

  /**
   * Create a/an draftsouveniersuggestion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.draftsouveniersuggestion.add(ctx.request.body);
  },

  /**
   * Update a/an draftsouveniersuggestion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.draftsouveniersuggestion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an draftsouveniersuggestion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.draftsouveniersuggestion.remove(ctx.params);
  }
};
