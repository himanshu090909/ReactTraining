//Ques1 Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

let array_one = [3,62,234,7,23,74,23,76,92];
let array_new = array_one.filter((e)=>e>70);
console.log('ques1')
console.log(array_new);

//Ques2 go on this link http://localhost:3000/ques2.html

//Ques3 Create a markup template using string literal

const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
   };

   let string_literal = `${song.name} --${song.artist} \n(${song.featuring})`;
   console.log('ques3')
   console.log(string_literal);

//Ques4 Extract all keys inside address object from user object using destructuring ?

const user = 
{
    firstName: 'Sahil',
    lastName: 'Dua',
    Address: {
    Line1: 'address line 1',
    Line2: 'address line 2',
    State: 'Delhi',
    Pin: 110085,
    Country: 'India',
    City: 'New Delhi',
    },
    phoneNo: 9999999999

}

