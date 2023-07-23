namespace SakuraGlade {
    export async function WelcomeSakuraGlade(): ƒS.SceneReturn {
        console.log("Welcome to Sakura Glade starting");

        await ƒS.Progress.delay(1);
        ƒS.Sound.play(sound.village, .5, true);
        await ƒS.Location.show(locations.sakuraGladeNight);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(transitions.normal.duration, transitions.normal.alpha, transitions.normal.edge);
        // await ƒS.Progress.delay(2);
        ƒS.Speech.show();
        // await ƒS.Progress.delay(1);
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
        await ƒS.update(.1);
        await ƒS.Speech.tell(characters.nobu, "... and here we are! Welcome to Sakura Glade.");
        await ƒS.Speech.tell(characters.nobu, "It's late already, so there's not a lot of people on the street anymore. You should see it tomorrow when it's bustling with folks and everyone's busy with the preparations for the Spring Festival!");
        await ƒS.Speech.tell(characters.nobu, "Ah, that's my favorite time of the year. You visit at the perfect time.");
        await ƒS.Speech.tell(characters.nobu, "Now, I don't mean to hold you up for too long. You must be tired and all of this surely is a lot to take in.");
        await ƒS.Speech.tell(characters.nobu, "There's a wonderful little inn right around the corner, Cherrywood Lodge. I'll bring you there, you can get a nice room and get accustomed to everything, yes?");
        let choice1 = {
            good: "Sounds good!",
            questions: "Actually, I have a few questions..."
        };
        let choice1Element = await ƒS.Menu.getInput(choice1, "choices");
        switch (choice1Element) {
            case choice1.good:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "Sounds good!");
                await ƒS.Speech.tell(characters.nobu, "Wonderful! Let's go and get you a room and some dinner.");
                break;
            case choice1.questions:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "Actually, I have a few questions... Would you mind?");
                await ƒS.Speech.tell(characters.nobu, "Of course not. Ask ahead!");
                interface MyType {
                    sakuraGlade: string;
                    festival: string;
                    [keyX: string]: string;
                    leave: string;
                }
                let questions: MyType = {
                    sakuraGlade: "Sakura Glade?",
                    festival: "What festival?",
                    leave: "That's all."
                };
                // let questions = {
                //     sakuraGlade: "Sakura Glade?",
                //     festival: "What festival?",
                //     leave: "That's all."
                // }
                let leave: boolean = false;
                do {
                    let questionsElement = await ƒS.Menu.getInput(questions, "choices");
                    switch (questionsElement) {
                        case questions.sakuraGlade:
                            // continue path here
                            await ƒS.Speech.tell(characters.protagonist, "Can you tell me more about Sakura Glade?");
                            await ƒS.Speech.tell(characters.nobu, "Surely, Sprout.");
                            await ƒS.Speech.tell(characters.nobu, "You stand here in Sakura Glade, a village that has been around since the gods roamed this earth.");
                            await ƒS.Speech.tell(characters.nobu, "I wasn't born here, but it is my home. ");
                            await ƒS.Speech.tell(characters.nobu, "All who live here are Capfolk. We don't get visitors often, but I am sure everyone will welcome you with open arms. We have little worries here.");
                            await ƒS.Speech.tell(characters.nobu, "The big tree you see up top is our Sacred Tree. It's in bloom this time of the year, you're very lucky. It's what gave Sakura Glade its name.");
                            await ƒS.Speech.tell(characters.nobu, "Isn't it just majestic? It looks even better in sunlight.");
                            await ƒS.Character.hide(characters.nobu);
                            await ƒS.Character.show(characters.nobu, characters.nobu.pose.thinking, ƒS.positionPercent(50, 100));
                            await ƒS.update(.1);
                            await ƒS.Speech.tell(characters.nobu, "We can go there tomorrow if you'd like. There's a shrine devoted to the Moon God, if we ask him in prayers maybe he can help you find your way back home...");
                            await ƒS.Character.hide(characters.nobu);
                            await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                            await ƒS.update(.1);
                            delete questions.sakuraGlade;
                            break;
                        case questions.festival:
                            // continue path here
                            await ƒS.Speech.tell(characters.protagonist, "What festival were you talking about earlier?");
                            await ƒS.Character.hide(characters.nobu);
                            await ƒS.Character.show(characters.nobu, characters.nobu.pose.surprised, ƒS.positionPercent(50, 100));
                            await ƒS.update(.1);
                            await ƒS.Speech.tell(characters.nobu, "Oh? You don't know about the Spring Festival?");
                            await ƒS.Character.hide(characters.nobu);
                            await ƒS.Character.show(characters.nobu, characters.nobu.pose.neutral, ƒS.positionPercent(50, 100));
                            await ƒS.update(.1);
                            await ƒS.Speech.tell(characters.nobu, "No, apologies. I got ahead of myself.");
                            await ƒS.Character.hide(characters.nobu);
                            await ƒS.Character.show(characters.nobu, characters.nobu.pose.smiling, ƒS.positionPercent(50, 100));
                            await ƒS.update(.1);
                            await ƒS.Speech.tell(characters.nobu, "In four days, we celebrate the Spring Festival in favor of our guardian deity, the Moon God. It's held every year on the day the Sacred Tree reaches full bloom.");
                            await ƒS.Speech.tell(characters.nobu, "The whole village gets together and starts decorating and preparing for it beginning tomorrow, and on the third day, we celebrate with the Moon Ritual and fireworks.");
                            await ƒS.Speech.tell(characters.protagonist, "The Moon Ritual?");
                            await ƒS.Speech.tell(characters.nobu, "A sacred dance performed by the village priest, before holding the Moon Bead into the full moon's light to wish for yet another plentiful harvest in autumn and a year of good health.");
                            // Reflect.set(questions, "moonBead", "The Moon Bead?");
                            questions.moonBead = "The Moon Bead?"
                            delete questions.leave;
                            questions.leave = "That's all.";
                            delete questions.festival;
                            break;
                        case questions.moonBead:
                            // continue path here
                            await ƒS.Speech.tell(characters.protagonist, "What is the Moon Bead you spoke of?");
                            await ƒS.Speech.tell(characters.nobu, "The Moon Bead is our most precious possession. It's kept in the shrine of the Moon God at the Sacred Tree.");
                            await ƒS.Speech.tell(characters.nobu, "They say it's a tear from the Moon God himself, shed for the plague and illness that haunted this land eons ago, and since protecting the village from harm. Legend has it that it can fulfill any wish the bearer asks for.");
                            delete questions.moonBead;
                            break;
                        case questions.leave:
                            // continue path here
                            await ƒS.Speech.tell(characters.protagonist, "That's all, thank you.");
                            await ƒS.Speech.tell(characters.nobu, "No problem, Sprout. I'm glad to be of help.");
                            await ƒS.Speech.tell(characters.nobu, "Now let's go and get you a room and some dinner.");
                            leave = true;
                            break;
                    }
                } while (!leave)
                break;
        }

        ƒS.Speech.clear();
        ƒS.Speech.hide();
        ƒS.Sound.fade(sound.village, 0, 2)
        await ƒS.Character.hide(characters.nobu);
        await ƒS.Location.show(locations.innNight);
        await ƒS.update(1);
        await ƒS.Progress.delay(1);
        ƒS.Speech.show()
        await ƒS.Speech.tell(characters.protagonist, "<i>(... Nobu showed me a little around town and gave me directions to his house in case I needed help. He really is very kind. He even paid for my dinner and room since I don't have this... world's currency!)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(It's crazy. Just a few hours ago I was walking home from Uni, and now I'm laying in bed in an inn of a whole other world.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(It's nice here, but I should find a way to get back home tomorrow. My friends and family must be worried sick.)</i>");
        await ƒS.Speech.tell(characters.protagonist, "<i>(But, for now, I guess some rest won't hurt. Tomorrow, I'll look for answers...)</i>");
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.blackout);
        await ƒS.update(2);
    }
}