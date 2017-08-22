//=============================================================================
//  Extensions.js
//=============================================================================

/**
 * A convenient parsing algorithm for handling new plugin parameters.
 * @static
 * @method convenientParser
 * @param {Object} object
 * @returns {Object}
 */
JsonEx.convenientParser = function (object) {
  'use strict';
  for(let prop in object) {
    const value = object[prop];
    if(!Number.isNaN(Number(value))) {
      object[prop] = Number(value);
    }
    else {
      try {
        if(typeof JSON.parse(value) === 'object') {
          object[prop] = this.convenientParser(JSON.parse(value));
        }
      }
      catch(err) {
        // console.log(err);
      }
    }
  }
  return object;
};