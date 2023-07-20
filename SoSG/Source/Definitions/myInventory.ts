namespace SakuraGlade {
    export class Inventory extends ƒS.Inventory {
        public static async open(): Promise<string[]> {
            //@ts-ignore
            let dialog: HTMLDialogElement = ƒS.Inventory.dialog;
            dialog.showModal();
            //@ts-ignore
            ƒS.Inventory.ƒused = [];
      
            return new Promise((_resolve) => {
              let hndClose = (_event: Event) => {
                dialog.querySelector("button").removeEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
                //@ts-ignore
                dialog.close();
                //@ts-ignore
                _resolve(ƒS.Inventory.ƒused);
              };
              dialog.querySelector("button").addEventListener(ƒS.EVENT.POINTERDOWN, hndClose);
            });
          }
    }
}