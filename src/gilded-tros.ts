import { Item } from "./item";

export class GildedTros {
	constructor(public items: Array<Item>) {}

	public updateQuality(): void {
		for (let item of this.items) {
			switch (item.name) {
				case "Good Wine":
					break;
				case "Backstage passes for Re:Factor":
				case "Backstage passes for HAXX":
					break;
				case "B-DAWG Keychain":
					break;
				default:
					break;
			}
		}
	}
}
