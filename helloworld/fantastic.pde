void setup()
{
  size(200,200);
  background(64);
  fill(255);
  noLoop();
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);  
}

void draw(){  
  text("Hello There!", 20, 20);
  println("Hello Error Log!");
  println("This is where you'll see 'console' messages. They show up when");
  println("You use the 'println' function.")
  println("");
  println("See 'fantastic.pde' for the Processing code that made this happen.");
}
