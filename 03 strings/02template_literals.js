 const name = 'Hopson Gausi'
 const package = 'shoes'

 //  using normal string concatination
 let message = 'Hello Mr ' + name + '! We have ' + package + ' that needs collection'
 console.log(message);

 // using template literals `` and ${}
 message = `Hello Mr ${name}! We have ${package} that needs collection`
 console.log(message);

 // inside template literals operations
 message = `Hello Mr ${name.toUpperCase()}! We have ${package.length} ${package} that needs collection`
 console.log(message);