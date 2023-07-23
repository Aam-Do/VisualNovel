namespace SakuraGlade {
    export async function Day1Morning(): ƒS.SceneReturn {
        console.log("Day 1 Morning starting");
        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innDay);
        await ƒS.update(transitions.eye.duration, transitions.eye.alpha, transitions.eye.edge);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(I slept pretty good, the bed is more comfortable than I expected. But I woke up to a loud commotion outside in the town square. I wonder what's going on out there?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I'll go check it out.)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sakuraGladeDay);
        ƒS.Sound.play(sound.village, .3, true);
        await ƒS.update(2);
        ƒS.Speech.show();
        ƒS.Sound.play(sound.crowd, .6, true);
        await ƒS.Speech.tell("Villager 1", "Have you heard the news already?");
        await ƒS.Speech.tell("Villager 2", "Who would do something like that?");
        await ƒS.Speech.tell("Villager 3", "I bet it was that little wrench! Acting all innocent won't help her anymore.");
        await ƒS.Speech.tell("Villager 4", "How could something like this happen? Right before the festival too!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(People are crowding the streets, everyone seems to be very agitated.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Uhm, excuse me?");
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.Speech.tell(characters.protagonist, "What is going on?");
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.Speech.tell(characters.protagonist, "<i>(No one's paying attention to me!)</i>");
        await ƒS.Speech.tell(characters.nobu, dataForSave.nameProtagonist + "! There you are!");
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, "I've been looking for you! I'm glad to see you're okay.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(He seems different today... maybe I'm just imagining things...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "I'm fine, thank you. But what is going on here? Why is everyone so upset?");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "Oh, it's terrible, Grasshopper-");
        await ƒS.Speech.tell("Villager 3", "You! It was you, wasn't it? Admit it!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(They're not talking to me. There's a little girl everyone is surrounding...)</i>");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.update(1);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell("???", "... n-no it wasn't! I promise...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell("Villager 1", "There she goes, I don't believe a word she's saying!");
        await ƒS.Speech.tell("Villager 4", "She shouldn't even be here.");
        await ƒS.Speech.tell("Villager 2", "How dare she lie right to our faces?!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(The poor girl looks so helpless... They're not even giving her a chance to speak...!)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Hey! Calm down everyone! Let her explain!");
        await ƒS.Speech.tell("Villager 2", "Who is...?");
        await ƒS.Speech.tell("Villager 4", "Shh!");
        ƒS.Sound.fade(sound.crowd, 0, .5)
        ƒS.Sound.fade(sound.village, .5, 2)
        await ƒS.Speech.tell(characters.protagonist, "<i>(Finally, they've stopped talking all over each other.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "I'm sorry, I know I shouldn't interfere since I'm not from here. But I can't just stand by and watch this! Look, there will be a solution to whatever is going on right now, but all this commotion will lead to nothing!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Woah. It seems like they're actually listening to me!)</i>");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "...Thank you, Worldleaper.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Oh, she's talking to me!)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Her voice is so quiet I almost didn't notice. What did she call me? Worldleaper?)</i>");
        await ƒS.Speech.tell(characters.protagonist, " O-of course! Uhm, my name is " + dataForSave.nameProtagonist + ". It's nice to meet you!");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell("???", "Hmm... " + dataForSave.nameProtagonist + "...");
        ƒS.Sound.fade(sound.village, 0, 2)
        await ƒS.Speech.tell("???", "...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(What is it?)</i>");
        ƒS.Speech.setTickerDelays(60, 5000);
        ƒS.Sound.play(sound.kohana, .5, true);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.kohana, "My name is Kohana. The pleasure is	mine... is that how you say that? I get confused sometimes...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ah...)</i> Don't worry about it. Now, what is all this about?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Ah!");
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.kohana, "Well... it's about the Moon Bead. Did Nobu tell you about it? It's our village's sacred treasure, kept in the shrine at the Sacred Tree.");
        await ƒS.Speech.tell(characters.kohana, "It's been stolen in the night...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(The Moon Bead?)</i> And everyone thinks it was you?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Mh, it seems so...");
        ƒS.Speech.setTickerDelays(40, 5000);
        // animation 
        await ƒS.Character.animate(characters.kohana, characters.kohana.pose.sad, middleToRight());
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, "Sprout, can I talk to you for a moment?");
        await ƒS.Speech.tell(characters.protagonist, "Sure.");
        await ƒS.Character.hide(characters.kohana);
        await ƒS.update(1);
        // animation
        await ƒS.Character.animate(characters.nobu, characters.nobu.pose.sad, leftToMiddle());
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        ƒS.Sound.fade(sound.kohana, 0, 2)
        ƒS.Sound.play(sound.village, .5, true);
        await ƒS.Speech.tell(characters.nobu, "That was some real courage you had there!");
        await ƒS.Speech.tell(characters.nobu, "You have an aura, I can't explain it. But I feel it too. And the villagers listened to you as well!");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "They can be so cruel sometimes, jumping to conclusions like that. Kohana isn't very well-liked among them, she's... a little eccentric sometimes.");
        await ƒS.Speech.tell(characters.nobu, "But I've known her since she came here and I don't think she stole the Bead.");
        await ƒS.Speech.tell(characters.protagonist, "She definitely doesn't look like someone who'd steal something so important...");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "I'm glad you think so too!");
        await ƒS.Speech.tell(characters.nobu, "Well, Grasshopper, who was it if not her? They won't let her go until they've found the real culprit.");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "And oh, the festival! How will it be held without the Moon Bead? We need the blessing for the coming harvest...");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "The village listens to you, and Kohana seems to enjoy your company as well. It might be a big ask since you just arrived here, but...");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "Would you help investigate and find the true culprit?");

        let options = {
            yes: "Of course!",
            fine: "Do I really have to?"
        }

        let optionsElement = await ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.yes:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "Of course!");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Thank you, Sprout! I knew you would say yes to a new adventure.");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Well then, I have to be somewhere now.");
                await ƒS.Speech.tell(characters.nobu, "You should talk to Kohana some more. Return the Moon Bead before it's too late for the festival! Good luck, Grasshopper!");
                break;
            case options.fine:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "Do I really have to?");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Oh well... I was hoping you'd be excited by a little adventure.");
                await ƒS.Speech.tell(characters.nobu, "Please, Sprout. You've already managed to get the villagers to stop hunting her down, it would make an old man very happy if you could help Kohana a little more and find out who was behind this.");
                await ƒS.Speech.tell(characters.protagonist, "... fine, I'll do it.");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Thank you! I know you can do it.");
                await ƒS.Character.hide(characters.nobu);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.nobu, "Well then, I have to go somewhere now.");
                await ƒS.Speech.tell(characters.nobu, "Please talk to Kohana. Return the Moon Bead before it's too late for the festival! I'm counting on you, Grasshopper!");
                break;
        }

        await ƒS.Speech.tell(characters.protagonist, "Wait!");
        await ƒS.Character.hide(characters.nobu);
        ƒS.Sound.fade(sound.village, 0, 2)
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.Speech.tell(characters.protagonist, "<i>(He left... There was definitely something off about him... and where did he have to hurry to so suddenly? I guess I'll ask him later. I should talk to Kohana and find out why she was suspected in the first place.)</i>");
    }
}