
namespace SakuraGlade {
    // item description updates
    export let updatedItemDescriptions = {
        blackOoze: "Black slime that must have drooped from Amaya’s cap while she was patrolling the Sacred Tree on the night of the incident. Why didn’t she notice it fall down?",
        brokenEarring: "A beautiful crystal earring that Fumiko lost near the Sacred Tree. It’s broken, unfortunately. When did she lose it there?",
        medicalNotice: "A medical record that factually explains Hina’s incurable “mummy disease”. The news must have been heartbreaking… He claims to have gone out for a stroll and prayed at the Sacred Tree around 1:30 am.",
        replica: "A glass replica of the Moon Bead. It was found in place of the original at the Sacred Tree. I believe it was stolen from the temple some time after midnight while Kohana was bathing."
    };

    // character dialogues regarding items
    export async function AmayaReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                await ƒS.Speech.tell(characters.amaya, "Is this a fairy device?");
                await ƒS.Speech.tell(characters.amaya, "If it’s not going to help us find the culprit I don’t know why you’re showing me this.");
                break;
            case items.idCard:
                await ƒS.Speech.tell(characters.amaya, "Interesting… What does this have to do with anything?");
                break;
            case items.blackOoze:
                if (dataForSave.itemsUpdated.includes(items.blackOoze)) {
                    await ƒS.Speech.tell(characters.amaya, "We’ve talked about this before, Cub. I probably lost this while patrolling.");
                } else {
                    dataForSave.itemsUpdated.push(items.blackOoze);
                    await ƒS.Speech.tell(characters.amaya, "Oh… where did you get that from?");
                    await ƒS.Speech.tell(characters.protagonist, "It was on the ground near the Sacred Tree. Do you know what it is?");
                    await ƒS.Speech.tell(characters.amaya, "Look, Cub, I’m not particularly proud of it, but as you can see my cap dissolves at the edges.");
                    await ƒS.Speech.tell(characters.amaya, "Sometimes a drop falls down. I try to clean up after myself, but eventually, I’ll miss one. Don’t worry. It’s not unsanitary.");
                    await ƒS.Speech.tell(characters.protagonist, "I found it quite a bit away from the shrine, what were you doing over there?");
                    await ƒS.Speech.tell(characters.amaya, "I don’t stand in one spot like a statue all night, Cub.");
                    await ƒS.Speech.tell(characters.amaya, "This might’ve dropped down during my patrol. I must’ve been too busy to notice it.");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(Busy…?)</i>");
                }
                break;
            case items.brokenEarring:
                if (dataForSave.itemsUpdated.includes(items.brokenEarring)) {
                    if (!dataForSave.pointsReceived.includes(characters.amaya.name + items.brokenEarring.name)) {
                        dataForSave.investigationPoints += 5;
                        dataForSave.pointsReceived.push(characters.amaya.name + items.brokenEarring.name);
                    }
                    await ƒS.Speech.tell(characters.amaya, "So this belongs to Fumiko?");
                    await ƒS.Speech.tell(characters.amaya, "…");
                    await ƒS.Speech.tell(characters.amaya, "That is strange. I didn’t see her around here that day… And it certainly didn’t get here yesterday. I was guarding the area meticulously.");
                    await ƒS.Speech.tell(characters.protagonist, "Could she have lost it before the day of the incident?");
                    await ƒS.Speech.tell(characters.amaya, "That’s unlikely… the place was cleaned just the day before.");
                    await ƒS.Speech.tell(characters.protagonist, "Hmm... thank you.");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(This means Fumiko definitely lost it on the night of the incident…)</i>");

                } else {
                    await ƒS.Speech.tell(characters.amaya, "That is a stunning earring. A shame that it’s broken.");
                    await ƒS.Speech.tell(characters.amaya, "Why are you showing me this, Cub?");
                    await ƒS.Speech.tell(characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await ƒS.Speech.tell(characters.amaya, "Interesting…");
                    await ƒS.Speech.tell(characters.amaya, "I’m afraid I do not. But Fumiko’s family runs the jewelry shop. Maybe she knows who bought it.");
                }
                break;
            case items.medicalNotice:
                break;
            case items.permit:
                break;
            case items.replica:
                break;
        }
    }
    export async function KohanaReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                break;
            case items.idCard:
                break;
            case items.blackOoze:
                break;
            case items.brokenEarring:
                break;
            case items.medicalNotice:
                break;
            case items.permit:
                break;
            case items.replica:
                break;
        }
    }
    export async function FumikoReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                break;
            case items.idCard:
                break;
            case items.blackOoze:
                break;
            case items.brokenEarring:
                break;
            case items.medicalNotice:
                break;
            case items.permit:
                break;
            case items.replica:
                break;
        }
    }
    export async function NobuReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                break;
            case items.idCard:
                break;
            case items.blackOoze:
                break;
            case items.brokenEarring:
                break;
            case items.medicalNotice:
                break;
            case items.permit:
                break;
            case items.replica:
                break;
        }
    }
}