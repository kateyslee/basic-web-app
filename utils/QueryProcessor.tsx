export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "yoonseol"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "ink98202"
    );
  }
  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numberArray = numbers.map(Number);
      
      const largestNumber = Math.max(...numberArray);
      // Return the largest number as a string
      return largestNumber.toString();
    }
    // const numbers = query.match(/\d+/g).map(Number);
    // // Find the largest number
    // const largestNumber = Math.max(numberArray);
    // // Return the largest number as a string
    // return largestNumber.toString();
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numberArray = numbers.map(Number);
      
      const sum = numberArray.reduce((acc, current) => acc + current, 0);
      // Return the largest number as a string
      return sum.toString();
    }
  }
  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numberArray = numbers.map(Number);
      
      const sum = numberArray.reduce((acc, current) => acc * current, 1);
      // Return the largest number as a string
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numberArray = numbers.map(Number);
      
      return (numberArray[0] - numberArray[1]).toString();
      // Return the largest number as a string
      // return sum.toString();
    }
  }

  if (query.toLowerCase().includes("power")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numberArray = numbers.map(Number);
      
      return (Math.pow(numberArray[0],numberArray[1])).toString();
      // Return the largest number as a string
      // return sum.toString();
    }
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const numberArray = numbers.map(Number);
      
      const squareAndCubeNumbers = numberArray.filter(number => {
        const sixthRoot = Math.pow(number, 1/6);
        return sixthRoot % 1 === 0; // Check if the sixth root is an integer
      });

      return squareAndCubeNumbers.toString();
    }
  }


  return "";
}
