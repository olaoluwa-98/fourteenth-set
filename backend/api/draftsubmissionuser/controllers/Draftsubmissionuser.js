"use strict";

/**
 * Draftsubmissionuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Draftsubmissionuser`.
 */

module.exports = {
  /**
   * Retrieve draftsubmissionuser records.
   *
   * @return {Object|Array}
   */

  find: async ctx => {
    if (ctx.query._q) {
      return strapi.services.draftsubmissionuser.search(ctx.query);
    } else {
      return strapi.services.draftsubmissionuser.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a draftsubmissionuser record.
   *
   * @return {Object}
   */

  findOne: async ctx => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.draftsubmissionuser.fetch(ctx.params);
  },

  /**
   * Count draftsubmissionuser records.
   *
   * @return {Number}
   */

  count: async ctx => {
    return strapi.services.draftsubmissionuser.count(ctx.query);
  },

  /**
   * Create a/an draftsubmissionuser record.
   *
   * @return {Object}
   */

  create: async ctx => {
    const item = strapi.services.draftsubmissionuser.add(ctx.request.body);

    // This is a hack
    if (typeof (await item) == "string") {
      ctx.response.badRequest(await item);
    }

    return item;
  },

  /**
   * Update a/an draftsubmissionuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.draftsubmissionuser.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an draftsubmissionuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.draftsubmissionuser.remove(ctx.params);
  }
};
