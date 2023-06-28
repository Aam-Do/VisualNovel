namespace SakuraGlade {
    export async function FairieForest(): ƒS.SceneReturn {
        console.log("Intro Scene starting");
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positions.bottomright);
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
    }
}