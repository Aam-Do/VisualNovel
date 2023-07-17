namespace SakuraGlade {
    export async function GoodEnding(): ƒS.SceneReturn {
        console.log("Good Ending starting");

        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.innDay);
        await ƒS.update(2);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(I fell asleep immediately the second I got back to my bed.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well then. If all goes well now, I can clear Kohana’s name and help Fumiko out. Let’s get going!)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sakuraGladeDay);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(35, 100));
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(55, 100));
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(70, 100));
        await ƒS.update(2);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Everyone’s gathered… Amaya, Kohana, Nobu, Fumiko.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Good morning everyone.");
        await ƒS.Speech.tell(characters.nobu, "Good morning, Grasshopper!");
        await ƒS.Speech.tell(characters.fumiko, "Good morning…");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "...Mh.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.amaya, "Well then, Cub. We’ve put our trust in you. So? Tell us. Who was the real culprit behind the theft of the Moon Bead?");
        await ƒS.Speech.tell(characters.protagonist, "Actually, we’ve got something to tell you.");
        await ƒS.Speech.tell(characters.nobu, "We?");
        await ƒS.Speech.tell(characters.protagonist, "Fumiko, would you come to me?");
        await ƒS.Speech.tell(characters.fumiko, "Yes. … I have something to tell you.");
        await ƒS.Speech.tell(characters.amaya, "What is the meaning of this…?");
        await ƒS.Speech.tell(characters.protagonist, "Please listen to her. She entrusted herself to me yesterday. I’m sure you’ll all feel the same as me when she’s done explaining.");
        await ƒS.Speech.tell(characters.nobu, "I’m listening. Go ahead.");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Me too.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.amaya, "As you were.");
        await ƒS.Speech.tell(characters.fumiko, "Thank you.");
        await ƒS.Speech.tell(characters.fumiko, "Well… To put it briefly, it was me. I stole the Moon Bead.");
        await ƒS.Speech.tell(characters.amaya, "What? Where is it?");
        // don't forget to update character expressions :)
        await ƒS.Speech.tell(characters.protagonist, "Please, let her finish. I have it. She gave it to me. Here.");
        await ƒS.Inventory.open();
        // select moon bead
        await ƒS.Speech.tell(characters.protagonist, "She’s telling the truth. Now please continue, Fumiko.");
        await ƒS.Speech.tell(characters.fumiko, "Y-yes. I know it was wrong of me to do. I lied to a lot of people.");
        await ƒS.Speech.tell(characters.fumiko, "I stole the replica from you, Kohana. I’m truly sorry. I didn’t expect the reaction of the village to be so extreme. I never wanted to cause you any harm.");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Mh… it’s alright.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.fumiko, "Well, I knew when the Tree would be unguarded. I accidentally noticed it one night, but I’ve never ever told anyone, Amaya. I couldn’t dream to.");
        await ƒS.Speech.tell(characters.fumiko, "I think you’re the best warden the village has ever had.");
        await ƒS.Speech.tell(characters.amaya, "Fumiko…");
        await ƒS.Speech.tell(characters.fumiko, "Now, I know you’re probably wondering, why would I steal the Moon Bead. I just didn’t know any better, to be honest.");
        await ƒS.Speech.tell(characters.fumiko, "Looking back it was stupid of me. I shouldn’t have. But I didn’t see any other way.");
        await ƒS.Speech.tell(characters.fumiko, "You might not know this, but my parents are very strict. I was supposed to be Sakura Princess this year, and they would marry me off to someone I barely know. I…");
        await ƒS.Speech.tell(characters.fumiko, "I already told " + dataForSave.nameProtagonist + " yesterday. I’ve been trying my best to fit into the life they’ve foreseen for me, but I can’t. I was hoping… Well I was just hoping that if the festival didn’t take place, I could have another chance to forge my own path in life.");
        await ƒS.Speech.tell(characters.fumiko, "Pursuing the things that make me happy, instead of following the orders of my family. Actually living, enjoying the outside world, being just a normal commoner.");
        await ƒS.Speech.tell(characters.fumiko, "I might have been naïve to believe I could get away with it, but I had to try. I wanted to bring it back after the festival. I never anticipated the impact it would have on everyone else.");
        await ƒS.Speech.tell(characters.fumiko, "So, I stand here, not asking for forgiveness, but understanding.");
        ƒS.Speech.clear();
        // pause
        await ƒS.Speech.tell(characters.nobu, "We all make mistakes in life. I think we’re all happy that you brought the Moon Bead back in time.");
        await ƒS.Speech.tell(characters.amaya, "I never knew… how much pain you were holding in.");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "…you deserve to be seen as a person. Everyone does.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.fumiko, "Thank you everyone… Thank you, Kohana. I see you.");
        await ƒS.Speech.tell(characters.protagonist, "Nobody can be perfect. You’ve piled up all that anger and pain until it burst out. But you’ve mended your ways. You brought the Bead back.");
        await ƒS.Speech.tell(characters.fumiko, "I still understand if you can’t let me go freely, Amaya.");
        await ƒS.Speech.tell(characters.amaya, "I’ll see about that.");
        await ƒS.Speech.tell(characters.amaya, "Maybe I’ll have you do community services, helping Nobu with gathering food and firewood in the forest. All those things that get your hands dirty.");
        await ƒS.Speech.tell(characters.fumiko, "Thank you…");
        await ƒS.Speech.tell(characters.protagonist, "What will you do about your parents?");
        await ƒS.Speech.tell(characters.fumiko, "I’ll talk to them again. But this time, I know that I have friends that are on my side.");
        await ƒS.Speech.tell(characters.nobu, "Now, now. Let’s cheer, folks!");
        await ƒS.Speech.tell(characters.nobu, "It’s time we bring the good news to the people and start the festivities! The Moon Bead was found, the Spring Festival can commence!");
        await ƒS.Character.hide(characters.nobu);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.amaya, "He’s right. Let’s cheer up. We’ll think of a solution later. Come now.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "<i>(That went even better than expected! I’m glad I could convince Fumiko to speak up for herself. Even though the Moon Bead can’t actually fulfill wishes, it seems her wish did come true after all. She’ll finally be able to have a chance at her own life…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(And now, I even get to attend the festival! I better get going.)</i>");
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
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "… thank you for helping me, Dreamer. You’ve made me feel… welcomed. It’s nice.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.nobu, "You’ve done the village a great service, Sprout. Us all.");
        await ƒS.Speech.tell(characters.nobu, "I think Fumiko is waiting for you. She’s got a special thanks for you.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.fumiko, "Yes, I wanted to thank you again.");
        await ƒS.Speech.tell(characters.fumiko, "You’ve shown me that there are more people here for me than I thought, and that I have the strength to be my own person. I’ll always remember that.");
        await ƒS.Speech.tell(characters.fumiko, "So, I wanted to give you something to remember me by as well. Here, take this");
        ƒS.Inventory.add(items.crystalEarring);
        await ƒS.Inventory.open();
        await ƒS.Speech.tell(characters.protagonist, "Thank you…");
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.neutral, ƒS.positionPercent(35, 100));
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(55, 100));
        await ƒS.update(1);
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Now… You can probably feel it too… It’s time for you to say goodbye.");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.protagonist, "Wait…");
        ƒS.Speech.setTickerDelays(60, 5000);
        await ƒS.Speech.tell(characters.kohana, "Goodbye, Worldleaper!");
        ƒS.Speech.setTickerDelays(40, 5000);
        await ƒS.Speech.tell(characters.nobu, "You’re already leaving?");
        await ƒS.Speech.tell(characters.nobu, "I hope you get home safely, wherever that is, Sprout!");
        await ƒS.Speech.tell(characters.amaya, "Farewell, Cub.");
        await ƒS.Speech.tell(characters.fumiko, "I hope we’ll see each other again one day!");
        await ƒS.Location.show(locations.blackout);
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.hide(characters.kohana);
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.hide(characters.fumiko);
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
        await ƒS.Speech.tell(characters.protagonist, "<i>(Wait… there’s something in my hand. What’s that?)</i>");
        // close up of crystal earring
        await ƒS.Speech.tell(characters.protagonist, "<i>(... so it wasn’t just a dream…?)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
    }
}