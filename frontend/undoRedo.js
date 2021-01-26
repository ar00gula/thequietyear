    
    let undoStack = [map.toDataURL()];
    let redoStack = []

    let source = map.toDataURL()

  function getTopImage() {
    return undoStack[undoStack.length-1]
  }

  function undo() {
    redoStack.push(undoStack.pop());
    source = getTopImage()
    // debugger
    let img = new Image;
    img.src = source;
    // debugger
    ctx.clearRect(0,0,map.width,map.height);
    ctx.drawImage(img, 0, 0, map.width, map.height);
    // debugger
  }

  function redo() {
    undoStack.push(redoStack.pop());
    img.src = getTopImage();
    ctx.clearRect(
       0,0,map.width,map.height
    );
    return ctx.drawImage(
       img,0,0,map.width,map.height
    );
}