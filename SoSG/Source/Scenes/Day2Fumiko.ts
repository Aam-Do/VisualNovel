namespace SakuraGlade {
    export async function Day2Fumiko(): ƒS.SceneReturn {
        console.log("Day 2 Fumiko starting");
        currentCharacter = characters.fumiko;

        if (!dataForSave.day2TalkedTo.includes(characters.fumiko)) {
            await ƒS.Location.show(locations.sakuraGladeDay);
            await ƒS.update(2);
            ƒS.Speech.show();
            await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm… I was hoping to find Fumiko here somewhere, but it’s hard to make out anyone in this crowd…)</i>");
            await ƒS.Speech.tell(characters.protagonist, "<i>(Ah, there she is!)</i>");
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
            ƒS.Sound.play(sound.fumiko, .5, true);
            await ƒS.update(1);
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "Ah, the wingless fairy from yesterday!");
            await ƒS.Speech.tell(characters.fumiko, "What are you doing here, Precious?");
            await ƒS.Speech.tell(characters.protagonist, "<i>(I feel better just by looking at her.)</i> I was looking for you.");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "Oh you were?");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "What can I do for you?");
            await ƒS.Speech.tell(characters.protagonist, "Well, I’m investigating the theft of the Moon Bead, and I wondered if maybe you’ve seen something.");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.thinking, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "Ah, so I’ve heard. I’m afraid I won’t be of much help to you though.");
            await ƒS.Speech.tell(characters.protagonist, "<i>(I’ll be the judge of that.)</i> That’s alright, can I ask you some questions either way?");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "Surely, go ahead.");
            await ƒS.Speech.tell(characters.protagonist, "For the record, could you tell me your name and occupation?");
            await ƒS.Speech.tell(characters.fumiko, "My name is Fumiko, I am an aspiring jeweler and designer. My parents own the jewelry shop. And I’m in charge of the decorations, as you know already.");
            await ƒS.Speech.tell(characters.protagonist, "Why are you in charge of the decorations this year?");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.thinking, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "Oh, it’s a tradition in my family. You see, my parents are quite noble.");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "It’s custom that noble daughters prepare the Spring Festival the year they’re coming of age. At the end of the festival, the fairest lady is crowned as Sakura Princess and she must have a dance with an eligible bachelor she chooses.");
            await ƒS.Speech.tell(characters.fumiko, "My parents wish for me to find a partner this year. It’s quite old-fashioned, but such is tradition.");
            await ƒS.Speech.tell(characters.protagonist, "<i>(So that’s what she meant when she said there are high expectations of her…)</i> What were you doing on the day of the incident?");
            await ƒS.Speech.tell(characters.fumiko, "I was gathering and preparing the lanterns and garlands.");
            await ƒS.Speech.tell(characters.protagonist, "And in the night?");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.thinking, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "What one usually does at night, sleeping.");
            await ƒS.Speech.tell(characters.protagonist, "<i>(Right…)</i> Did you notice anything during the night?");
            await ƒS.Speech.tell(characters.fumiko, "I’m afraid our walls are quite thick, and I’m a rather heavy sleeper.");
            await ƒS.Speech.tell(characters.protagonist, "<i>(I guess not then.)</i> I have some things I’d like to ask you about, may I?");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await ƒS.Speech.tell(characters.fumiko, "Of course. Go ahead, Precious.");
            await day2Inventory();
            dataForSave.day2TalkedTo.push(characters.fumiko);
        } else {
            // await ƒS.Progress.delay(1);
            await ƒS.Location.show(locations.sakuraGladeDay);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
            ƒS.Sound.play(sound.fumiko, .5, true);
            await ƒS.update(2);
            ƒS.Speech.show();
            await ƒS.Speech.tell(characters.fumiko, "Ah, you’re back, Precious. Is there something else you’d like to ask me about?");
            await ƒS.Character.hide(characters.fumiko);
            await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
            await ƒS.update(.1);
            await day2Inventory();
        }

        currentCharacter = undefined;
        await ƒS.Speech.tell(characters.protagonist, "That’s all for now, I might come back later.");
        await ƒS.Speech.tell(characters.fumiko, "Surely. I’ll be here in the meantime.");
        await ƒS.Character.hide(characters.fumiko);
        ƒS.Sound.fade(sound.fumiko, 0, 2)
        await ƒS.update(1);
        ƒS.Speech.clear();
        ƒS.Speech.hide();


    }
}