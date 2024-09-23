
let left = -80;
let num = 0;
const id = setInterval(() => {
  if (num === 3) {
    const e = $("#bar");
    $(".h1").click(function () {

      if (Math.round(left) === 0) {
        const id1 = setInterval(() => {
          if (Math.round(left) === -80) {
            clearInterval(id1);
          } else {
            left -= 0.85;
            console.log(left);
            e.css("left", left + "em");
          }
        }, 1);
      }
      else if (Math.round(left) === -80) {
        const id1 = setInterval(() => {
          if (Math.round(left) === 0) {
            console.log(left);
            clearInterval(id1);
          } else {
            left += 0.85;
            e.css("left", left + "em");
          }
        }, 1);
      }

    })
    clearInterval(id);
  }
  num++;
}, 1);