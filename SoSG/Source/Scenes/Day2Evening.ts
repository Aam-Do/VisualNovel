namespace SakuraGlade {
    export async function Day2Evening(): ƒS.SceneReturn {
        console.log("Day 2 Evening starting");

        await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innNight);
        await ƒS.update(2);
        await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Whew… I’m totally spent. All that investigating and interrogating has my head buzzing.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I better hit the pillows. Tomorrow is the big day… Ugh, I’m nervous…)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.blackout);
        await ƒS.update(2);

        // depending on points
        if (dataForSave.investigationPoints >= 15) {
            return "Day2Breakdown"
        } else {
            return "Day3Morning"
        }
    }
}