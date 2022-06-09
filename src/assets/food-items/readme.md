# Food

## Data structure

As far as structure is concerned, the structure of food items lies on the simplier side. 

Name, attribute, and category should be enough to represent
a food item.

```typescript
type Attribute = "CRISP" | "LIGHT" | "ROBUST" | "RICH"
```

```typescript
type Category ="MEAT" | "FRUIT" | "VEGETABLE" | "SEAFOOD"
```

```typescript
type FoodItem = {
    name: string;
    attribute: Attribute; 
    category: Category;
}
```

Where: 

* `name` property is item's name,
* `attribute` property represents the item's attribute.
    and, 
* `category` property represents the item's category.

### `Region` property

Regarding `region` property, right now (5 jun 2022), adding `region` property means doubling the size of the items and will make stats-tallying logic even more complicated to implement.

Unless Kvaris brings new and drastic changes to how food buff works, I believe there's no real reason to add `region` as an identifier.

Having said that, I did add **S-type** augments even though they're redundant. Maybe I'll just add it later. 