namespace SakuraGlade {
    export async function Day1Amaya(): ƒS.SceneReturn {
        console.log("Day 1 Amaya starting");

        await ƒS.Progress.delay(1);
        await ƒS.Location.show(locations.sacredTree);
        await ƒS.update(2);
        await ƒS.Progress.delay(1);
        ƒS.Speech.show();
        await ƒS.Speech.tell(characters.protagonist, "<i>(Woah... the Sacred Tree. I see why it's such a holy place. This tree is gigantic! And the cherry blossoms fill the air with a nice sweet scent...)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(I can see a little shrine at its roots, that's probably where the Moon Bead is usually kept. Let me take a closer look...)</i>");
        await ƒS.Speech.tell("???", "You can't go here.");
        await ƒS.Speech.tell(characters.protagonist, "What?");
        ƒS.Sound.play(sound.amaya, .5, true);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.upset, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell("???", "A flightless fairy! Are your eyes broken as well? Can't you see this area is restricted at the moment?");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Ouch... she's scary. I admit, I didn't see the little rope around the area.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "Apologies, ma'am. I was fully taken in by the beauty of the tree, I didn't see the barrier at all.");
        await ƒS.Speech.tell(characters.amaya, "Hmm... call me Amaya. Where are you from?");
        await ƒS.Speech.tell(characters.protagonist, "Uh, well. Nobu picked me up in the forest, I... I'm not sure how I got there.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Interesting... and what leads you here?");
        await ƒS.Speech.tell(characters.protagonist, "Nobu asked me to investigate the theft of the Moon Bead.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Why do I feel like I'm the one being interrogated right now?)</i>");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.upset, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "I see. You don't believe it was Kohana?");
        await ƒS.Speech.tell(characters.protagonist, "No, ma'am. Well, I can't say for sure yet, but I'd like to believe her.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "We have something in common then.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(She finally seems more at ease. I thought she was going to stab me with that sword any second.)</i>");
        await ƒS.Speech.tell(characters.amaya, "What is your name, Cub?");
        await ƒS.Speech.tell(characters.protagonist, "I'm " + dataForSave.nameProtagonist + ". It's nice to meet you, Amaya. May I take a look around the scene?");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.upset, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "No.");
        await ƒS.Speech.tell(characters.amaya, "Not for now. I can't have just anyone walking around here. I will issue you a permit after I've seen what you can do.");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Damn... there's no way I'm gonna get past her. Guess I'll just have to be patient and on my best behavior.)</i> I understand that. Can I ask you a few questions still?");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "A few.");
        await ƒS.Speech.tell(characters.protagonist, "What's your job here? Are you the one guarding the Moon Bead?");
        await ƒS.Speech.tell(characters.amaya, "Yes. I am the Warden of the Sacred Tree.");
        await ƒS.Speech.tell(characters.amaya, "At this point in time I'm securing the perimeter and making sure no one messes around with anything until we've confirmed the culprit of the theft...");
        await ƒS.Speech.tell(characters.protagonist, "<i>(Yup, I can see that.)</i> Were you guarding the Tree last night?");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.upset, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "I guard the Tree every night. And not once has a single thing happened.");
        await ƒS.Speech.tell(characters.protagonist, "Until last night?");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.thinking, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Yes... we know that already. What is the point of this?");
        await ƒS.Speech.tell(characters.protagonist, "Well, I'm just trying to gather information and get a picture of all the locations and people so I can rule out possible suspects and-");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "Very good strategy. I shall look forward to the fruits of your investigations.");
        await ƒS.Character.hide(characters.amaya);
        await ƒS.Character.show(characters.amaya, characters.amaya.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.amaya, "I must ask you to leave now though. Come back another time when I've finished securing the area.");
        await ƒS.Character.hide(characters.amaya);
        ƒS.Sound.fade(sound.amaya, 0, 2)
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "<i>(She's impossible to get more information from. I guess I'll have to wait for my permit before I come back here.)</i>");

        dataForSave.day1TalkedTo.push(characters.amaya);
    }
}