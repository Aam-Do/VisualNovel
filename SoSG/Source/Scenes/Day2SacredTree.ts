namespace SakuraGlade {
    export async function Day2SacredTree(): ƒS.SceneReturn {
        console.log("Day 2 Sacred Tree starting");

        await ƒS.Progress.delay(1);
        ƒS.Sound.play(sound.amaya, .5, true);
        await ƒS.Location.show(locations.sacredTree);
        await ƒS.update(2);
        await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ah... it's still just as beautiful as yesterday.)</i>");
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "I see you're back, Cub.");
        await ƒS.Speech.tell(characters.amaya, "Have you received my permit?");
        await ƒS.Speech.tell(characters.protagonist, "Yes, ma'am.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Show it to me.");
        extraItemInteraction = items.permit;
        await Inventory.open();
        await ƒS.Progress.delay(0);
        // wait for player to present permit
        extraItemInteraction = undefined;
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Good. Don't lose it.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I wasn't intending to...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Can I ask you another question?");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Go ahead.");
        await ƒS.Speech.tell(characters.protagonist, "You were guarding the tree the night of the incident, yes?");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.upset, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Yes. I thought I'd said that before.");
        await ƒS.Speech.tell(characters.protagonist, "How come you didn't see anything happening?");
        await ƒS.Speech.tell(characters.amaya, "I was on my post all night, but I don't have eyes in the back of my head, Cub.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Whoever stole the Bead must have skillfully evaded my watchful eye.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Now go and do your investigations. But don't touch anything!");
        await ƒS.Speech.tell(characters.protagonist, "Yes, ma'am!");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "<i>(She gets very defensive when I bring that up. I wonder if it's her pride or something else...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well then, before all else... let's have a look around!)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(The shrine nests a little satin pillow in its middle. I suppose that's where the Moon Bead is supposed to sit. For such a holy artifact, it's not very well secured.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Then again, apparently, no one ever tried to steal it before, so they had no reason to worry about it. Apart from the missing Bead, I can't see anything amiss with the shrine though.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(The ground before it is tiled, so I won't be finding any footprints either. I'll check the surrounding area.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm what's that?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I see something strangely black on the ground between some roots. Did someone litter?)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ew... gross, it's sticky.)</i>");
        Inventory.add(items.blackOoze);
        dataForSave.inventory.push(items.blackOoze);
        await Inventory.open();
        await ƒS.Progress.delay(0);
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well, evidence is evidence. I'll keep it with me.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(This is the only thing I could find out of place. The rest of the area looks very well-kept and tidy. I guess that's it for my big hopes of finding useful stuff here.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Let's head back...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Oh!)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I almost stepped on something! It reflected the sun in my eyes, else I wouldn't have seen it at all. What is this?)</i>");

        Inventory.add(items.brokenEarring);
        dataForSave.inventory.push(items.brokenEarring);
        await Inventory.open();
        await ƒS.Progress.delay(0);

        await ƒS.Speech.tell(characters.protagonist, "<i>(Such a pretty little hanger. Someone definitely lost this here. This should prove insightful.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Well, that wraps it up then, nothing left to find here.)</i>");

        ƒS.Speech.clear();
    }
}