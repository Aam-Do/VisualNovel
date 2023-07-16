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
      background: "Images/Locations/forest.png"
    },
    sakuraGladeDay: {
      name: "Sakura Glade (Day)",
      background: "Images/Locations/park.png"
    },
    sakuraGladeEvening: {
      name: "Sakura Glade (Evening)",
      background: "Images/Locations/park.png"
    },
    sakuraGladeNight: {
      name: "Sakura Glade (Night)",
      background: "Images/Locations/park.png"
    },
    innDay: {
      name: "Cherrywood Lodge (Day)",
      background: "Images/Locations/isolated-japanese-room.png"
    },
    innNight: {
      name: "Cherrywood Lodge (Night)",
      background: "Images/Locations/isolated-japanese-room.png"
    },
    nobuHome: {
      name: "Nobu's Home",
      background: "Images/Locations/isolated-japanese-room.png"
    },
    sacredTree: {
      name: "Sacred Tree",
      background: "Images/Locations/sakura-tree-hill.png"
    },
    temple: {
      name: "Temple",
      background: "Images/Locations/shrine.png"
    },
    festival: {
      name: "Festival",
      background: "Images/Locations/japanese-festival.png"
    },
    bedroom: {
      name: "Bedroom",
      background: "Images/Locations/bedroom-evening.png"
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
    amaya: {
      name: "Amaya",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Amaya.png",
        // angry: "path",
        // happy: "path",
        // upset: "path"
      }
    },
    nobu: {
      name: "Nobu",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Nobu.png",
        // angry: "path",
        // happy: "path",
        // upset: "path"
      }
    },
    kohana: {
      name: "Kohana",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Kohana.png",
        // angry: "path",
        // happy: "path",
        // upset: "path"
      }
    },
    fumiko: {
      name: "Fumiko",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Fumiko.png",
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
      image: "Images/Items/phone.png",
      static: true,
      handler: hndItem,
    },
    idCard: {
      name: "Student ID-Card",
      description: "The ID-Card from my university.",
      image: "Images/Items/idcard.png",
      static: true,
      handler: hndItem,
    },
    permit: {
      name: "Permit",
      description: "A permit, handwritten by Amaya, authorizes me to enter the area around the Sacred Tree. Let the investigations begin!",
      image: "Images/Items/permit.png",
      static: true,
      handler: hndItem,
    },
    blackOoze: {
      name: "Black Ooze",
      description: "A gooey black slime I found at the Sacred Tree. I wonder where it came from?",
      image: "Images/Items/blackgoo.png",
      static: true,
      handler: hndItem,
    },
    brokenEarring: {
      name: "Broken Crystal Earring",
      description: "A beautiful crystal earring I picked up near the Sacred Tree. It seems to have broken and its counterpart is nowhere to be found. How did it get there?",
      image: "Images/Items/crystalearring.png",
      static: true,
      handler: hndItem,
    },
    medicalNotice: {
      name: "Medical Notice",
      description: "A medical record that factually explains a rare and incurable disease. It’s addressed to someone called “Hina”. It’s dated the day before the incident.",
      image: "Images/Items/medicalnotice.png",
      static: true,
      handler: hndItem,
    },
    replica: {
      name: "Replica of the Moon Bead",
      description: "A glass replica of the Moon Bead. It was found in place of the original at the Sacred Tree. It’s smooth and quite heavy, I can only imagine what the original looks like!",
      image: "Images/Items/replica.png",
      static: true,
      handler: hndItem,
    },
    moonBead: {
      name: "The Moon Bead",
      description: "The Moon Bead. It’s perfectly round and smooth and made from a material I’ve never seen before. Legend has it it’s a tear from the Moon God and can fulfill wishes.",
      image: "Images/Items/replica.png",
      static: true,
      handler: hndItem,
    },
    crystalEarring: {
      name: "Crystal Earring",
      description: "The undamaged counterpart of Fumiko’s crystal earring. She gave it to me to remember her. ",
      image: "Images/Items/replica.png",
      static: true,
      handler: hndItem,
    }
  };

  function hndItem(_event: CustomEvent): void {
    if (_event.type == "pointerdown") {
      console.log(_event);
      console.log(currentCharacter);
      let targetId: string = _event.detail.replace(/ /g, "_");
      let targetDescription: HTMLElement = document.querySelector('#' + targetId + '> description');
      console.log(targetDescription);
      let descriptions = document.querySelectorAll('.show');
      if (targetDescription.classList.contains('show')) {
        targetDescription.classList.remove('show');
      }
      else {
        for (let description of descriptions) {
          description.classList.remove('show');
        }
        targetDescription.classList.add('show');
      }
    }
  }

  export let currentCharacter: ƒS.CharacterDefinition;

  export let dataForSave = {
    // save item description updates
    // save first times in open order scenes
    // save scenes already played on day 1
    // save points already gotten / items already showed
    nameProtagonist: "",
    genderProtagonist: "",
    investigationPoints: 0,
    day1TalkedTo: Array(),
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
      { scene: FairieForest, name: "Fairie Forest" },
      { scene: WelcomeSakuraGlade, name: "Welcome to Sakura Glade" },
      { scene: Day1Morning, name: "Day 1 Morning" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
