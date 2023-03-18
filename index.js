// code your solution here
function razzle() {
    console.log("You've been razzled!");
  }

  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
console.log(saturdayFun("paint the town red")); // This Saturday, I want to paint the town red!
