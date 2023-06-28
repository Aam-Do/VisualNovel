namespace SakuraGlade {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Intro Scene starting");

    let text = {
      Nobu: {
        T0000: "Dieser Text ist über die text-Variable definiert. <p>Dies hingegen ist ein Paragraph.</p>",
        T0001: "",
        T0002: ""
      }
    };

    // cpms = characters per millisecond
    ƒS.Speech.setTickerDelays(80, 5000);
    // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.forestHome);
    await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positions.bottomcenter);
    ƒS.update(1);
    await ƒS.Speech.tell(characters.nobu, "Hi, I'm Nobu!");
    await ƒS.Speech.tell(characters.nobu, text.Nobu.T0000);
    await ƒS.Speech.tell(characters.nobu, "Und wie heißt du?");
    await ƒS.Speech.tell(characters.protagonist, "Hi ich bin der Protagonist aka der Spieler. " + "Ich heiße ", true, "Player");
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    characters.protagonist.name = dataForSave.nameProtagonist;
    console.log(dataForSave.nameProtagonist);
    await ƒS.Speech.tell(characters.nobu, "Hi " + dataForSave.nameProtagonist + "!");
    
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.nobu);
    ƒS.update(1);
  }
}