function init() {
  var stage = new createjs.Stage("mainCanvas");
  
  var graphics_mainmenu_button = new createjs.Graphics().beginFill("").drawRect(0, 0, 500, 100);
  var shape_mainmenu_button_create = new createjs.Shape(graphics_mainmenu_button);
  var shape_mainmenu_button_join = new createjs.Shape(graphics_mainmenu_button);
  
  stage.addChild(shape_mainmenu_button_create);
  stage.update();
}
