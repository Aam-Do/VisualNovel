namespace SakuraGlade {
    export async function Day1Nobu(): ƒS.SceneReturn {
        console.log("Day 1 Nobu starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innDay);
        await ƒS.update(2);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(I slept pretty good, the bed is more comfortable than I expected. But I woke up to a loud commotion outside in the town square. I wonder what’s going on out there?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I’ll go check it out.)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sakuraGladeDay);
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "My name is Kohana. The pleasure is	mine… is that how you say that? I get confused sometimes...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ah…)</i> Don’t worry about it. Now, what is all this about?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Ah!");
        await ƒS.Speech.tell(characters.kohana, "Well… it’s about the Moon Bead. Did Nobu tell you about it? It’s our village’s sacred treasure, kept in the shrine at the Sacred Tree.");
        await ƒS.Speech.tell(characters.kohana, "It’s been stolen in the night…");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "…");
        await ƒS.Speech.tell(characters.protagonist, "<i>(He left… There was definitely something off about him… and where did he have to hurry to so suddenly? I guess I’ll ask him later. I should talk to Kohana and find out why she was suspected in the first place.)</i>");

        // day1Locations();
    }
}