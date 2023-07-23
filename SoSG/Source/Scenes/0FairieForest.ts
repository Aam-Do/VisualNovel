namespace SakuraGlade {
    export async function FairieForest(): ƒS.SceneReturn {
        console.log("Fairie Forest Scene starting");

        // cpms = characters per millisecond
        ƒS.Speech.setTickerDelays(40, 5000);

        await ƒS.Progress.delay(1);
        ƒS.Speech.show()
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ouch... my head hurts...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Huh? ... What's that?)</i>");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell("???", "Hello?");
        await ƒS.Speech.tell("???", "...");
        await ƒS.Speech.tell("???", "Hello there? Are you awake?");
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Someone is talking to me...)</i>");
        await ƒS.Location.show(locations.fairieForest);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(transitions.eye.duration, transitions.eye.alpha, transitions.eye.edge);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Where... am I?)</i>");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "There we go... I was worried for a moment there.<br>Are you alright?");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "Oh... what's that?");
        await ƒS.Speech.tell("???", "My, my... I almost mistook you for a fairy!<br>But you've got no wings...");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Woah... what is that thing??)</i>");
        let choice1 = {
            neutral: "You look weird! What are you?",
            good: "You're... a talking mushroom?"
        };
        let choice1Element = await ƒS.Menu.getInput(choice1, "choices");
        switch (choice1Element) {
            case choice1.neutral:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "You look weird! What are you?");
                ƒS.Speech.setTickerDelays(80, 5000);
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell("???", "Ahem... now that's not a very kind thing to say...");
                ƒS.Speech.setTickerDelays(40, 5000);
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell("???", "I'm a Capfolk. We live here in the Forest of Fairie.");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.thinking, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell("???", "It's strange you've never seen one like me before.<br>How did you get here?");
                break;
            case choice1.good:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "You're... a talking mushroom?");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.laughing, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell("???", "Ohohoh!");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell("???", "You're a strange one!");
                await ƒS.Speech.tell("???", "Never seen a Capfolk before? You're not from the Forest of Fairie then.");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.thinking, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell("???", "How did you end up all on the ground here?");
                break;
        }
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "I...");
        ƒS.Speech.setTickerDelays(80, 5000);
        await ƒS.Speech.tell(characters.protagonist, "I can't remember clearly... ");
        await ƒS.Speech.tell(characters.protagonist, "I was just going home... and then...");
        await ƒS.Speech.tell(characters.protagonist, "...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell("???", "Oh dear, it seems you're quite confused. You don't look so well either...");
        await ƒS.Speech.tell("???", "Are you hurt?");
        ƒS.Sound.fade(sound.forest, 0, 2)
        await ƒS.Speech.tell(characters.protagonist, "...No I don't think so.");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "That's a relief!");
        ƒS.Sound.play(sound.nobu, .4, true);
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "Oh I almost forgot!");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "I'm Nobu, it's a pleasure to meet you.");
        await ƒS.Speech.tell(characters.protagonist, "I'm... " + dataForSave.nameProtagonist + ".");
        await ƒS.Speech.tell(characters.protagonist, "How did you find me?");
        await ƒS.Speech.tell(characters.nobu, "What a pretty sounding name you've got there, " + dataForSave.nameProtagonist + "!");
        await ƒS.Speech.tell(characters.nobu, "I was just on my way back from collecting firewood when I stumbled upon you laying here. You don't see folks like you around here often.");
        await ƒS.Speech.tell(characters.nobu, "Either way, it's starting to get quite dark in these woods... It'll be hard to see the way once night falls.");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "We're not too far from the village, you can rest up there if you want and we'll figure it out.");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "What do you say, " + dataForSave.nameProtagonist + "? Can you walk on your own?");

        let choice2 = {
            good: "A little help would be nice, actually.",
            neutral: "I can walk on my own, thank you."
        };
        let choice2Element = await ƒS.Menu.getInput(choice2, "choices");
        switch (choice2Element) {
            case choice2.neutral:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "I can walk on my own, thank you.");
                ƒS.Speech.setTickerDelays(80, 5000);
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.laughing, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Ohohoh!");
                ƒS.Speech.setTickerDelays(40, 5000);
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Young ones are always so full of energy!");
                await ƒS.Speech.tell(characters.nobu, "Well, if you insist.<br>Stay close, Grasshopper.");
                break;
            case choice2.good:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "A little help would be nice, actually.");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Of course. Here, take my cane for support.<br>It's not too far, but we can take breaks if you need them.");
                await ƒS.Speech.tell(characters.nobu, "Come along now, Grasshopper!");
                break;
        }
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.nobu);
        ƒS.Location.show(locations.blackout);
        ƒS.Sound.fade(sound.nobu, 0, 2)
        await ƒS.update(1);
    }
}