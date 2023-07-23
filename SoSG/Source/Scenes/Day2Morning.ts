namespace SakuraGlade {
    export async function Day2Morning(): ƒS.SceneReturn {
        console.log("Day 2 Morning starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innDay);
        await ƒS.update(transitions.eye.duration, transitions.eye.alpha, transitions.eye.edge);

        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(What a night... I was lying awake thinking about who it could've been forever. I have so much to find out.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ah, and service came by earlier and brought me a letter! Let's see what's inside.)</i>");
        Inventory.add(items.permit);
        dataForSave.inventory.push(items.permit);
        await Inventory.open();
        await ƒS.Progress.delay(0);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well there we go! Now I can finally have a look around the Sacred Tree.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Let's backtrack...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Kohana is the priestess and has access to the tree at all times. She also holds on to the Replica, so she could've easily swapped them. But she seems really worried about the festival. Why would she steal the Bead if she can just grab it anytime?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Nobu was acting strange yesterday and I didn't get to interrogate him at all...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(And that girl, Fumiko, maybe I should have a chat with her again too.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Amaya definitely was at the Tree in the night as the Warden. She could've gotten the Bead while everyone was asleep and removed all traces while pretending to secure the area...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(But even if she's not the culprit, shouldn't she have seen something? I need to ask her more about what she was doing and what she saw last night...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I better head out!)</i>");

        ƒS.Speech.clear();
        ƒS.Speech.hide();
    }
}