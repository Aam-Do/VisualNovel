namespace SakuraGlade {
    export async function day1Locations(): ƒS.SceneReturn {
        let options = {
            kohana: "Talk to Kohana",
            amaya: "Go to the Sacred Tree",
            nobu: "Search for Nobu"
        }

        if (dataForSave.day1TalkedTo.includes(characters.kohana)) {
            delete options.kohana;
        }
        if (dataForSave.day1TalkedTo.includes(characters.amaya)) {
            delete options.amaya;
        }
        if (dataForSave.day1TalkedTo.includes(characters.nobu)) {
            delete options.nobu;
        }

        if (Object.keys(options).length > 0) {
            let optionsElement = await ƒS.Menu.getInput(options, "choices");
            switch (optionsElement) {
                case options.kohana:
                    // continue path here
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();
                    return "Day1Kohana";
                case options.amaya:
                    // continue path here
                    ƒS.Speech.clear();
                    ƒS.Speech.hide();
                    return "Day1Amaya";
                case options.nobu:
                    // continue path here
                    if (dataForSave.day1TalkedTo.includes(characters.kohana)) {
                        ƒS.Speech.clear();
                        ƒS.Speech.hide();
                        return "Day1Nobu";
                    } else {
                        await ƒS.Speech.tell(characters.protagonist, "<i>(Nobu asked me to talk to Kohana. I should do that before I start looking for him...)</i>");
                        return "Day1Locations";
                    }
            }
        }
        else {
            ƒS.Speech.clear();
            ƒS.Speech.hide();
            return "Day1Fumiko";
        }
    }

    export async function day2Locations(): ƒS.SceneReturn {
        let options = {
            amaya: "Sacred Tree",
            kohana: "Temple",
            fumiko: "Village Square",
            nobu: "Nobu’s Home",
            inn: "Back to Inn"
        }

        let optionsElement = await ƒS.Menu.getInput(options, "choices");
        switch (optionsElement) {
            case options.amaya:
                // continue path here
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                return "Day2Amaya";
            case options.kohana:
                // continue path here
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                return "Day2Kohana";
            case options.fumiko:
                // continue path here
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                return "Day2Fumiko";
            case options.nobu:
                // continue path here
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                return "Day2Nobu";
            case options.inn:
                // continue path here
                if (dataForSave.day2TalkedTo.includes(characters.kohana) && dataForSave.day2TalkedTo.includes(characters.amaya) && dataForSave.day2TalkedTo.includes(characters.fumiko) && dataForSave.day2TalkedTo.includes(characters.nobu)) {
                    // check if all relevant items updated
                    if (dataForSave.itemsUpdated.includes(items.blackOoze) && dataForSave.itemsUpdated.includes(items.medicalNotice) && dataForSave.itemsUpdated.includes(items.replica) && dataForSave.itemsUpdated.includes(items.brokenEarring)) {
                        await ƒS.Speech.tell(characters.narrator, "Are you sure you wish to go back to the inn?");

                        let options = {
                            yes: "Yes, I've seen everything.",
                            no: "Actually, I still wanted to check something"
                        }

                        let optionsElement = await ƒS.Menu.getInput(options, "choices");
                        switch (optionsElement) {
                            case options.yes:
                                // continue path here
                                ƒS.Speech.clear();
                                ƒS.Speech.hide();
                                return "Day2Evening";
                            case options.no:
                                // continue path here
                                return "Day2Locations";
                        }
                    } else {
                        await ƒS.Speech.tell(characters.protagonist, "<i>(I still have questions about the things I found, I shouldn’t head back yet...)</i>");
                        return "Day2Locations";
                    }
                } else {
                    await ƒS.Speech.tell(characters.protagonist, "<i>(I don’t think I should go back to the inn yet, I haven’t even talked to everyone...)</i>");
                    return "Day2Locations";
                }
        }
    }

    export async function day2Inventory(): Promise<void> {
        let inv = await Inventory.open();
        console.log(inv);
        switch (inv[0]) {
            case "present":
                console.log("it should technically open the inventory again");
                await day2Inventory();
                break;
            case "close":
                break;
        }
    }
}