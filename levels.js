console.log("hello there!");
var mainlevels = [
  {
    name: "Level1",
    sublevels: [
      { completed: false },
      { completed: false },
      { completed: false },
      { completed: false },
      { completed: false }
    ]
  },
  {
    name: "Level2",
    sublevels: [
      { completed: false },
      { completed: false },
      { completed: false },
      { completed: false },
      { completed: false }
    ]
  },
  {
    name: "Level3",
    sublevels: [
      { completed: false },
      { completed: false },
      { completed: false },
      { completed: false },
      { completed: false }
    ]
  }
];
function RenderQuizMenu() {
  for (let index = 0; index < mainlevels.length; index++) {
    const element = mainlevels [index];
    var htmlstring = `<section class="Levelcontainer">
    <div class="mainleveldisplay"><h1>${element.name}</h1></div>
    <div class="subleveldisplay">
        <div class="unfinished"></div>
        <div class="unfinished"></div>
        <div class="unfinished"></div>
        <div class="unfinished"></div>
        <div class="unfinished"></div>
    </div>
    </section>`
    maincontainer.innerHTML+=htmlstring
  }
}
var maincontainer = document.querySelector("main");
RenderQuizMenu()
