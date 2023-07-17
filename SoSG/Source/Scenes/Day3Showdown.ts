namespace SakuraGlade {
    export async function Day3Showdown(): ƒS.SceneReturn {
        console.log("Day 3 Showdown starting");

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

        let options = {
            amaya: "Amaya",
            kohana: "Kohana",
            nobu: "Nobu",
            fumiko: "Fumiko"
        }

        let optionsElement = await ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.amaya:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "It was Amaya. She stole the Moon Bead. She had access to the tree all night.");
                await ƒS.Speech.tell(characters.amaya, "What?!");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "…Onee-sama?");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.nobu, "Our warden? That can’t be!");
                return "BadEnding";
            case options.kohana:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "It was, after all, Kohana. She has the replica at all times, and since she’s close to Amaya, she convinced her to cover up her theft.");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "That’s not true…");
            ƒS.Speech.setTickerDelays(40, 5000);
            await ƒS.Speech.tell(characters.nobu, "Sprout? Are you sure?");
                await ƒS.Speech.tell(characters.amaya, "How dare you…!");
                return "BadEnding";
            case options.nobu:
                // continue path here
                await ƒS.Speech.tell(characters.protagonist, "It was Nobu. He snuck to the Tree at night pretending to pray, but in reality, it was all just a scheme!");
                await ƒS.Speech.tell(characters.nobu, "What are you saying, Sprout?");
                await ƒS.Speech.tell(characters.amaya, "Do you ever think before speaking?");
            ƒS.Speech.setTickerDelays(60, 5000);
            await ƒS.Speech.tell(characters.kohana, "…is that true?");
            ƒS.Speech.setTickerDelays(40, 5000);
            return "BadEnding";
            case options.fumiko:
                // continue path here
                return "BittersweetEnding"
        }
    }
}