const style = function(styleCode, text) {
  return "\033["+styleCode+"m"+text+"\033[0m";
}

const redFg = function(text) {
  return style(31, text);
}

const greenFg = function(text) {
  return style(32, text);
}

const yellowFg = function(text) {
  return style(33, text);
}

const bold = function(text) {
  return style(1, text);
}

const underline = function(text) {
  return style(4, text);
}

const printNewline = function() {
  console.log();
}

const printHeadline = function(text) {
  console.log(yellowFg(bold(underline("\n"+text+"\n"))));
}

exports.style = style;
exports.redFg = redFg;
exports.greenFg = greenFg;
exports.yellowFg = yellowFg;
exports.bold = bold;
exports.underline = underline;
exports.printNewline = printNewline;
exports.printHeadline = printHeadline;
