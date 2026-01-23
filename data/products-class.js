import { calcDiscount } from "../src/utils/discount.js";
import { formatCurrency } from "../src/utils/money.js";

export class Product {
  id;
  image;
  name;
  category;
  priceCents;
  discountPriceCents;
  inStock;
  tags;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.category = productDetails.category;
    this.priceCents = productDetails.priceCents;
    this.discountPriceCents = productDetails.discountPriceCents;
    this.inStock = productDetails.inStock;
    this.tags = productDetails.tags;
  }

  getPrice() {
    return `${formatCurrency(this.priceCents)}`;
  }

  getDiscountPrice() {
    if (this.discountPriceCents) {
      return `${formatCurrency(this.discountPriceCents)}`;
    }
    return null;
  }

  getDiscountPercent() {
    if (this.discountPriceCents) {
      return calcDiscount(this.priceCents, this.discountPriceCents);
    }
    return 0;
  }

  hasDiscount() {
    return !!this.discountPriceCents;
  }

  extraInfoHTML() {
    return "";
  }
}

// export class Fruits extends Product {
//   fruit;

//   constructor(productDetails) {
//     super(productDetails);
//     this.fruit = productDetails.fruit;
//   }
// }

// export class Vegetables extends Product {
//   vegetable;

//   constructor(productDetails) {
//     super(productDetails);
//     this.vegetable = productDetails.vegetable;
//   }
// }

// export class Meat extends Product {
//   meat;
//   constructor(productDetails) {
//     super(productDetails);
//     this.meat = productDetails.meat;
//   }
// }

// export class Fish extends Product {
//   fish;

//   constructor(productDetails) {
//     super(productDetails);
//     this.fish = productDetails.fish;
//   }
// }

// export class Bakery extends Product {
//   bakery;

//   constructor(productDetails) {
//     super(productDetails);
//     this.bakery = productDetails.bakery;
//   }
// }

// export class Baking extends Product {
//   baking;

//   constructor(productDetails) {
//     super(productDetails);
//     this.baking = productDetails.baking;
//   }
// }

// export class Beverages extends Product {
//   beverages;

//   constructor(productDetails) {
//     super(productDetails);
//     this.beverages = productDetails.beverages;
//   }
// }

// export class Breakfast extends Product {
//   breakfast;

//   constructor(productDetails) {
//     super(productDetails);
//     this.breakfast = productDetails.breakfast;
//   }
// }

// export class Canned extends Product {
//   canned;

//   constructor(productDetails) {
//     super(productDetails);
//     this.canned = productDetails.canned;
//   }
// }

// export class Condiments extends Product {
//   condiments;

//   constructor(productDetails) {
//     super(productDetails);
//     this.condiments = productDetails.condiments;
//   }
// }

// export class Dairy extends Product {
//   dairy;

//   constructor(productDetails) {
//     super(productDetails);
//     this.dairy = productDetails.dairy;
//   }
// }

// export class Grains extends Product {
//   grains;

//   constructor(productDetails) {
//     super(productDetails);
//     this.grains = productDetails.grains;
//   }
// }

// export class Oils extends Product {
//   oils;

//   constructor(productDetails) {
//     super(productDetails);
//     this.oils = productDetails.oils;
//   }
// }

// export class Preservation extends Product {
//   preservation;

//   constructor(productDetails) {
//     super(productDetails);
//     this.preservation = productDetails.preservation;
//   }
// }

// export class Seasonings extends Product {
//   seasonings;

//   constructor(productDetails) {
//     super(productDetails);
//     this.seasonings = productDetails.seasonings;
//   }
// }

// export class Snacks extends Product {
//   snacks;

//   constructor(productDetails) {
//     super(productDetails);
//     this.snacks = productDetails.snacks;
//   }
// }

// export class Sweets extends Product {
//   sweets;

//   constructor(productDetails) {
//     super(productDetails);
//     this.sweets = productDetails.sweets;
//   }
// }
