console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getpopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve,reject) => resolve('colddrink'))

    let ticket = await promiseWifeBringingTicket;
    let [popcorn,butter,colddrink] = await Promise.all([getpopcorn,addButter,getColdDrinks]);
      
    console.log(`${popcorn}, ${butter}, ${colddrink}`);

    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
