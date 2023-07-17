namespace SakuraGlade {
    export async function Day1Kohana(): ƒS.SceneReturn {
        console.log("Day 1 Kohana starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.sakuraGladeDay);
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(70, 100));
        await ƒS.update(2);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(The villagers have dispersed, but Kohana is still here.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Kohana?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "...you've returned, Dreamer...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Would she stop calling me strange names...?)</i> ...Yes, Nobu asked me to investigate the theft to clear your name and find the Moon Bead.");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "That's... kind of you.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "Ahem, well, I'll try my best. So, can you tell me again your name and occupation?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Kohana... I'm the village's priestess.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "Priestess?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Mh... I live in the temple near the Sacred Tree.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(She's definitely not the talkative kind...)</i> How did you hear about the Moon Bead being stolen?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "I discovered it.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "You were the first at the scene of the incident?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, " ...yes.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well, of course, that doesn't look good for her.)</i> Why were you at the scene today?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Do you know about the Moon Ritual? It's my duty to perform at the festival with the Moon Bead and hold it into the full moon's light for the village's blessing... it is very spiritual...");
        await ƒS.Speech.tell(characters.kohana, "If it is missing, we cannot have the festival... the village will not receive a blessing... I fear for our good fortune!");
        await ƒS.Speech.tell(characters.kohana, "Apologies... I got lost in thought.");
        await ƒS.Speech.tell(characters.kohana, "I take the Bead for cleansing each morning and evening. Such is my duty.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "So you wanted to take it out of the shrine at the Sacred Tree to cleanse it?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Mh.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Come on, don't make me worm every answer out of you...)</i> And it was missing?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Well... not quite.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(What now?)</i>");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "It had been replaced... with this. A replica. It's used for practicing.");
        //    show inventory!!
        ƒS.Inventory.add(items.replica);
        await ƒS.Inventory.open();
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "Oh... but then, couldn't it have been replaced days before?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "No... I cleansed the Bead yesterday evening. It was still there then.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "I see... <i>(That narrows it down to this night, but all of this isn't really telling me anything.)</i> What did you do the night of the incident?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "... Sleeping...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Surely, anyone would say that.)</i> Does anyone else have access to the Bead, other than you?");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Yes... Onee-sama does...");
        await ƒS.Speech.tell(characters.kohana, "I thank you for your efforts, Dreamer. I'm tired and I have other duties... please excuse me now...");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "Oh, uhm. Of course. Thank you for all the information.");
        await ƒS.Character.hide(characters.kohana);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "<i>(She left. I need to get better at this. I know more now, but it all still makes her the number one suspect. Maybe I can find out more elsewhere.)</i>");
        
        dataForSave.day1TalkedTo.push(characters.kohana);
    }
}