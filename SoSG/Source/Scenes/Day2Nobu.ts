namespace SakuraGlade {
    export async function Day2Nobu(): ƒS.SceneReturn {
        console.log("Day 2 Nobu starting");
        currentCharacter = characters.nobu;

        if (!dataForSave.day2TalkedTo.includes(characters.nobu)) {
            await ƒS.Location.show(locations.nobuHome);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
            ƒS.Sound.play(sound.nobu, .4, true);
            await ƒS.update(2);
            ƒS.Speech.show();
            await ƒS.Speech.tell(characters.protagonist, "<i>(This time, he’s home and answered right away when I knocked.)</i>");
            await ƒS.Character.hide(characters.nobu);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.nobu, "Sprout! Good to see you.");
            await ƒS.Speech.tell(characters.nobu, "How are you doing?");
            await ƒS.Speech.tell(characters.protagonist, "<i>(He seems better than yesterday.)</i>");
            await ƒS.Speech.tell(characters.protagonist, "I’m doing good, thank you. But I have a lot of questions in my head and I don’t think I’m any closer to finding the thief, to be honest.");
            await ƒS.Speech.tell(characters.nobu, "Don’t look so down. I’m sure you’re doing a great job!");
            await ƒS.Character.hide(characters.nobu);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.nobu, "Did you come here to ask me something?");
            await ƒS.Speech.tell(characters.protagonist, "Yes, actually. I haven’t had the chance to ask you questions about the incident at all. I hope you understand.");
            await ƒS.Character.hide(characters.nobu);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.nobu, "Oh, of course. Go ahead, Grasshopper.");
            await ƒS.Speech.tell(characters.protagonist, "Can you state your name and occupation again for me?");
            await ƒS.Speech.tell(characters.nobu, "Surely, I’m Nobu and I’m retired.");
            await ƒS.Speech.tell(characters.nobu, "I used to be an adventurer, wandering the forest, but now I spend most of my days at home or doing whatever I can for the village.");
            await ƒS.Speech.tell(characters.nobu, "Enjoying life, you know?");
            await ƒS.Speech.tell(characters.protagonist, "<i>That... sounds pretty cool!</i> I see. So, what did you do on the day of the incident?");
            await ƒS.Character.hide(characters.nobu);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.thinking, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.nobu, "Well, I went about my day as usual, then went to gather some firewood for the Irori, which is where I found you.");
            await ƒS.Speech.tell(characters.nobu, "You pretty much know the rest. I dropped you off at the Inn and went home.");
            await ƒS.Speech.tell(characters.protagonist, "Alright. I collected some clues about the theft, would you be alright answering some questions about these?");
            await ƒS.Character.hide(characters.nobu);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.nobu, "Of course, Sprout. I’ll try to tell you as much as I can.");
            await day2Inventory();
            dataForSave.day2TalkedTo.push(characters.nobu);
        } else {
            // await ƒS.Progress.delay(1);
            await ƒS.Location.show(locations.nobuHome);
            await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
            ƒS.Sound.play(sound.nobu, .4, true);
            await ƒS.update(2);
            ƒS.Speech.show();
            await ƒS.Speech.tell(characters.nobu, "There you are again, Grasshopper. Busy as always. Find something new?");
            await day2Inventory();
        }

        currentCharacter = undefined;
        await ƒS.Speech.tell(characters.protagonist, "That’s all the info I needed for now, thank you.");
        await ƒS.Speech.tell(characters.nobu, "Good luck, Sprout! I’ll wait here if you need me.");
        await ƒS.Character.hide(characters.nobu);
        ƒS.Sound.fade(sound.nobu, 0, 2)
        await ƒS.update(1);


        ƒS.Speech.clear();
        ƒS.Speech.hide();
    }
}