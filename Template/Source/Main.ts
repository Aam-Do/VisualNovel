namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  // Preparation for needed media -> put into definitions

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "path",
      edge: 1
    }
  };

  export let sound = {
    // themes
    music: "path",
    // SFX
    drop: "path"
  };

  export let locations = {
    beachDay: {
      name: "Beach Day",
      background: "path"
    }
  };

  export let characters = {
    narrator: {
      name: "path"
    },
    protagonist: {
      name: "path"
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "path",
        happy: "path",
        upset: "path"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}