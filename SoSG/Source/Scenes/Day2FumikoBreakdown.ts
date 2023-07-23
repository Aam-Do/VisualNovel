namespace SakuraGlade {
    export async function Day2Breakdown(): ƒS.SceneReturn {
        console.log("Day 2 Breakdown starting");
        await ƒS.Location.show(locations.innNight);
        ƒS.Sound.play(sound.sad, .5, true);
        await ƒS.update(2);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Something woke me up... Is it morning yet? No, it’s still dark out.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(There’s a strange noise outside, is that… crying?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I should check it out.)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        // await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.sakuraGladeNight);
        await ƒS.update(2);
        // await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(It’s coming from the bank of the small river... I see someone crouching there… that kimono seems familiar…)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Fumiko? What is she doing so late out?)</i>");
        // shake/flash screen animation
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.crying, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "… Fumiko? What’s wrong?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Who is there?");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.crying, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Ah. It’s you.");
        await ƒS.Speech.tell(characters.protagonist, "What are you doing out here?");
        await ƒS.Speech.tell(characters.fumiko, "I just… needed some fresh air.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Don’t worry about it. It’s nothing. I’m fine.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "You should go back to bed.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(She doesn’t look fine at all…)</i> No it’s alright, I’m already here now anyways. You can tell me.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.crying, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "No, I can’t…");
        await ƒS.Speech.tell(characters.fumiko, "You’ll hate me. Everyone will hate me…");
        await ƒS.Speech.tell(characters.fumiko, "Oh, what have I done?");
        await ƒS.Speech.tell(characters.protagonist, "I won’t hate you.");
        await ƒS.Character.hide(characters.fumiko);
        await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.fumiko, "Do you promise?");
        let options = {
            yes: "I promise.",
            no: "I… can’t promise."
        }

        let optionsElement = await ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.yes:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "I promise. I won’t hate you, Fumiko.");
                await ƒS.Speech.tell(characters.fumiko, "… thank you. ");
                await ƒS.Speech.tell(characters.protagonist, "So, what’s bothering you?");
                await ƒS.Speech.tell(characters.fumiko, "It’s… this. Here. Take it.");
                await ƒS.Speech.tell(characters.fumiko, "I can’t hold on to it anymore.");
                Inventory.add(items.moonBead);
                dataForSave.inventory.push(items.moonBead);
                await Inventory.open();
                await ƒS.Progress.delay(0);
                await ƒS.Speech.tell(characters.protagonist, "<i>(I can’t believe my eyes… it’s the real Moon Bead…!)</i> You…!?");
                await ƒS.Speech.tell(characters.fumiko, "Yes. It was me. I know. I’m sorry. I shouldn’t have.");
                await ƒS.Speech.tell(characters.fumiko, "And I shouldn’t have lied to you. I… I just didn’t know any better.");
                await ƒS.Speech.tell(characters.protagonist, "<i>(Wow… that’s one confession I didn’t think I’d hear.)</i> Why did you steal it?");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "You’ll actually… listen to me?");
                await ƒS.Speech.tell(characters.protagonist, "Of course. I promised you, didn’t I?");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "I’m glad. I don’t expect to be forgiven. But maybe you can understand me.");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "…");
                await ƒS.Speech.tell(characters.fumiko, "It’s …There’s just so much pressure on me, you know?");
                await ƒS.Speech.tell(characters.fumiko, "Oh, Fumiko can do this and Fumiko always smiles, she’s so beautiful and she’s so kind to everyone and such a devoted child.");
                await ƒS.Speech.tell(characters.fumiko, "You know my parents want me to be Sakura Princess this year, and I’m trying my best to be the perfect child, I- I really am! But I…");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.crying, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "I don’t want to be Sakura Princess. I don’t want to marry some snob my parents selected for me. Heck, I don’t even <i>like</i> making jewelry!");
                await ƒS.Speech.tell(characters.protagonist, "<i>(It seems like she always had to be the picture perfect child…)</i>");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "I want to be able to do what <b>I</b> want.");
                await ƒS.Speech.tell(characters.fumiko, "I want to see the forest behind the village walls. I want to have a bakery and not care when my kimono gets full of flour or when I bruise myself or when a bread turns out burnt or crooked. I just want to be able to live my own life.");
                await ƒS.Speech.tell(characters.fumiko, "And if the Spring Festival takes place tomorrow, all hope I have left to actually do that? It’ll all be gone. So that’s why…");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.crying, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "That’s why I was hoping that without the Moon Bead, it won’t happen. I didn’t want anything bad to happen to Kohana! I thought I could just bring it back after tomorrow and have another year to sort things out with my parents…");
                await ƒS.Speech.tell(characters.protagonist, "I see… That’s a really important confession, Fumiko. Not just because of the Moon Bead, but because of your entire being…");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "Well, it doesn’t matter anymore. It’s over anyways.");
                await ƒS.Speech.tell(characters.protagonist, "What do you mean?");
                await ƒS.Speech.tell(characters.fumiko, "My parents said they’ll marry me off no matter if the festival takes place or not. So, I don’t have a reason to stop it from happening anymore…");
                await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm… it’s a complicated situation, but…)</i>");
                await ƒS.Speech.tell(characters.protagonist, "We’ll see about that tomorrow when we tell the others.");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.surprised, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "No, you can’t tell them!");
                await ƒS.Speech.tell(characters.protagonist, "I won’t. You will. You’ll make this right, and explain your situation.");
                await ƒS.Speech.tell(characters.protagonist, "No one ever knew you felt like that. You deserve to be recognised, Fumiko. And you brought the Moon Bead back after all, so there’s no reason not to hear you out. I’m sure they’ll all understand.");
                await ƒS.Speech.tell(characters.protagonist, "And who knows, maybe together we can convince your parents to let you have your own life too.");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "You mean it?");
                await ƒS.Speech.tell(characters.protagonist, "Of course. Now you should head back home, and I’ll go back to bed as well. Alright?");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.neutral, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "Alright. Thank you, Precious.");
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Location.show(locations.blackout);
                ƒS.Sound.fade(sound.sad, 0, 2);
                await ƒS.update(2);
                // skip to good ending
                return "GoodEnding";
            case options.no:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "I… can’t promise before I know what it is. I’m sorry.");
                await ƒS.Speech.tell(characters.protagonist, "I’m maybe not going to hate you, but, if it is what I think it is, you know you have to face the consequences of your actions.");
                await ƒS.Speech.tell(characters.fumiko, "…");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.crying, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "I know. I’m sorry. I guess I shouldn’t have hoped that you’d understand. I…");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.Character.show(characters.fumiko, characters.fumiko.pose.sad, ƒS.positionPercent(50, 100));
                await ƒS.update(.1);
                await ƒS.Speech.tell(characters.fumiko, "I gotta go. I’ll be there, tomorrow. Do what you have to do.");
                await ƒS.Character.hide(characters.fumiko);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, "Wait!");
                await ƒS.Speech.tell(characters.protagonist, "...");
                await ƒS.Speech.tell(characters.protagonist, "<i>(I have a bad feeling about this…)</i>");
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.Location.show(locations.blackout);
                ƒS.Sound.fade(sound.sad, 0, 2);
                await ƒS.update(2);
                return "Day3Morning";
        }
    }
}