namespace SakuraGlade {
    export async function Day1Nobu(): ƒS.SceneReturn {
        console.log("Day 1 Nobu starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.sakuraGladeDay);
        ƒS.Sound.play(sound.village, .5, true);
        await ƒS.update(2);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(After searching for him in the village without any luck I was able to find my way back to his house.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm... there's no doorbell... they probably don't have those here.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Nobu?");
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.Speech.tell(characters.protagonist, "<i>(No answer. I'll knock- Oh, it's not locked. The doors just slide open. Maybe he's inside and just didn't hear me?)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.nobuHome);
        await ƒS.update(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "Nobu?");
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.Speech.tell(characters.protagonist, "Nobu!");
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.Speech.tell(characters.protagonist, "<i>(What a nice little house... But he doesn't seem to be here. I should leave-)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(There's a piece of paper lying on the table.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ah, come on, just a little look won't hurt.)</i>");
        //    show inventory!!
        Inventory.add(items.medicalNotice);
        dataForSave.inventory.push(items.medicalNotice);
        await Inventory.open();
        await ƒS.Progress.delay(0);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm... who is Hina?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(This might actually become important. I should ask him about it when I see him again. For now, I better leave.)</i>");
        ƒS.Sound.fade(sound.village, 0, 2)
        await ƒS.Location.show(locations.sakuraGladeDay);
        await ƒS.update(1);

        dataForSave.day1TalkedTo.push(characters.nobu);
    }
}