namespace SakuraGlade {
    export async function Day2Amaya(): ƒS.SceneReturn {
        console.log("Day 2 Amaya starting");

        if (!dataForSave.day2TalkedTo.includes(characters.amaya)) {
            await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(70, 100));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.amaya, "I see you're back from your investigation, Cub. I hope it's proven to be insightful.");
            await ƒS.Speech.tell(characters.amaya, "Any new clues?");
            await ƒS.Speech.tell(characters.protagonist, "Well, I certainly did find some stuff.");
            await ƒS.Speech.tell(characters.amaya, "You did indeed?");
            await ƒS.Speech.tell(characters.amaya, "If you will show me, we can figure out what it tells us.");
            // [open inventory and present at least one item - dialogue according to items then either go back or show more]
            await ƒS.Inventory.open();
            dataForSave.day2TalkedTo.push(characters.amaya);
        } else {
            // await ƒS.Progress.delay(1);
            await ƒS.Location.show(locations.sacredTree);
            await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(70, 100));
            await ƒS.update(2);
            ƒS.Speech.show();
            await ƒS.Speech.tell(characters.amaya, "Back from sniffing around, Cub? Did you find anything interesting?");
            // [either choose from inventory or go back]
        }
        // for testing 
        await ƒS.Character.hide(characters.amaya);
        await ƒS.update(1);

        ƒS.Speech.clear();
        ƒS.Speech.hide();

        // if back
        // await ƒS.Speech.tell(characters.protagonist, "That's all I have for now.");
        // await ƒS.Speech.tell(characters.amaya, "If you find out anything new, you know where to find me.");
        // hide amaya
        // day2Locations();
    }
}