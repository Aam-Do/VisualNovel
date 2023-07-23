namespace SakuraGlade {
    export async function Day1Fumiko(): ƒS.SceneReturn {
        console.log("Day 1 Fumiko starting");

        await ƒS.Progress.delay(1);
        ƒS.Sound.play(sound.village, .5, true);
        await ƒS.Location.show(locations.sakuraGladeEvening);
        await ƒS.update(2);
        await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Oh, today went by really quickly. I don't feel like I'm any smarter now though. Well, time to head back to the inn to sleep over it and really start through tomorrow!)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(OH!)</i>");
        ƒS.Sound.fade(sound.village, 0, 1)
        // shake/flash screen animation
        await ƒS.Speech.tell(characters.protagonist, "<i>(Someone bumped into me...?)</i>");
        ƒS.Sound.play(sound.fumiko, .5, true);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell("???", "Ah! I'm so sorry!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Wow, she is really pretty!)</i> No, don't apologize, I was lost in thought. I should've seen you coming.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I made her drop the lantern she was holding. I'll pick it up.)</i> Here you go.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "You're too kind, thank you.");
        await ƒS.Speech.tell(characters.protagonist, "No problem at all. Who are you, if I may ask?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Oh, of course, Precious! I'm Fumiko, lovely to meet you.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "And you are?");
        await ƒS.Speech.tell(characters.protagonist, "I'm " + dataForSave.nameProtagonist + ". You're still out and about rather late...?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Oh, yes. But don't worry. I'll be home in a minute.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "I just needed some fresh air.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "And these lanterns won't put themselves up on their own!");
        await ƒS.Speech.tell(characters.protagonist, "You're decorating for the Spring Festival?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Indeed I am. I'm in charge of the decorations this year. It's proven a challenge, but I have many helping hands.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I'm sure she does. Anyone would be happy to just be in her presence.)</i> You're not worried about the festival?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Worried? Why would I-");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Oh, you mean because of the Moon Bead.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "No, I don't have the time to worry about such things. The village will look stunning regardless of whether it will be found or not. If I wait for it to show up I won't have enough time to decorate everything.");
        await ƒS.Speech.tell(characters.fumiko, "And regardless... the decorations can be taken down again...");
        await ƒS.Speech.tell(characters.protagonist, "You don't seem too fond of the festival?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Oh no, don't get me wrong, I love the festival. It's wonderful.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "I...");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Well, there are a lot of expectations for me this year, so I'm just making sure I do everything perfectly.");
        await ƒS.Speech.tell(characters.protagonist, "That sounds... stressful.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Ah, don't worry about it. I love doing the village service.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Well then, Precious, I better get going before it gets too late. My parents will worry. I'll see you around!");
        await ƒS.Speech.tell(characters.protagonist, "See you!");
        ƒS.Sound.fade(sound.fumiko, 0, 2)
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well... that was nice. She seems lovely.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Now, I should head back to the inn. It's been a pretty long day and I need all the rest I can get before continuing my investigations tomorrow. The festival is coming closer, I have to hurry up if I want to find the Moon Bead in time!)</i>");

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.blackout);
        await ƒS.update(2);

    }
}