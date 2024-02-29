import { Item } from "./item";

export class GildedTros {
	constructor(public items: Array<Item>) {}
	/**
	 * Update all items.
	 * @constructor
	 */
	public updateQuality(): void {
		this.items.forEach((item) => {
			switch (item.name) {
				case "Good Wine":
					item = this.updateGoodWine(item);
					break;
				case "Backstage passes for Re:Factor":
				case "Backstage passes for HAXX":
					item = this.updateBackstagePasses(item);
					break;
				case "B-DAWG Keychain":
					item = item;
					break;
				default:
					item = this.updateOne(item);
					break;
			}
		});
	}

	/**
	 * Update a normal item.
	 * @constructor
	 * @param {Item} item - The item.
	 */
	private updateOne(item: Item): Item {
		const { sellIn, quality } = item;
		item.sellIn = sellIn - 1;
		item.quality =
			quality > 0 ? (sellIn < 0 ? quality - 2 : quality - 1) : quality;
		return item;
	}

	/**
	 * Update Good Wine item.
	 * @constructor
	 * @param {Item} item - The item.
	 */
	private updateGoodWine(item: Item): Item {
		const { sellIn, quality } = item;
		item.sellIn = sellIn - 1;
		item.quality = quality < 50 ? quality + 1 : quality;
		return item;
	}

	/**
	 * Update a Backstage passes item.
	 * @constructor
	 * @param {Item} item - The item.
	 */
	private updateBackstagePasses(item: Item): Item {
		const { sellIn, quality } = item;
		item.sellIn = sellIn - 1;
		if (sellIn <= 10) {
			item.quality = quality < 50 ? quality + 2 : 50;
		} else if (sellIn <= 5) {
			item.quality = quality < 50 ? quality + 3 : 50;
		} else if (sellIn <= 0) {
			item.quality = 0;
		} else {
			item.quality = quality < 50 ? quality + 1 : 50;
		}
		return item;
	}
}
