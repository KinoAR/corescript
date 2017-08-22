//=============================================================================
//  Window_Patches.js
//=============================================================================

Window_Base.prototype.textWidthEx = function (text) {
  return this.drawTextEx(text, 0, this.contents.height);
};
