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

	describe("Update Good Wine item", () => {
		it("actually increases in Quality the older it gets", () => {
			const items = [new Item("Good Wine", 10, 0)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([new Item("Good Wine", 9, 1)]);
		});
		it("The quality of an item is never above 50", () => {
			const items = [new Item("Good Wine", 10, 50)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([new Item("Good Wine", 9, 50)]);
		});
	});
	describe("Update a Backstage passes item", () => {
		it("Quality increases by 2 when there are 10 days or less", () => {
			const items = [new Item("Backstage passes for HAXX", 10, 0)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([
				new Item("Backstage passes for HAXX", 9, 2),
			]);
		});
		it("Quality increases by 3 when there are 5 days or less", () => {
			const items = [new Item("Backstage passes for HAXX", 5, 0)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([
				new Item("Backstage passes for HAXX", 4, 3),
			]);
		});
		it("Quality drops to 0 after the conference", () => {
			const items = [new Item("Backstage passes for HAXX", 0, 20)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([
				new Item("Backstage passes for HAXX", -1, 0),
			]);
		});
	});

	describe("Update a smelly item", () => {
		it("Degrade in Quality twice as fast as normal items", () => {
			const items = [new Item("Duplicate Code", 5, 10)];
			const app = new GildedTros(items);
			app.updateQuality();
			expect(items).toStrictEqual([new Item("Duplicate Code", 4, 8)]);
		});
	});
});
