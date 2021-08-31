//For Firefox we have to handle it in JavaScript
var vids = $("video");
$.each(vids, function () {
  this.controls = false;
});
//Loop though all Video tags and set Controls as false
