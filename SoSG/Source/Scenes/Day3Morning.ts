namespace SakuraGlade {
    export async function Day3Morning(): ƒS.SceneReturn {
        console.log("Day 3 Morning starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innDay);
        await ƒS.update(2);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(It was hard to find rest last night…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Alright then… this is it! I got this.)</i>");
        
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

        // Day3showdown
    }
}