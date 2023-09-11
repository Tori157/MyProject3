if (undefined == null) console.log('undefined==null')
else console.log('undefined!=null')

if (undefined === null) console.log('undefined===null')
else console.log('undefined!==null')

//* == do not care type but only check value
if ('2' == 2) console.log(`'2'==2`)
else console.log(`'2' !=2`)

//* start to check adta type first. If data types are not the same retuen
//* false, otherwise then check value
if ('2' === 2) console.log(`'2'===2`)
else console.log(`'2'!==2`)

//* recomment to use === for equality and !== for inequality
//* avoid to use == and !=
