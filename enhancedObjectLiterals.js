// inside of arrays of objects:
// - If we have a value:key with the exact same name, the structure behind continues the same, but only one value is written.
// EX:
function createBookShop(inventory){
  return {
    // before
    inventory: inventory,
    inventoryValue: function(){ 
      return hi;
    },
  // after
    inventory,
    inventoryValue: function(){ 
      return hi;
    }
  }
}