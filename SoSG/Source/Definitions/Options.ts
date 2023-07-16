namespace SakuraGlade {
    export async function day1Locations(): Promise<any> {
        let options = {
            kohana: "Talk to Kohana",
            amaya: "Go to the Sacred Tree",
            nobu: "Search for Nobu"
        }

        if (dataForSave.day1TalkedTo.includes('kohana')) {
            delete options.kohana;
        }
        if (dataForSave.day1TalkedTo.includes('amaya')) {
            delete options.amaya;
        }
        if (dataForSave.day1TalkedTo.includes('nobu')) {
            delete options.nobu;
        }

        do {
            let optionsElement = await ƒS.Menu.getInput(options, "choices");
            switch (optionsElement) {
                case options.kohana:
                    // continue path here
                    dataForSave.day1TalkedTo.push("kohana");
                    // day1 kohana
                    delete options.kohana;
                    console.log(dataForSave.day1TalkedTo);
                    break;
                case options.amaya:
                    // continue path here
                    dataForSave.day1TalkedTo.push("amaya");
                    // day1 amaya
                    delete options.amaya;
                    console.log(dataForSave.day1TalkedTo);
                    break;
                case options.nobu:
                    // continue path here
                    if (dataForSave.day1TalkedTo.includes('kohana')) {
                        dataForSave.day1TalkedTo.push("nobu");
                        // day1 nobu
                        delete options.nobu;
                        console.log(dataForSave.day1TalkedTo);
                    } else {
                        await ƒS.Speech.tell(characters.protagonist, "<i>(Nobu asked me to talk to Kohana. I should do that before I start looking for him)</i>");
                    }
                    break;
            }
        } while (Object.keys(options).length > 0)

        console.log("continue with day1 fumiko");
    }
}