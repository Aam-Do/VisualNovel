namespace SakuraGlade {
    export async function Day2Kohana(): ƒS.SceneReturn {
        console.log("Day 2 Kohana starting");
        currentCharacter = characters.kohana;

        if (!dataForSave.day2TalkedTo.includes(characters.kohana)) {
            await ƒS.Location.show(locations.temple);
            await ƒS.update(2);
            ƒS.Speech.show();
            await ƒS.Speech.tell(characters.protagonist, "<i>(I don't know what I expected, but it was quite a long walk from the village center to here. Kohana lives here all by herself? It must get lonely up here...)</i>");
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
            ƒS.Sound.play(sound.kohana, .5, true);
            await ƒS.update(1);
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.smiling, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "...you've come to see me, Dreamer?");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "Well, yes. I have a few more questions I'd like to ask you.");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "Mh.");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "<i>(I'll take that as a yes...)</i> You seem very attached to the Spring Festival, but the villagers don't seem to put much faith in you...");
            await ƒS.Speech.tell(characters.protagonist, "I've been wondering, why is that?");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.sad, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "They don't... understand.");
            await ƒS.Speech.tell(characters.kohana, "I'm not from here. I'm... weird, they say.");
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "Onee-sama found me. I think she needed me... she raised me like her own.");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "<i>(Onee-sama... she's said that name before.)</i> Who is your “Onee-sama”?");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "...");
            await ƒS.Speech.tell(characters.kohana, "You know her. She guards the Tree.");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "<i>(Amaya? That's... unexpected.)</i> What do you mean, she needed you?");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.sad, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "Mh. I shouldn't talk about it...");
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "Onee-sama lost her family. Like I lost mine. So the gods brought us each other...");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "<i>(So she's orphaned and Amaya adopted her... no wonder Amaya's quite protective of her.)</i>");
            await ƒS.Speech.tell(characters.protagonist, "I'm so sorry for you.");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "...no. I don't remember it.");
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.smiling, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "I am happy I can be here now. Even if the village doesn't like me. I have a home.");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "<i>(That's sweet, but I still feel bad for her. I'll try to do even better with finding the Moon Bead now.)</i>");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Character.hide(characters.kohana);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.kohana, "Do you have anything else to ask me...?");
            ƒS.Speech.setTickerDelays(40, 5000);
            await day2Inventory();
            dataForSave.day2TalkedTo.push(characters.kohana);
        } else {
            // await ƒS.Progress.delay(1);
            await ƒS.Location.show(locations.temple);
            await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
            ƒS.Sound.play(sound.kohana, .5, true);
            await ƒS.update(2);
            ƒS.Speech.show();
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "Do you have anything new to show me, Dreamer?");
            ƒS.Speech.setTickerDelays(40, 5000);
            await day2Inventory();
        }
        
        currentCharacter = undefined;
        await ƒS.Speech.tell(characters.protagonist, "I'll come back when I have more information.");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "... I'll be here...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Character.hide(characters.kohana);
        ƒS.Sound.fade(sound.kohana, 0, 2)
        await ƒS.update(1);


        ƒS.Speech.clear();
        ƒS.Speech.hide();
    }
}