function extractUsername1(email) {
    let username = email.split('@')[0];
    let updatedUsername = username.replace(/\./g, '.');
    return updatedUsername;
  }
  console.log(extractUsername1("milad.bootostart@gmail.com"));  
  console.log(extractUsername1("erfan_yousefi@gmail.com")); 