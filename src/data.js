import polotees from "./images/gqjignesh.png";
import denimjean from "./images/denimjean.png";
import poster from "./images/orders.png";
import jeans from "./images/jeans.jpg";
import shirt from "./images/shirt.jpg";
import trouser from "./images/trousers.jpg";
import jogger from "./images/joggers.jpg";
import shorts from "./images/shorts.jpg";
import shadow from "./images/shadow.png";
import tees from "./images/tees.jpg";

export const mobileNavDataList = [
  {
    id: "1",
    icon: shadow,
    selected: true
  },
  {
    id: "2",
    icon: jeans,
    selected: true
  },
  {
    id: "3",
    icon: shirt,
    selected: true
  },
  {
    id: "4",
    icon: tees,
    selected: true
  },
  {
    id: "5",
    icon: jogger,
    selected: true
  },
  {
    id: "6",
    icon: shorts,
    selected: false
  },
  {
    id: "7",
    icon: trouser,
    selected: false
  }
];

export const collection = [
  {
    id: 1,
    imgurl: denimjean,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 2,
    imgurl: polotees,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 3,
    imgurl: denimjean,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 4,
    imgurl: polotees,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  },
  {
    id: 5,
    imgurl: denimjean,
    name: "Printed Polo T-Shirt",
    price: "1,499.00"
  }
];
export const navlist = [
  {
    itemid: "1",
    itemname: "For Me"
  },
  {
    itemid: "2",
    itemname: "Jeans"
  },
  {
    itemid: "3",
    itemname: "Shirt"
  },
  {
    itemid: "4",
    itemname: "Trousers"
  },
  {
    itemid: "5",
    itemname: "Joggers"
  },
  {
    itemid: "6",
    itemname: "Shorts"
  }
];
export const overlaymenuItem = [
  { id: "1", name: "MY PROFILE", route: "profile" },
  { id: "4", name: "MY WISHLIST", route: "wishlist" },
  { id: "3", name: "MY ORDERS", route: "orders" },
  { id: "2", name: "MY ADDRESSES", route: "address" }
];

export const secondaryManyItem = [
  { id: 11, name: "THE BRAND" },
  { id: 12, name: "THE MADEUP STORY" },
  { id: 13, name: "FRANCHISE AND SUPPLIEDS" },
  { id: 14, name: "STORE LOCATOR" }
];
export const tabitems = [
  { id: 1, name: "My Profile", subTitle: "notifications,password" },
  { id: 2, name: "My Orders", subTitle: "Already have 12 orders" },
  { id: 3, name: "Shipping", subTitle: "3 address" }
];
export const myOrderDetails = [
  {
    id: 1,
    poster: poster,
    orderid: 1234566668,
    orderprice: 1899,
    content: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    date: "Sat, Aug 30",
    onProcess: true
  },
  {
    id: 2,
    poster: poster,
    orderid: 1234566668,
    orderprice: 1899,
    content: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    date: "Sun, Aug 31",
    onProcess: true
  },
  {
    id: 3,
    poster: poster,
    orderid: 1234566668,
    orderprice: 1899,
    content: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    date: "Sat, Aug 15",
    onProcess: false
  },
  {
    id: 4,
    poster: poster,
    orderid: 1234566668,
    orderprice: 1899,
    content: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
    date: "Sat, Aug 16",
    onProcess: false
  }
];
