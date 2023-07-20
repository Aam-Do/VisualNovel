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
                        _resolve(ƒS.Inventory.ƒused);
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
                        console.log(item);
                        Inventory.close();
                        dialog.querySelector("button").classList.remove("hidden");
                        console.log(itemId);
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
                        _resolve(ƒS.Inventory.ƒused);
                    };
                    let hndClose = (_event: Event) => {
                        dialog.querySelector("button").removeEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                        present.removeEventListener(ƒS.EVENT.POINTERDOWN, hndPresentClose);
                        Inventory.close();
                        //@ts-ignore
                        _resolve(ƒS.Inventory.ƒused);
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
                        _resolve(Inventory.ƒused);
                    };
                    dialog.querySelector("button").addEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                });
            }

        }
        public static close(): void {
            //@ts-ignore
            Inventory.dialog.close();

            let present: HTMLButtonElement = document.querySelector('#present');
            present.classList.add('hidden');
            let selected: HTMLLIElement = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
        }
    }


}