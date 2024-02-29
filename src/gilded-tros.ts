import { Item } from "./item";

export class GildedTros {
	constructor(public items: Array<Item>) {}
	/**
	 * Update all items.
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
				case "Duplicate Code":
				case "Long Methods":
				case "Ugly Variable Names":
					item = this.updateSmellyItems(item);
					break;
				default:
					item = this.updateOne(item);
					break;
			}
		});
	}

	/**
	 * Update a normal item.
	 * @param {Item} item - The item.
	 */
	private updateOne(item: Item): Item {
		const { sellIn, quality } = item;
		item.sellIn--;
		item.quality = quality > 0 ? (sellIn <= 0 ? quality - 2 : quality - 1) : 0;
		return item;
	}

	/**
	 * Update Good Wine item.
	 * @param {Item} item - The item.
	 */
	private updateGoodWine(item: Item): Item {
		const { quality } = item;
		item.sellIn--;
		item.quality = quality < 50 ? quality + 1 : quality;
		return item;
	}

	/**
	 * Update a Backstage passes item.
	 * @param {Item} item - The item.
	 */
	private updateBackstagePasses(item: Item): Item {
		const { sellIn, quality } = item;
		item.sellIn--;
		if (sellIn <= 0) {
			item.quality = 0;
		} else if (sellIn <= 5) {
			item.quality = quality < 80 ? quality + 3 : 80;
		} else if (sellIn <= 10) {
			item.quality = quality < 80 ? quality + 2 : 80;
		} else {
			item.quality = quality < 80 ? quality + 1 : 80;
		}
		return item;
	}
	/**
	 * Update a smelly item.
	 * @param {Item} item - The item.
	 */
	private updateSmellyItems(item: Item): Item {
		const { quality } = item;
		item.sellIn--;
		item.quality = quality > 0 ? quality - 2 : 0;
		return item;
	}
}
