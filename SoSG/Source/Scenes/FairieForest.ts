namespace SakuraGlade {
    export async function FairieForest(): ƒS.SceneReturn {
        console.log("Intro Scene starting");

        // cpms = characters per millisecond
        ƒS.Speech.setTickerDelays(40, 5000);

        ƒS.Speech.hide();

        await ƒS.Progress.delay(1);
        ƒS.Speech.show()
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "(<i>Ouch... my head hurts...</i>)");
        await ƒS.Speech.tell(characters.protagonist, "(<i>...</i>)");
        await ƒS.Speech.tell(characters.protagonist, "(<i>Huh? ... What's that?</i>)");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell("???", "Hello?");
        await ƒS.Speech.tell("???", "...");
        await ƒS.Speech.tell("???", "Hello there? Are you awake?");
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "(<i>Someone is talking to me...</i>)");
        await ƒS.Location.show(locations.fairieForest);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positions.bottomright);
        ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "(<i>Where... am I?</i>)");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell("???", "There we go... I was worried for a moment there.<br>Are you alright?");
        await ƒS.Speech.tell("???", "Oh... what's that?");
        await ƒS.Speech.tell("???", "My, my... I almost mistook you for a fairy!<br>But you've got no wings...");
        let dialogue = {
            weird: "You look weird! What are you?",
            talking: "You're... a talking mushroom?"
        };
        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.weird:
                // continue path here
                console.log(dialogue.weird);
                await ƒS.Speech.tell(characters.protagonist, "You look weird! What are you?");
                ƒS.Speech.setTickerDelays(80, 5000);
                await ƒS.Speech.tell("???", "Ahem... now that’s not a very kind thing to say...");
                ƒS.Speech.setTickerDelays(40, 5000);
                await ƒS.Speech.tell("???", "I’m a Capfolk. We live here in the Forest of Fairie.");
                await ƒS.Speech.tell("???", "It’s strange you’ve never seen one like me before.<br>How did you get here?");
                break;
            case dialogue.talking:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "You’re… a talking mushroom?");
                await ƒS.Speech.tell("???", "Ohohoh!");
                await ƒS.Speech.tell("???", "You’re a strange one!");
                await ƒS.Speech.tell("???", "Never seen a Capfolk before? You’re not from the Forest of Fairie then.");
                await ƒS.Speech.tell("???", "How did you end up all on the ground here?");
                break;
        }
        ƒS.Speech.setTickerDelays(100, 5000);
        await ƒS.Speech.tell(characters.protagonist, "I…");
        ƒS.Speech.setTickerDelays(80, 5000);
        await ƒS.Speech.tell(characters.protagonist, "I can’t remember clearly… ");
        await ƒS.Speech.tell(characters.protagonist, "I was just going home… and then…");
        await ƒS.Speech.tell(characters.protagonist, "…");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell("???", "Oh dear, it seems you’re quite confused. You don’t look so well either…");
        await ƒS.Speech.tell("???", "Oh I almost forgot!");
        await ƒS.Speech.tell(characters.nobu, "I’m Nobu, it’s a pleasure to meet you.");
        await ƒS.Speech.tell(characters.protagonist, "I’m… " + dataForSave.nameProtagonist + ".");
        await ƒS.Speech.tell(characters.protagonist, "How did you find me?");
        await ƒS.Speech.tell(characters.nobu, "What a pretty sounding name you’ve got there!");
        await ƒS.Speech.tell(characters.nobu, "I was just on my way back from collecting firewood when I stumbled upon you laying here.");
        await ƒS.Speech.tell(characters.nobu, "Either way, it's starting to get quite dark in these woods…<br>We’re not too far from the village.");
        await ƒS.Speech.tell(characters.nobu, "You can rest up there if you want and we’ll figure it out.");
        await ƒS.Speech.tell(characters.nobu, "What do you say, " + dataForSave.nameProtagonist + "? Can you walk on your own?");

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Character.hide(characters.nobu);
    }
}