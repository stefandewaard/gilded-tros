import { Item } from "./item";

export class GildedTros {
	constructor(public items: Array<Item>) {}

	public updateQuality(): void {
		for (let item of this.items) {
			switch (item.name) {
				case "Good Wine":
					item = this.updateGoodWine(item);
					break;
				case "Backstage passes for Re:Factor":
				case "Backstage passes for HAXX":
					item = this.updateBackstagePasses(item);
					break;
					break;
				case "B-DAWG Keychain":
					break;
				default:
					item = this.updateOne(item);
					break;
			}
		}
	}

	private updateOne(item: Item): Item {
		const { sellIn, quality } = item;
		item.sellIn = sellIn - 1;
		item.quality =
			quality > 0 ? (sellIn < 0 ? quality - 2 : quality - 1) : quality;
		return item;
	}

	private updateGoodWine(item: Item): Item {
		return item;
	}

	private updateBackstagePasses(item: Item): Item {
		return item;
	}
}
