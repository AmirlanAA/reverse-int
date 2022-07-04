module.exports = function reverse(object) {
   //return object.split("").reverse().join("");
   object = String(object);
   let result = "";
   for (let i = 0; i < object.length; i++) {
      result = `${object[i]}${result}`;
   }
   result = parseInt(result);
   return result;
}
///1 variant with charAt and substring