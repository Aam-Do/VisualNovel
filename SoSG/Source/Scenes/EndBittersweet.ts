namespace SakuraGlade {
    export async function BittersweetEnding(): ƒS.SceneReturn {
        console.log("Bittersweet Ending starting");

        await ƒS.Speech.tell(characters.protagonist, "It was Fumiko. She stole the replica from Kohana while she was taking a bath, snuck to the Tree while Amaya wasn’t looking and exchanged the Beads.");
        await ƒS.Speech.tell(characters.protagonist, "But she didn’t anticipate Nobu coming by for a midnight stroll, so she had to leave hurriedly, which is where she lost her earring!");
        await ƒS.Speech.tell(characters.amaya, "Is that true? Look at me, Fumiko. Is that true?");
        await ƒS.Speech.tell(characters.fumiko, "…Yes. It’s true.");
        // don't forget surprised reactions!
        await ƒS.Speech.tell(characters.fumiko, "I… didn’t have another choice. Please. Believe me.");
        await ƒS.Speech.tell(characters.fumiko, "I was going to give it back after the festival. Here, you can have it again.");
        ƒS.Inventory.add(items.moonBead);
        await ƒS.Inventory.open();
        await ƒS.Speech.tell(characters.protagonist, "<i>(I was right! It was her!)</i> But… why?");
        await ƒS.Speech.tell(characters.fumiko, "My parents were going to seal my fate at the Spring Festival, marry me to some random snob and confine me in this picture perfect life forever!");
        await ƒS.Speech.tell(characters.fumiko, "I just, couldn’t take it anymore. Don’t you know what it’s like to long to live? All I wanted was one more chance.");
        await ƒS.Speech.tell(characters.fumiko, "But. I guess that’s all over now. It doesn’t matter anymore.");
        await ƒS.Speech.tell(characters.fumiko, "I’m sorry Kohana. I didn’t mean to cause any harm.");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "It’s… alright. You’ve been hurting…");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.nobu, "I understand that you were desperate, Fumiko. But stealing our sacred artifact… There must have been another way.");
        await ƒS.Speech.tell(characters.fumiko, "I know. It was… stupid. But I’ve made my peace. I’m ready for the consequences.");
        await ƒS.Speech.tell(characters.amaya, "You’ll be trialed by Sakura Glade law.");
        await ƒS.Speech.tell(characters.amaya, "But, since you’ve complied so readily, I think we should end this on a good note. We should celebrate that the Moon Bead is back and the Spring Festival can take place.");
        await ƒS.Speech.tell(characters.amaya, "I’ll hear your full statement after the festivities are over.");
        await ƒS.Speech.tell(characters.fumiko, "Thank you…");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, "Great job, Sprout! I knew you would find out the truth behind it all!");
        await ƒS.Speech.tell(characters.nobu, "Now, let’s celebrate! You don’t want to miss this!");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well, that’s good news. Kohana has been declared not guilty and the Spring Festival can take place.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(And, I’ll get to attend it as well!</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.festival);
        await ƒS.update(2);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Woah… the festival is enormous, for such a small village. There’s music and booths and everyone contributed something.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(The Moon Ritual performed by Kohana was beautiful as well. I’m so glad I got to experience this!)</i>");
        await ƒS.Speech.tell(characters.nobu, "Grasshopper! You’ll miss the fireworks!");
        await ƒS.Speech.tell(characters.protagonist, "Coming!");
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(35, 100));
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.amaya, "We wanted to take a moment to thank you, " + dataForSave.nameProtagonist + ". Without you, who knows if the festival could have taken place.");
        await ƒS.Speech.tell(characters.amaya, "And thank you for clearing Kohana’s name. We won’t forget this.");
        await ƒS.Speech.tell(characters.nobu, "You’ve done the village a great service, Sprout. Us all.");
        await ƒS.Speech.tell(characters.nobu, "Even Fumiko, even though she needs her space right now, I know is grateful to you. Thank you.");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "… Thank you for helping me, Dreamer. You’ve made me feel… welcomed. It’s nice.");
        await ƒS.Speech.tell(characters.kohana, "Now… You can probably feel it too… It’s time for you to say goodbye.");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.protagonist, "Wait…");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "Goodbye, Worldleaper!");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.nobu, "You’re already leaving?");
        await ƒS.Speech.tell(characters.nobu, "I hope you get home safely, wherever that is, Sprout!");
        await ƒS.Speech.tell(characters.amaya, "Farewell, Cub.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Location.show(locations.blackout);
        ƒS.update(5);
        // disable inventory
        await ƒS.Speech.tell(characters.protagonist, "You guys… Goodbye!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ah… my vision is getting blurry. I guess this it it. Here we go again…)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(2);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Oh… I’m back home…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(How did I get here? Did I dream all of that?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I don’t remember what happened.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(But for some reason… I feel… warm. It’s nice…)</i>");

        // THE END or smth
    }
}