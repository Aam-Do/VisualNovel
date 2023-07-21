namespace SakuraGlade {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("Secrets of Sakura Glade starting");

  // cpms = characters per millisecond
  ƒS.Speech.setTickerDelays(40, 5000);

  // Preparation for needed media -> put into definitions

  // export let transition = {
  //   puzzle: {
  //     duration: 1,
  //     alpha: "path",
  //     edge: 1
  //   }
  // };

  export let sound = {
    // themes
    forest: "Audio/fantasy-classical-themes.mp3",
    village: "Audio/koto.mp3",
    festival: "Audio/ongaku.mp3",
    nobu: "Audio/japan-origami.mp3",
    kohana: "Audio/among-the-cherry-blossom.mp3",
    amaya: "Audio/the-shinning-moon-princess.mp3",
    fumiko: "Audio/in-the-place-far-away.mp3",
    sad: "Audio/the-garden-of-ajisai.mp3",
    // SFX
    item: "Audio/pick-up-item.wav",
    crowd: "Audio/crowd.mp3"
  };

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
      background: "Images/Locations/park_evening.png"
    },
    sakuraGladeNight: {
      name: "Sakura Glade (Night)",
      background: "Images/Locations/park_night.png"
    },
    innDay: {
      name: "Cherrywood Lodge (Day)",
      background: "Images/Locations/inn.png"
    },
    innNight: {
      name: "Cherrywood Lodge (Night)",
      background: "Images/Locations/inn_night.png"
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
        neutral: "Images/Characters/Kohana_neutral.png",
        sad: "Images/Characters/Kohana_sad.png",
        smiling: "Images/Characters/Kohana_smiling.png",
        surprised: "Images/Characters/Kohana_surprised.png",
        thinking: "Images/Characters/Kohana_thinking.png"
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
      image: "Images/Items/moonBead.png",
      static: true,
      handler: hndItem,
    },
    crystalEarring: {
      name: "Crystal Earring",
      description: "The undamaged counterpart of Fumiko’s crystal earring. She gave it to me to remember her. ",
      image: "Images/Items/earring.png",
      static: true,
      handler: hndItem,
    }
  };

  export let extraItemInteraction: ƒS.ItemDefinition;
  export let currentCharacter: ƒS.CharacterDefinition;

  // item description updates
  export let updatedItemDescriptions = {
    blackOoze: "Black slime that must have drooped from Amaya’s cap while she was patrolling the Sacred Tree on the night of the incident. Why didn’t she notice it fall down?",
    brokenEarring: "An earring belonging to Fumiko that I found near the Sacred Tree. It’s broken, unfortunately. She claims to have lost it during the day of the incident.",
    medicalNotice: "A medical record that factually explains Hina’s incurable “mummy disease”. The news must have been heartbreaking… He claims to have gone out for a stroll and prayed at the Sacred Tree around 1:30 am.",
    replica: "A glass replica of the Moon Bead. It was found in place of the original at the Sacred Tree. I believe it was stolen from the temple sometime after midnight while Kohana was bathing."
  };

  export let dataForSave = {
    nameProtagonist: "",
    genderProtagonist: "",
    investigationPoints: 0,
    day1TalkedTo: Array(),
    day2TalkedTo: Array(),
    itemsUpdated: Array(),
    pointsReceived: Array(),
    inventory: Array()
  };

  for (let updatedItem of dataForSave.itemsUpdated) {
    switch (updatedItem) {
      case items.blackOoze:
        items.blackOoze.description = updatedItemDescriptions.blackOoze;
        break;
      case items.replica:
        items.replica.description = updatedItemDescriptions.replica;
        break;
      case items.medicalNotice:
        items.medicalNotice.description = updatedItemDescriptions.medicalNotice;
        break;
      case items.brokenEarring:
        items.brokenEarring.description = updatedItemDescriptions.brokenEarring;
        break;
    }
  }


  export function hndItem(_event: CustomEvent): void {
    if (_event.type == "pointerdown") {
      console.log('clicked on the item (new class)');
      let targetName = _event.detail;
      let targetId: string = targetName.replace(/ /g, "_");
      let targetElement: HTMLElement = document.querySelector('#' + targetId);
      let present: HTMLButtonElement = document.querySelector('#present');

      if (targetElement.classList.contains('selected')) {
        targetElement.classList.remove('selected');
      } else {
        if (document.querySelector('.selected')) {
          document.querySelector('.selected').classList.remove('selected');
        }
        targetElement.classList.add('selected');
      }

      // if during day2 investigations
      if (currentCharacter) {
        if (targetElement.classList.contains('selected')) {
          present.classList.remove('hidden');
        } else {
          present.classList.add('hidden');
        }
      }

      // if good ending final scene
      if (extraItemInteraction == items.moonBead) {
        if (targetName == items.permit.name && targetElement.classList.contains('selected')) {
          present.classList.remove('hidden');
        } else {
          present.classList.add('hidden');
        }

      }

      // if amaya permit scene
      if (extraItemInteraction == items.permit) {
        if (targetName == items.permit.name && targetElement.classList.contains('selected')) {
          present.classList.remove('hidden');
        } else {
          present.classList.add('hidden');
        }
      }
    }
  }

  function credits(): void {
    ƒS.Text.print("<h2>Credits</h2><div class='credits-text'><li><span><b>Concept, Characterdesign, Script: </b></span><span>Amélie Dell'Oro</span></li><li><span><b>Character Sprites: </b></span><span>Amélie Dell'Oro (<i class='fa-brands fa-instagram'></i> @ivy_arts03)<br>GinGin<br>Anna Borisovich (<i class='fa-brands fa-instagram'></i> @_alluusion)</span></li><li><span><b>Item Sprites: </b></span><span>Amélie Dell'Oro</span></li><li><span><b>Backgrounds: </b></span><span>Amélie Dell'Oro<br>Midjourney</span></li><li><span><b>Music: </b></span></li><ul><li><span><b>In the Place Far Away, The Garden of Ajisai: </b></span><span>HarumachiMusic on Pixabay</span></li><li><span><b>Ongaku, Koto: </b></span><span>Monument_Music on Pixabay</span></li><li><span><b>Japan Origami: </b></span><span>FreeGroove on Pixabay</span></li><li><span><b>Among The Cherry Blossom: </b></span><span>kaazoom on Pixabay</span></li><li><span><b>The Shinning Moon Princess: </b></span><span>OB-LIX on Pixabay</span></li></ul><li><span><b>SFX: </b></span><span>FreeSound.org</span></li></div><span><b>Special thanks to GinGin and TimTim for their input, support and playtesting!</b></span>");
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
      case ƒ.KEYBOARD_CODE.ESC:
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

    // Inventory button 
    let invButton: HTMLElement = document.querySelector("#inv-open");
    invButton.addEventListener("pointerdown", async function (_event: Event) {
      _event.stopPropagation();
      console.log("Open Inventory");
      await Inventory.open();
    });

    console.log('it should now add items');
    console.log(dataForSave.inventory);
    for (let item of dataForSave.inventory) {
      console.log('add items to inventory!');
      Inventory.add(item);
    }

    // Scene Hierarchy 
    let scenes: ƒS.Scenes = [
      { scene: Start, name: "Start Scene" },
      { scene: Intro, name: "Intro Scene" },
      { scene: FairieForest, name: "Fairie Forest" },
      { scene: WelcomeSakuraGlade, name: "Welcome to Sakura Glade" },
      { scene: Day1Morning, name: "Day 1 Morning", next: "Day1Locations" },

      { id: "Day1Locations", scene: day1Locations, name: "Day 1 Locations" },
      { id: "Day1Kohana", scene: Day1Kohana, name: "Day 1 Kohana", next: "Day1Locations" },
      { id: "Day1Amaya", scene: Day1Amaya, name: "Day 1 Amaya", next: "Day1Locations" },
      { id: "Day1Nobu", scene: Day1Nobu, name: "Day 1 Nobu", next: "Day1Locations" },

      { id: "Day1Fumiko", scene: Day1Fumiko, name: "Day 1 Fumiko" },

      { scene: Day2Morning, name: "Day 2 Morning" },
      { scene: Day2SacredTree, name: "Day 2 Sacred Tree", next: "Day2Amaya" },

      { id: "Day2Locations", scene: day2Locations, name: "Day 2 Locations" },
      { id: "Day2Amaya", scene: Day2Amaya, name: "Day 2 Amaya", next: "Day2Locations" },
      { id: "Day2Kohana", scene: Day2Kohana, name: "Day 2 Kohana", next: "Day2Locations" },
      { id: "Day2Nobu", scene: Day2Nobu, name: "Day 2 Nobu", next: "Day2Locations" },
      { id: "Day2Fumiko", scene: Day2Fumiko, name: "Fumiko", next: "Day2Locations" },

      { id: "Day2Evening", scene: Day2Evening, name: "Day 2 Evening", next: "Day3Morning" },

      { id: "Day2Breakdown", scene: Day2Breakdown, name: "Day 2 Breakdown", next: "Day3Morning" },

      { id: "Day3Morning", scene: Day3Morning, name: "Day 3 Morning", next: "Day3Showdown" },
      { id: "Day3Showdown", scene: Day3Showdown, name: "Day 3 Showdown" },

      { id: "BadEnding", scene: BadEnding, name: "Bad Ending", next: "EndScene" },
      { id: "BittersweetEnding", scene: BittersweetEnding, name: "Bittersweet Ending", next: "EndScene" },
      { id: "GoodEnding", scene: GoodEnding, name: "Good Ending", next: "EndScene" },

      // empty scene to stop the program
      { id: "EndScene", scene: EndScene, name: "End Scene" }

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
