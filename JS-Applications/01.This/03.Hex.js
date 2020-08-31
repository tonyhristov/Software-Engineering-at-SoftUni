class Hex {
   constructor(value) {
      this.value = value;
   }

   valueOf() {
      return this.value;
   }

   toString() {
      return `0x${this.value.toString(16).toUpperCase()}`;
   }

   parse(hexString) {
      return parseInt(hexString, 16);
   }

   plus(hexObject) {
      if (hexObject instanceof Hex) {
         return new Hex(this.value + hexObject.valueOf());
      }
   }

   minus(hexObject) {
      if (hexObject instanceof Hex) {
         return new Hex(this.value - hexObject.valueOf());
      }
   }
}
