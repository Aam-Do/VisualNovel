
namespace SakuraGlade {
    // item description updates
    export let updatedItemDescriptions = {
        blackOoze: "Black slime that must have drooped from Amaya’s cap while she was patrolling the Sacred Tree on the night of the incident. Why didn’t she notice it fall down?",
        brokenEarring: "An earring belonging to Fumiko that I found near the Sacred Tree. It’s broken, unfortunately. She claims to have lost it during the day of the incident.",
        medicalNotice: "A medical record that factually explains Hina’s incurable “mummy disease”. The news must have been heartbreaking… He claims to have gone out for a stroll and prayed at the Sacred Tree around 1:30 am.",
        replica: "A glass replica of the Moon Bead. It was found in place of the original at the Sacred Tree. I believe it was stolen from the temple sometime after midnight while Kohana was bathing."
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
            case items.permit:
                await ƒS.Speech.tell(characters.amaya, "I gave this to you, so you should keep it. Don't lose it.");
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
                    // update item description
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
                if (dataForSave.itemsUpdated.includes(items.medicalNotice)) {
                    if (dataForSave.investigationPoints >= 15) {
                        if (!dataForSave.pointsReceived.includes(characters.amaya.name + items.medicalNotice.name)) {
                            dataForSave.investigationPoints += 5;
                            dataForSave.pointsReceived.push(characters.amaya.name + items.medicalNotice.name);
                            await ƒS.Speech.tell(characters.amaya, "Nobu’s daughter?");
                            await ƒS.Speech.tell(characters.amaya, "You wouldn’t suspect he would be in so much secret pain, would you…");
                            await ƒS.Speech.tell(characters.protagonist, "I suppose he’s good at looking at the bright things in life. However, this is not why I am showing you this.");
                            await ƒS.Speech.tell(characters.amaya, "Do enlighten me.");
                            await ƒS.Speech.tell(characters.protagonist, "Well, Nobu claims to have been at the Tree the night of the incident at around half past one to speak a prayer. Yet you’ve claimed to not have noticed anyone.");
                            await ƒS.Speech.tell(characters.protagonist, "A stealthy thief, maybe not, but I’m sure Nobu was not trying to avoid anyone. He claims to not have seen you either.");
                            await ƒS.Speech.tell(characters.protagonist, "What were you doing at half past one?");
                            await ƒS.Speech.tell(characters.amaya, "I…");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(This might be it. Though I can’t believe it… why would she steal it??)</i>");
                            await ƒS.Speech.tell(characters.amaya, "…");
                            await ƒS.Speech.tell(characters.amaya, "Listen, Cub. I’d prefer this to be kept quiet.");
                            await ƒS.Speech.tell(characters.amaya, "I’m only telling you because, well, I don’t think I would’ve been able to keep it secret from you for long. It had to come out at some point.");
                            await ƒS.Speech.tell(characters.amaya, "…");
                            await ƒS.Speech.tell(characters.amaya, "I might’ve not been on my post at that time.");
                            await ƒS.Speech.tell(characters.protagonist, "What were you doing then?");
                            await ƒS.Speech.tell(characters.amaya, "…");
                            await ƒS.Speech.tell(characters.amaya, "You know… I used to have a family.");
                            await ƒS.Speech.tell(characters.amaya, "A husband. A child on its way…");
                            await ƒS.Speech.tell(characters.amaya, "I lost it before it could see the light of day. I… It wasn’t the same anymore after that.");
                            await ƒS.Speech.tell(characters.amaya, "I don’t expect you to understand the pain I felt, Cub. I hope you cannot, in fact.");
                            await ƒS.Speech.tell(characters.amaya, "I guess it started around then, I would search for ways to forget...");
                            await ƒS.Speech.tell(characters.amaya, "Then I found Kohana. She brought light into my life when everything seemed dark. I devoted myself to this job, all day, all night, so I wouldn’t allow myself to feel.");
                            await ƒS.Speech.tell(characters.amaya, "But at night, when no one can see, it still haunts me. So I drown it. It became a habit. When I can’t take it, I drink a bottle or two to feel okay again.");
                            await ƒS.Speech.tell(characters.amaya, "…");
                            await ƒS.Speech.tell(characters.amaya, "Ah, why am I telling you all this? I guess I crave your sympathy. But it’s alright. Now you know the truth.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(She’s right, I can’t fathom the pain she must’ve gone through…)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "I’m incredibly sorry for you.");
                            await ƒS.Speech.tell(characters.amaya, "Don’t be. There’s nothing you could do to change the past.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(... At least this means it wasn't her...)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "Well, so…");
                            await ƒS.Speech.tell(characters.amaya, "Don’t be. There’s nothing you could do to change the past.");
                            await ƒS.Speech.tell(characters.protagonist, "When did you leave your post?");
                            await ƒS.Speech.tell(characters.amaya, "Around one am. I didn’t check the specific time but I was back at my post shortly before two.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(So there’s about an hour span where the Tree was unguarded that night between one and two am. Nobu arrived at 1:30 am and got home shortly before 2 am. It’s unlikely someone managed to sneak by before Amaya came back.)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(But there is still half an hour's gap before, which is when the theft must have happened!)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "Thank you for telling me this, Amaya. I can now definitely narrow down the timeframe of the theft.");
                            await ƒS.Speech.tell(characters.amaya, "I’m sorry I couldn’t tell you this earlier. Please keep it quiet. My life depends on this job.");
                            await ƒS.Speech.tell(characters.protagonist, "Of course. I’m in no position to talk about what you just told me.");
                            await ƒS.Speech.tell(characters.amaya, "Thank you, Cub.");
                        } else {
                            await ƒS.Speech.tell(characters.amaya, "Please don't make me repeat myself...");
                            await ƒS.Speech.tell(characters.protagonist, "Could you just remind me when exactly you were absent from your post?");
                            await ƒS.Speech.tell(characters.amaya, "It must have been between one and shortly before two am.");
                            await ƒS.Speech.tell(characters.protagonist, "Thank you.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(So there’s about an hour span where the Tree was unguarded that night between one and two am. Nobu arrived at 1:30 am and got home shortly before 2 am. It’s unlikely someone managed to sneak by before Amaya came back.)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(But there is still half an hour's gap before, which is when the theft must have happened!)</i>");
                        }
                    } else {
                        await ƒS.Speech.tell(characters.amaya, "Nobu’s daughter? I didn’t know he had one.");
                        await ƒS.Speech.tell(characters.amaya, "How terrible…");
                        // more dialogue here would be nice if I have enough time
                    }
                } else {
                    await ƒS.Speech.tell(characters.amaya, "That appears to be sensitive information.");
                    await ƒS.Speech.tell(characters.amaya, "You shouldn’t go around showing it to strangers.");
                }
                break;
            case items.replica:
                if (dataForSave.itemsUpdated.includes(items.replica)) {
                    if (!dataForSave.pointsReceived.includes(characters.amaya.name + items.replica.name)) {
                        dataForSave.investigationPoints += 5;
                        dataForSave.pointsReceived.push(characters.amaya.name + items.replica.name);
                    }
                    await ƒS.Speech.tell(characters.amaya, "You think it was stolen from Kohana after midnight?");
                    await ƒS.Speech.tell(characters.amaya, "Hmm… The thief has some cunning to replace the original with it.");
                    await ƒS.Speech.tell(characters.protagonist, "What do you mean by that?");
                    await ƒS.Speech.tell(characters.amaya, "You can’t tell the difference from afar, so I wouldn’t notice anything amiss. It makes it impossible to determine when exactly the Moon Bead was stolen until Kohana would come to check on it.");
                    await ƒS.Speech.tell(characters.protagonist, "That seems quite clever.");
                    await ƒS.Speech.tell(characters.amaya, "Indeed.");
                } else {
                    await ƒS.Speech.tell(characters.amaya, "The Priestess keeps the replica for practicing the rituals. If you have questions about it you should ask Kohana.");
                    await ƒS.Speech.tell(characters.amaya, "We should figure out when it was stolen from her... Let me know once you have more information on that.");
                }
                break;
        }
    }
    export async function KohanaReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                ƒS.Speech.setTickerDelays(60, 5000);
                await ƒS.Speech.tell(characters.kohana, "… what is this? A magic device?");
                await ƒS.Speech.tell(characters.kohana, "It’s not doing anything…");
                ƒS.Speech.setTickerDelays(40, 5000);
                break;
            case items.idCard:
                ƒS.Speech.setTickerDelays(60, 5000);
                await ƒS.Speech.tell(characters.kohana, "That’s… a pretty card…");
                ƒS.Speech.setTickerDelays(40, 5000);
                break;
            case items.permit:
                ƒS.Speech.setTickerDelays(60, 5000);
                await ƒS.Speech.tell(characters.kohana, "Mh… Onee-sama doesn’t let just anyone to the Tree right now. She must trust you…");
                ƒS.Speech.setTickerDelays(40, 5000);
                break;
            case items.blackOoze:
                ƒS.Speech.setTickerDelays(60, 5000);
                await ƒS.Speech.tell(characters.kohana, "…that probably belongs to Onee-sama…");
                ƒS.Speech.setTickerDelays(40, 5000);
                break;
            case items.brokenEarring:
                if (dataForSave.itemsUpdated.includes(items.brokenEarring)) {
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "… I’m sorry for her. She usually never breaks things…");
                    ƒS.Speech.setTickerDelays(40, 5000);
                } else {
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "Mh… a radiant crystal. That is quite beautiful…");
                    await ƒS.Speech.tell(characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await ƒS.Speech.tell(characters.kohana, "No… I don’t think so. Although it reminds me of Fumiko.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                }
                break;
            case items.medicalNotice:
                if (dataForSave.itemsUpdated.includes(items.medicalNotice)) {
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "… I hope the Moon God hears his prayers…");
                    ƒS.Speech.setTickerDelays(40, 5000);
                } else {
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "I don’t think I’m supposed to read that…");
                    ƒS.Speech.setTickerDelays(40, 5000);
                }
                break;
            case items.replica:
                if (dataForSave.itemsUpdated.includes(items.replica)) {
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "… Keep it.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                } else {
                    dataForSave.itemsUpdated.push(items.replica);
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "… Keep it.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "I want to ask you something about it.");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "Mh?");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "Do you hold on to this at all times?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "Yes… I keep it in the temple for practice. No one else uses it…");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "What did you do on the day of the incident?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "I cleansed the Moon Bead in the morning… and went about my duties… cleansed the Moon Bead in the evening again, and went home. I practiced for the Moon Ritual.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "With the replica?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "Mh.");
                    await ƒS.Speech.tell(characters.kohana, "… I then went to take a bath… After that I went to bed");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "When was that?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "I finish my practice and take my bath at midnight… I go to bed at one.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "You do this regularly?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "Mh. Every day.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "Where do you keep the replica during that time?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "In my room at the temple…");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "<i>(Someone who knew her routine would easily be able to wait for the replica to be unattended…)</i>");
                    await ƒS.Speech.tell(characters.protagonist, "Did you check on it before going to bed?");
                    ƒS.Speech.setTickerDelays(60, 5000);
                    await ƒS.Speech.tell(characters.kohana, "…no.");
                    await ƒS.Speech.tell(characters.kohana, "I noticed it missing when I woke up. Later I found it at the shrine… you know the rest.");
                    ƒS.Speech.setTickerDelays(40, 5000);
                    await ƒS.Speech.tell(characters.protagonist, "<i>(So the culprit could have stolen the replica from the temple to replace the Moon Bead at some point after midnight…)</i>");
                    await ƒS.Speech.tell(characters.protagonist, "Thank you.");
                    // update item description
                }
                break;
        }
    }
    export async function FumikoReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                await ƒS.Speech.tell(characters.fumiko, "Precious, I’m not sure what you’re trying to show me here…");
                break;
            case items.idCard:
                await ƒS.Speech.tell(characters.fumiko, "What a precious portrait of you! What is all this information for?");
                break;
            case items.permit:
                await ƒS.Speech.tell(characters.fumiko, "The Sacred Tree isn’t accessible to most of us right now, so good luck with your investigations!");
                break;
            case items.blackOoze:
                await ƒS.Speech.tell(characters.fumiko, "Please don’t hold that too close to my face. And don’t drop any on my kimono either!");
                await ƒS.Speech.tell(characters.fumiko, "Inky Cap stains are impossible to wash out of silk…");
                break;
            case items.brokenEarring:
                if (dataForSave.itemsUpdated.includes(items.brokenEarring)) {
                    if (dataForSave.investigationPoints >= 20) {
                        if (!dataForSave.pointsReceived.includes(characters.fumiko.name + items.brokenEarring.name)) {
                            dataForSave.pointsReceived.push(characters.fumiko.name + items.brokenEarring.name);
                            await ƒS.Speech.tell(characters.fumiko, "I must’ve not noticed it fall off…");
                            await ƒS.Speech.tell(characters.fumiko, "Oh, Mom and Dad will surely be upset…");
                            await ƒS.Speech.tell(characters.protagonist, "What exactly were you doing at the Tree during the day of the incident?");
                            await ƒS.Speech.tell(characters.fumiko, "Oh, probably just, running errands.");
                            await ƒS.Speech.tell(characters.protagonist, "You said earlier you went past it a couple of times because of the decorations.");
                            await ƒS.Speech.tell(characters.fumiko, "That’s what I meant.");
                            await ƒS.Speech.tell(characters.protagonist, "However, Amaya claims she didn’t see you at the Tree all day.");
                            await ƒS.Speech.tell(characters.fumiko, "That’s what I meant.");
                            await ƒS.Speech.tell(characters.protagonist, "You said earlier you went past it a couple of times because of the decorations.");
                            await ƒS.Speech.tell(characters.fumiko, "Ah?");
                            await ƒS.Speech.tell(characters.fumiko, "Well, she’s not always right at the Tree. She has lunch breaks, too, you know.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(That’s strangely unspecific…)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "What were you doing at one am?");
                            await ƒS.Speech.tell(characters.fumiko, "One am?");
                            await ƒS.Speech.tell(characters.fumiko, "Well, I go to bed quite early, I need my beauty sleep.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(Talking about unspecific answers…)</i>");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(Amaya was drinking at the time, Nobu was praying, Kohana and Fumiko were sleeping… one of them has to be lying…)</i>");
                        } else {
                            await ƒS.Speech.tell(characters.fumiko, "I must’ve not noticed it fall off…");
                            await ƒS.Speech.tell(characters.fumiko, "Oh, Mom and Dad will surely be upset…");
                            await ƒS.Speech.tell(characters.protagonist, "What were you doing at one am?");
                            await ƒS.Speech.tell(characters.fumiko, "One am?");
                            await ƒS.Speech.tell(characters.fumiko, "Well, I go to bed quite early, I need my beauty sleep.");
                            await ƒS.Speech.tell(characters.protagonist, "<i>(Amaya was drinking at the time, Nobu was praying, Kohana and Fumiko were sleeping… one of them has to be lying…)</i>");
                        }
                    } else {
                        await ƒS.Speech.tell(characters.fumiko, "I must’ve not noticed it fall off…");
                        await ƒS.Speech.tell(characters.fumiko, "Oh, Mom and Dad will surely be upset…");
                        // more dialogue here would be nice if I have enough time
                    }
                } else {
                    dataForSave.itemsUpdated.push(items.brokenEarring);
                    await ƒS.Speech.tell(characters.fumiko, "Oh my- where did you find that?");
                    await ƒS.Speech.tell(characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await ƒS.Speech.tell(characters.fumiko, "Why yes, that’s mine!");
                    await ƒS.Speech.tell(characters.fumiko, "I’ve been searching for this since… well, yesterday.");
                    await ƒS.Speech.tell(characters.protagonist, "How did you lose it at the Sacred Tree?");
                    await ƒS.Speech.tell(characters.fumiko, " I often pass the Tree, especially since I’m in charge of the decorations for the Spring Festival this year.");
                    await ƒS.Speech.tell(characters.fumiko, "This might’ve dropped down during my patrol. I must’ve been too busy to notice it.");
                    // update item description
                }
                break;
            case items.medicalNotice:
                if (dataForSave.itemsUpdated.includes(items.medicalNotice)) {
                    await ƒS.Speech.tell(characters.fumiko, "So that’s why he was- … so quiet the other day.");
                    await ƒS.Speech.tell(characters.fumiko, "I’m really sorry for him.");
                } else {
                    await ƒS.Speech.tell(characters.fumiko, "Oh dear, no one deserves such a terrible fate. Her family must be grieving…");
                }
                break;
            case items.replica:
                if (dataForSave.itemsUpdated.includes(items.replica)) {
                    if (!dataForSave.pointsReceived.includes(characters.fumiko.name + items.replica.name)) {
                        dataForSave.investigationPoints += 5;
                        dataForSave.pointsReceived.push(characters.fumiko.name + items.replica.name);
                    }
                    await ƒS.Speech.tell(characters.fumiko, "The Moon Bead is of ethereal beauty. Even the replica alone is gorgeous. ");
                    await ƒS.Speech.tell(characters.protagonist, "Kohana holds on to this at the temple. Do you know of her daily routine?");
                    await ƒS.Speech.tell(characters.fumiko, "Her routine? You mean her daily cleansing of the Moon Bead?");
                    await ƒS.Speech.tell(characters.fumiko, "Everyone knows it, it’s a traditional duty of the Priestess.");
                    await ƒS.Speech.tell(characters.protagonist, "She claims to take a bath every night at midnight. Did you know of that?");
                    await ƒS.Speech.tell(characters.fumiko, "I suppose I don’t visit the temple often, especially not at night.");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(Hmm… I might as well ask a brick and I’d get more useful information. But I wonder, maybe I could find out her motive?)</i>");
                    await ƒS.Speech.tell(characters.protagonist, "So… as a jeweler, you handle gems and precious stones?");
                    await ƒS.Speech.tell(characters.fumiko, "Of course. We only sell the most high-value jewelry.");
                    await ƒS.Speech.tell(characters.protagonist, "How much would the Moon Bead be worth?");
                    await ƒS.Speech.tell(characters.fumiko, "Oh my! Surely you don’t mean-!");
                    await ƒS.Speech.tell(characters.fumiko, "…");
                    await ƒS.Speech.tell(characters.fumiko, "Well, theoretically, it’s probably priceless.");
                    await ƒS.Speech.tell(characters.fumiko, "But I could never imagine selling it! Besides, no one would buy it here, anyway.");
                    await ƒS.Speech.tell(characters.protagonist, "Are there other settlements that envy Sakura Glade for it?");
                    await ƒS.Speech.tell(characters.fumiko, "… Hmm. I don’t know.");
                    await ƒS.Speech.tell(characters.fumiko, "I’m not allowed to go outside the village. And we rarely get visitors.");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(I think it’s unlikely that she stole it in order to sell it.)</i>");
                } else {
                    await ƒS.Speech.tell(characters.fumiko, "The Moon Bead is of ethereal beauty, no one knows what material it’s made of. How it got its shape and how it got here is shrouded in mystery and myths…");
                    await ƒS.Speech.tell(characters.fumiko, "Even the replica alone is gorgeous, it is said an ancestor of my family made it. They were a true master of their craft.");
                }
                break;
        }
    }
    export async function NobuReactToItem(_item: any): Promise<void> {
        switch (_item) {
            case items.phone:
                await ƒS.Speech.tell(characters.nobu, "Oh such intricate design! What is it?");
                await ƒS.Speech.tell(characters.nobu, "…");
                await ƒS.Speech.tell(characters.nobu, "You know, I probably wouldn’t understand even if you tried.");
                break;
            case items.idCard:
                await ƒS.Speech.tell(characters.nobu, "Oh, is that you? How did they draw you on that little card with so much detail?");
                break;
            case items.permit:
                await ƒS.Speech.tell(characters.nobu, "Amaya authorized you to investigate the Sacred Tree?");
                await ƒS.Speech.tell(characters.nobu, "That’s great! I hope you’re able to find lots of useful information there.");
                break;
            case items.blackOoze:
                await ƒS.Speech.tell(characters.nobu, "Hmm this sort of looks like the ink from Amaya’s cap. You should ask her about it.");
                break;
            case items.brokenEarring:
                if (dataForSave.itemsUpdated.includes(items.brokenEarring)) {
                    await ƒS.Speech.tell(characters.nobu, "Ohoh! What a precious piece of jewelry");
                    await ƒS.Speech.tell(characters.protagonist, "I found it on the ground near the Sacred Tree. Do you know who it belongs to?");
                    await ƒS.Speech.tell(characters.nobu, "I’m sorry, Grasshopper, I’m not one to pay attention to such things.");
                    await ƒS.Speech.tell(characters.nobu, "Maybe Fumiko can tell you something, she works at the jewelry shop.");
                } else {
                    await ƒS.Speech.tell(characters.nobu, "Oh it belongs to Fumiko you say? It definitely fits her beauty!");
                    await ƒS.Speech.tell(characters.nobu, "I wonder what she was doing at the Sacred Tree, though…");
                }
                break;
            case items.medicalNotice:
                if (dataForSave.itemsUpdated.includes(items.medicalNotice)) {
                    await ƒS.Speech.tell(characters.nobu, "We’ve talked about this before, Cub. I probably lost this while patrolling.");
                } else {
                    dataForSave.itemsUpdated.push(items.medicalNotice);
                    await ƒS.Speech.tell(characters.nobu, "Wh.. where did you find this?");
                    await ƒS.Speech.tell(characters.protagonist, "I was searching for you yesterday and stumbled upon it.");
                    await ƒS.Speech.tell(characters.nobu, "You shouldn’t go through other people’s things so carelessly…");
                    await ƒS.Speech.tell(characters.protagonist, " I know, I’m sorry… But… You asked me to investigate, so I have to ask. Who is Hina?");
                    await ƒS.Speech.tell(characters.nobu, "I guess you had to find out sooner or later.");
                    await ƒS.Speech.tell(characters.nobu, "She’s my daughter. Her mother and I used to travel the Forest together with her until my wife fell sick with the mummy disease about ten years ago. We settled down here in Sakura Glade.");
                    await ƒS.Speech.tell(characters.nobu, "Now it’s just me and Hina… She hadn’t been feeling well for a few weeks, so I took her to the doctor.");
                    await ƒS.Speech.tell(characters.nobu, "I…");
                    await ƒS.Speech.tell(characters.nobu, "I just can’t believe it will take her away from me too…");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(If the Moon Bead could really fulfill wishes, this would be a good one…)</i>");
                    await ƒS.Speech.tell(characters.protagonist, "… I am so sorry, Nobu. Nobody deserves to lose their loved ones like this…");
                    await ƒS.Speech.tell(characters.nobu, "Thank you, Grasshopper.");
                    await ƒS.Speech.tell(characters.nobu, "But you needn’t bother yourself with such sorrow... It’s for me to hold.");
                    await ƒS.Speech.tell(characters.protagonist, "So… you received the letter the day before the incident, is that correct?");
                    await ƒS.Speech.tell(characters.nobu, "Yes. Just after I dropped you off at the inn, I went home and saw the letter arrived.");
                    await ƒS.Speech.tell(characters.protagonist, "And then you went to bed?");
                    await ƒS.Speech.tell(characters.nobu, "Well, I tried. Frankly, I was restless. Couldn’t keep my eyes closed.");
                    await ƒS.Speech.tell(characters.nobu, "When I couldn’t take it anymore I went for a walk. To calm down in the fresh night air. I passed the Sacred Tree and so used the opportunity to speak a prayer.");
                    await ƒS.Speech.tell(characters.nobu, "You know, a lot of the younger folks don’t believe in it anymore, but I find much consolation in the conversations with our guardian god.");
                    await ƒS.Speech.tell(characters.nobu, "I asked him to spare my daughter… I hope he hears my prayer.");
                    await ƒS.Speech.tell(characters.protagonist, "I’m sure of it…");
                    await ƒS.Speech.tell(characters.protagonist, "So, after that, you went home? Do you know what time it was? Did you notice anything suspicious at the Tree?");
                    await ƒS.Speech.tell(characters.nobu, "Yes, I went home directly after I finished my prayer.");
                    await ƒS.Speech.tell(characters.nobu, "It must’ve been about… half past one when I got there, almost two when I got home. Hmm… did I notice something strange?");
                    await ƒS.Speech.tell(characters.nobu, "Well, no, not regarding the Moon Bead, if that’s your inquiry.");
                    await ƒS.Speech.tell(characters.nobu, "But I suppose, now that I think about it, I should have expected to see Amaya on her patrol…");
                    await ƒS.Speech.tell(characters.protagonist, "So the Tree was unguarded at the time? You could have stolen the Moon Bead during that time, hoping to use its ability to fulfill a wish to cure your daughter…");
                    await ƒS.Speech.tell(characters.nobu, "Oh heavens! I suppose it might look that way.");
                    await ƒS.Speech.tell(characters.nobu, "No. To be completely honest with you, Grasshopper, it did cross my mind briefly.");
                    await ƒS.Speech.tell(characters.nobu, "But I am a man of faith. Desecrating our god’s holy artifact? No, " + dataForSave.nameProtagonist + ", I couldn’t. I could never.");
                    await ƒS.Speech.tell(characters.nobu, "Even if it could save Hina, the god’s wrath would strike me even more terribly. So I spoke my prayer and left.");
                    await ƒS.Speech.tell(characters.protagonist, "I see.");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(I think he’s saying the truth. He seems very faithful in the Moon God.)</i>");
                    await ƒS.Speech.tell(characters.protagonist, "Thank you for being honest and telling me, Nobu. This has helped me greatly.");
                    await ƒS.Speech.tell(characters.nobu, "I’m glad to be of help.");
                    await ƒS.Speech.tell(characters.protagonist, "<i>(Now the real question is, why didn’t he see Amaya guarding the tree if she was supposedly there the entire night?)</i>");
                    // update item description
                }
                break;
            case items.replica:
                await ƒS.Speech.tell(characters.nobu, "OH! The Moon Bead! You found-");
                await ƒS.Speech.tell(characters.nobu, "… Oh, it’s just the replica? Apologies.");
                break;
        }
    }
}