namespace SakuraGlade {
    export class Inventory extends ƒS.Inventory {
        public static async open(): Promise<string[]> {
            console.log("Opened with custom class");

            // @ts-ignore
            let dialog: HTMLDialogElement = Inventory.dialog;
            if (dialog.open) {
                dialog.close();
            }
            let present: HTMLButtonElement = document.querySelector('#present');
            ƒS.Sound.play(sound.item, .7);
            dialog.showModal();

            // if good ending final scene
            if (extraItemInteraction) {
                // hide close button / disable inventroy close
                dialog.querySelector("button").classList.add("hidden");

                return new Promise((_resolve) => {
                    let hndClose = (_event: Event) => {
                        present.removeEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                        Inventory.close();
                        dialog.querySelector("button").classList.remove("hidden");
                        //@ts-ignore
                        _resolve([]);
                    };
                    present.addEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                });
            } else if (currentCharacter) {
                // if during day2 investigations
                return new Promise((_resolve) => {
                    let hndPresentClose = async (_event: Event) => {
                        dialog.querySelector("button").removeEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                        present.removeEventListener(ƒS.EVENT.POINTERDOWN, hndPresentClose);
                        let itemId = dialog.querySelector('.selected').getAttribute('id');
                        let targetValue = itemId.replace(/_/g, " ");
                        let item: ƒS.ItemDefinition;
                        for (const key in items) {
                            //@ts-ignore
                            if (items.hasOwnProperty(key) && items[key].name === targetValue) {
                                //@ts-ignore
                                item = items[key];
                            }
                        }
                        Inventory.close();
                        switch (currentCharacter) {
                            case characters.amaya:
                                await AmayaReactToItem(item);
                                break;
                            case characters.kohana:
                                await KohanaReactToItem(item);
                                break;
                            case characters.nobu:
                                await NobuReactToItem(item);
                                break;
                            case characters.fumiko:
                                await FumikoReactToItem(item);
                                break;
                        }
                        //@ts-ignore
                        _resolve(['present']);
                    };
                    let hndClose = (_event: Event) => {
                        dialog.querySelector("button").removeEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                        present.removeEventListener(ƒS.EVENT.POINTERDOWN, hndPresentClose);
                        Inventory.close();
                        //@ts-ignore
                        _resolve(['close']);
                    };
                    dialog.querySelector("button").addEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                    present.addEventListener(ƒS.EVENT.POINTERDOWN, hndPresentClose);
                });
            }
            else {
                return new Promise((_resolve) => {
                    let hndClose = (_event: Event) => {
                        dialog.querySelector("button").removeEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                        Inventory.close();
                        //@ts-ignore
                        _resolve([]);
                    };
                    dialog.querySelector("button").addEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                });
            }

        }
        public static close(): void {
            ƒS.Sound.play(sound.item, .7);
            //@ts-ignore
            Inventory.dialog.close();

            let present: HTMLButtonElement = document.querySelector('#present');
            present.classList.add('hidden');
            let selected: HTMLLIElement = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
        }

        public static remove(_item: ƒS.ItemDefinition): void {
            let id: string = _item.name.replace(/ /g, "_");
            //@ts-ignore
            let item: HTMLLIElement = Inventory.dialog.querySelector('#' + id)
            if (item) {
                //@ts-ignore
                Inventory.dialog.querySelector("ul").removeChild(item);
            }
        }
    }


}