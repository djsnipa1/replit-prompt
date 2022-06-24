var svgBorder = Snap(".svgBorder");
svgBorder.attr({
  stroke: "#000",
  strokeWidth: 5,
  fill: "none"
});

var borderState = svgBorder.path();
borderState.attr({
  d: "M300-10c0,0,0,164,0,410c0,232,0,410,0,410"
});

$( "#menu__handle" ).click(function() {
  $( "#menu" ).toggleClass( "menu--open" );
  
  if($( "#menu" ).hasClass( "menu--open" )) {
      borderState.animate({ d: "M300-10c0,0,295,164,295,410c0,232-295,410-295,410" }, 1000, mina.elastic);
  } 
  else {
    borderState.animate({ d: "M300-10c0,0,0,164,0,410c0,232,0,410,0,410" }, 1000, mina.elastic);
  }
  
});

