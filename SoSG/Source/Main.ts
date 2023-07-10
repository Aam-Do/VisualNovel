namespace SakuraGlade {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("Secrets of Sakura Glade starting");

  // Preparation for needed media -> put into definitions

  // export let transition = {
  //   puzzle: {
  //     duration: 1,
  //     alpha: "path",
  //     edge: 1
  //   }
  // };

  // export let sound = {
  //   // themes
  //   music: "path",
  //   // SFX
  //   drop: "path"
  // };

  export let locations = {
    forestHome: {
      name: "Forest Home",
      background: "Images/Locations/hiking-trail.png"
    },
    fairieForest: {
      name: "Fairie Forest",
      background: "Images/Locations/rainforest.png"
    },
    blackout: {
      name: "Blackout",
      background: "Images/Locations/Blackout.jpg"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: "You"
    },
    nobu: {
      name: "Nobu",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/NobuSketch.png",
        // angry: "path",
        // happy: "path",
        // upset: "path"
      }
    }
  };

  export let items = {
    phone: {
      name: "Phone",
      description: "My phone. It ran out of battery about an hour ago. I really should have brought my powerbank.",
      image: "Images/Characters/NobuSketch.png",
      static: true
    },
    idCard: {
      name: "Student ID-Card",
      description: "The ID-Card from my university.",
      image: "Images/Characters/NobuSketch.png",
      static: true,
      handler: hndItem,
    }
  };

  function hndItem(_event: CustomEvent): void {
    console.log(_event);
    console.log(currentCharacter);
    // reagiert auf pointer down und up
  }

  export let currentCharacter: ƒS.CharacterDefinition;

  export let dataForSave = {
    // save item description updates
    // save first times in open order scenes
    nameProtagonist: "",
    genderProtagonist: "",
    nobuPoints: 0,
    amayaPoints: 0,
    kohanaPoints: 0,
    fumikoPoints: 0
  };

  function credits(): void {
    ƒS.Text.print("");
  }

  // Menu shortcuts
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    credits: "Credits",
    close: "Close"
  };

  let gameMenu: ƒS.Menu;

  // open = Menü ist offen und false = Menü ist zu 
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        credits();
    }
  }

  //  Menu shortcuts
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");
    // Menu button 
    let button: HTMLElement = document.querySelector("#openMenu");
    button.addEventListener("pointerdown", function (_event: Event) {
      _event.stopPropagation();
      if (menuIsOpen) {
        console.log("Close");
        gameMenu.close();
        menuIsOpen = false;
      }
      else {
        console.log("Open");
        gameMenu.open();
        menuIsOpen = true;
      }
    });
    // Scene Hierarchy 
    let scenes: ƒS.Scenes = [
      { scene: Start, name: "Start Scene" },
      { scene: Intro, name: "Intro Scene" },
      { scene: FairieForest, name: "Fairie Forest" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
