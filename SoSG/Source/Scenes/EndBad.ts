namespace SakuraGlade {
    export async function BadEnding(): ƒS.SceneReturn {
        console.log("Bad Ending starting");

        ƒS.Sound.fade(sound.village, 0, 2)
        await ƒS.Speech.tell(characters.fumiko, "Stop it!");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Fumiko…?)</i>");
        let pronouns: string = "He is";
        if (dataForSave.genderProtagonist == "female") {
            pronouns = "She is";
        } else if (dataForSave.genderProtagonist == "diverse") {
            pronouns = "They are";
        }
        ƒS.Sound.play(sound.sad, .5, true);
        await ƒS.Speech.tell(characters.fumiko, "Just stop… " + pronouns + " wrong!");
        await ƒS.Speech.tell(characters.amaya, "How would you know that, Fumiko?");
        await ƒS.Speech.tell(characters.fumiko, "I… I can’t sit by and watch while someone innocent has to take the blame for something that I did…");
        await ƒS.Speech.tell(characters.nobu, "Fumiko… what are you implying?");
        await ƒS.Speech.tell(characters.fumiko, "It was me! Okay? It was me... I stole the Moon Bead.");
        await ƒS.Speech.tell(characters.fumiko, "And I can prove it. I have it. Here, take it... I don’t want it anymore.");
        Inventory.add(items.moonBead);
        dataForSave.inventory.push(items.moonBead);
        await Inventory.open();
        await ƒS.Speech.tell(characters.protagonist, "How?");
        await ƒS.Speech.tell(characters.fumiko, "I stole the replica when Kohana was bathing… I’m sorry, Kohana. I didn’t think they’d immediately suspect you.");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.sad, ƒS.positionPercent(35, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.kohana, "…Mh.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.fumiko, "Then I waited for Amaya to leave for her… break.");
        await ƒS.Speech.tell(characters.amaya, "You were watching me? You knew all this time?");
        await ƒS.Speech.tell(characters.fumiko, "It was the perfect opportunity.");
        await ƒS.Speech.tell(characters.fumiko, "But then Nobu came by, and I lost my earring. I couldn’t go back to get it anymore.");
        await ƒS.Speech.tell(characters.fumiko, "I guess I was meant to fail either way.");
        await ƒS.Speech.tell(characters.protagonist, "But why did you…? What do you have to gain from it?");
        await ƒS.Speech.tell(characters.fumiko, "You wouldn’t understand… I just, I didn’t have any choice. I thought my life would be over if the festival takes place.");
        await ƒS.Speech.tell(characters.fumiko, "But it doesn’t matter now anyways. It’s all been decided. So take me away. Let Kohana go. It’s all my fault.");
        await ƒS.Speech.tell(characters.protagonist, "Fumiko…");
        await ƒS.Speech.tell(characters.amaya, "Don’t bother. You’ve done enough. We’ll take care of the rest.");
        await ƒS.Speech.tell(characters.protagonist, "But... I-");
        await ƒS.Speech.tell(characters.amaya, "Leave.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, "I’m sorry, Sprout. I’m sure you tried.");
        await ƒS.Speech.tell(characters.protagonist, "I… <i>(In the end, I wasn’t able to help at all. I suppose sometimes that’s how it goes. At least the real culprit revealed herself…)</i>");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.update(1);
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(35, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.kohana, "… It’s alright, Dreamer. We learn from our mistakes.");
        await ƒS.Speech.tell(characters.kohana, "...");
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.sad, ƒS.positionPercent(35, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.kohana, "Now, it’s time…");
        await ƒS.Speech.tell(characters.kohana, "...");
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(35, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.kohana, "Goodbye, Worldleaper…");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Location.show(locations.blackout);
        ƒS.update(5);
        // disable inventory
        await ƒS.Speech.tell(characters.protagonist, "Wait… no… <i>(Oh… not this again…)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(2);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(What happened… Where…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I’m back in my room? When did I get here? … was it all just a dream?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(It’s all so hazy… What was I doing again…?)</i>");
        ƒS.Sound.fade(sound.sad, 0, 2);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
    }
}