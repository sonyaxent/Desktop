// function calculateGuests1(guestsInput) {
//   let b = "";

//   for (let i = 0; i < guestsInput.length; i++) {
//     let a = Number.parseFloat(guestsInput[i]);
    
//     if (Number.isInteger(a)) {
//       b += guestsInput[i];
//       continue;
//     }

//     if (guestsInput[i] === ".") {
//       break
//     }

//   }
//   const c = parseInt(b);

//   if (guestsInput.includes("0") || b === "") {
//     return 'not a number';
//   } else if (guestsInput.includes('or')) {
//     const d = parseInt(b[0]);
    
//     return d;
//   } else {
    
//     return c;
//   }

// }

function calculateGuests(guestsInput) {
  let digits = '';

  for (const ch of guestsInput) {
    // we start taking digits if current character is a digit
    if ('0123456789'.includes(ch)) {
      digits += ch;
    } else if (digits.length) {
      // we finish if we already have some digits
      // and current character is not a digit any more
      break;
    }
  }

  // if we have some non zero digits we return a number
  return +digits || 'not a number';
}

console.log(calculateGuests("h umbe aq"))


  // let b = "";
  // for (let i = 0; i < guestsInput.length; i++) {
  //   let a = Number.parseFloat(guestsInput[i]);
    
  //   while (Number.isInteger(a)) {
  //    b += guestsInput[i];
  //    break
  //   }


  // }
  // const c = parseInt(b);
  // return Math.floor(c);