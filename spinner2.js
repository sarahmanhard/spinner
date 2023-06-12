const animation = ['|', '/', '-', '\\'];
let index = 0;
function animate () {
  ProcessingInstruction.stdout.write(`\r${animation[index]}`);
  index = (index + 1) % animation.length;
}
setInterval(animate, 200);