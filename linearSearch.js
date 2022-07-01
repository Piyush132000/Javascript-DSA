const userDetails = [
  {
    name: "Piyush",
    email: "Piyush132000@gail.com",
  },
  {
    name: "jagdish",
    email: "jagdish@gmail.com",
  },
  { name: "Anshita", email: "anshita@gmail.com" },
];


function search(array, name){
    let i=0;
    let j = array.length-1;
    while(i < j){
        if(array[i].name.toLowerCase() != name.toLowerCase()){
            i++
        } else {
            return array[i];
        }
        if(array[j].name.toLowerCase() != name.toLowerCase()){
            j--
        } else {
            return array[j];
        }
        if(i == j && array[i].name.toLowerCase() == name.toLowerCase()){
            return array[i]
        
        }
    }
}


console.log(search(userDetails, "jagdish"))
