function makeAddressBook(addressBook, user) {
    let firstLetter = user.name[0];
  
    console.log(firstLetter)
    console.log(addressBook)
    console.log(user)

    if(firstLetter in addressBook) {
      addressBook[firstLetter].push(user);
    } else {
      addressBook[firstLetter] = [];
      addressBook[firstLetter].push(user);
    }
  
    return addressBook;
  }
  
  let users = [
    { name: 'Tim', age: 40 },
    { name: 'Satya', age: 30 },
    { name: 'Sundar', age: 50 },
    { name: 'Pundar', age: 50 }
  ];
  


  let ur =   users.reduce(makeAddressBook, {});

  console.log(ur)