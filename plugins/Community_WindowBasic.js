/*:
*
* @author Kino
* @plugindesc This plugin allows you to edit your Windows in RPGMakerMV
* by scene using the new plugin parameters. <CMMWinBasic>
*
* @param windows
* @text RPG Windows
* @desc Adjusts the size of each RPGMakerMV Window
* @type struct<WindowBasic>
*
* @help
* This plugin allows you to modify the size of each window
* in RPGMakerMV by scene.
*/

/*~struct~WindowBasic:
*
* @param scenes
* @text Scene List
* @desc A list of scenes you wish to edit in your RPGmakerMV game.
* @type struct<Scene>[]
*
*/

/*~struct~Scene:
*
* @param name
* @text Scene Name
* @desc The name of the Scene in the code.
* @default Scene_Title
*
* @param windows
* @text Window List
* @desc A list of windows you wish to edit in your RPGMakerMV game.
* @type struct<Window>[]
*
*/

/*~struct~Window:
*
* @param name
* @text Window Name
* @desc The window name in the code.
* @default Window_Title
* 
* @param x
* @text X Position
* @default 0
*
* @param y
* @text Y Position
* @default 0
*
*
* @param width
* @text Width
* @default 0
*
* @param height
* @text Height
* @default 0
* 
*
*/

(function () {

  $plugins.filter(function (plugin) { /<CMMWinBasic>/ig.test(plugin.description); })[0].parameters;
  
  function setup() {
    // Scene_Base.prototype.create = function () {
      
    // }
  } 
 
  setup();
})();