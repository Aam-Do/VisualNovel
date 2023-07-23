namespace SakuraGlade {
    export async function Day3Morning(): ƒS.SceneReturn {
        console.log("Day 3 Morning starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innDay);
        await ƒS.update(transitions.eye.duration, transitions.eye.alpha, transitions.eye.edge);

        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(It was hard to find rest last night…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Alright then… this is it! I got this.)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        // Day3showdown
    }
}