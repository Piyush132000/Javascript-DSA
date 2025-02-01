function parseEmail(emails) {
  let emailSet = new Set();

  for (let email of emails) {
    let [localName, domainName] = email.split("@");
    let [firstLocal, forwardName] = localName.split("+");
    let cleanLocalName = firstLocal.split(".").join("");

    let parsedEmailName = `${cleanLocalName}@${domainName}`;
    console.log(parsedEmailName);
    if (!emailSet.has(parsedEmailName)) {
      emailSet.add(parsedEmailName);
    }
  }

  console.log(emailSet);

  return emailSet.size;
}

console.log(
  parseEmail([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);

function reverse(num) {
  let nums = 0;
  let count = 0;

  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(reverse(1234534));


function sum(a,b,c){
  return ()=>{
    return ()=>{
        return a+b+c;
    }
  }
}

const a=  sum(1,2,3);
const b = sum(1,2,3);
console.log(a()())


class Rectangle {

  width;
  height;
  constructor(width, height){

  }

  setWidth(width){
    this.width = width
  }

  setHeight(height){
    this.height = height;
  }
}

class Square extends Rectangle {

   setWidth(width) {
    this.width = this.height = width;

  }
}
const r = new Rectangle();
const s = new Square();

r.setWidth(5);
r.setHeight(10);
s.setWidth(10);
console.log(s.height, s.width, r.width, r.height);