//=============================================================================
//  RM_Ticker
//=============================================================================


/**
 * Wrapper for PIXI.ticker.Ticker
 *
 * Allows you to create your own personal update function for
 * listening to your own events or objects.
 */
function RM_Ticker() {
  this.initialize.apply(this, arguments);
}

RM_Ticker.prototype = Object.create(PIXI.ticker.Ticker.prototype);
RM_Ticker.prototype.constructor = RM_Ticker;