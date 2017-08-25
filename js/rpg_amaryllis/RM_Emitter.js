//=============================================================================
//  RMEmitter.js
//=============================================================================
/**
 * A wrapper for PIXI.utils.EventEmitter; works in both
 * browsers and compatible with node.
 */
function RM_Emitter() {
  this.initialize.apply(this, arguments);
}

RM_Emitter.prototype = Object.create(PIXI.utils.EventEmitter.prototype);
RM_Emitter.prototype.constructor = RM_Emitter;

