import { GildedTros } from "../src/gilded-tros";
import { Item } from "../src/item";

describe("GildedTrosTest", () => {
	describe("Update a normal item", () => {
		it("The quality of an item is never negative", () => {
			const items = [new Item("test", 10, 0)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([new Item("test", 9, 0)]);
		});
		it("Once the sell-by date has passed, Quality degrades twice as fast", () => {
			const items = [new Item("test", 0, 10)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([new Item("test", -1, 8)]);
		});
	});

	describe("Update B-DAWG Keychain", () => {
		const items = [new Item("B-DAWG Keychain", 10, 0)];
		const app = new GildedTros(items);
		app.updateQuality();
		expect(items).toStrictEqual([new Item("B-DAWG Keychain", 10, 0)]);
	});

	describe("Update Good Wine item", () => {});
	describe("Update a Backstage passes item", () => {});

	describe("Update a smelly item", () => {});
});
