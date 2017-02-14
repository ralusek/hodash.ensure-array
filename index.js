'use strict';

/**
 *
 */
module.exports = function ensureArray(value, config) {
  config = config || {};
  if (value === undefined || value === null) return [];
  if (Array.isArray(value)) {
    if (config.asCopy) return value.slice();
    return value;
  }
  return [value];
}
