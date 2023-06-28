namespace SakuraGlade {
    export async function FairieForest(): ƒS.SceneReturn {
        console.log("Intro Scene starting");

        // cpms = characters per millisecond
        ƒS.Speech.setTickerDelays(40, 5000);

        ƒS.Speech.hide();
        
        await ƒS.Progress.delay(5);
        ƒS.Speech.show()
        await ƒS.Speech.tell(characters.protagonist, "(<i>What</i>)");
        await ƒS.Location.show(locations.fairieForest);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positions.bottomright);
        ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, "Hi, I'm Nobu!");
        await ƒS.Speech.tell(characters.nobu, "Und wie heißt du?");
        await ƒS.Speech.tell(characters.protagonist, "Hi ich bin der Protagonist aka der Spieler. " + "Ich heiße ", true, "Player");
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        characters.protagonist.name = dataForSave.nameProtagonist;
        console.log(dataForSave.nameProtagonist);
        await ƒS.Speech.tell(characters.nobu, "Hi " + dataForSave.nameProtagonist + "!");

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.nobu);
    }
}