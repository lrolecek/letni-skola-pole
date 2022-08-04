console.log('JavaScript funguje')

let jmeno = "Alenka"
let vek = 18


// Jak se vytvoříí pole a co to je

let jmena = [
	'Alenka',
	'Jája',
	'Pája',
	'Bolek',
	'Lolek',
	'Bob',
	'Bobek',
	'Pat',
	'Mat',
	'Eliška'
]

console.log(jmena)

// velikost pole, tj. pocet prvku uvnitr

console.log( jmena.length )



// Jak přistupujeme k prvkům pole

console.log(  jmena[6] )

jmena[1] = 'Gargamel'

console.log(jmena)


// Metody pro práci s polem


// - pridat na konec
// pole.push()
jmena.push('Azrael')
jmena.push('Šprýmař')
jmena.push('Bručoun')

console.log(jmena)


// - odebrat z konce
// pole.pop()

let jmenoOdebraneZKonce = jmena.pop()
console.log(jmena)
console.log(jmenoOdebraneZKonce)

// - pridat na zacatek
// pole.unshift()

jmena.unshift('Kýchal')
jmena.unshift('Slizoun')

console.log(jmena)

// - odebrat ze zacatku

jmena.shift()
console.log(jmena)

// pro "specialni" lidi
jmena.unshift('Šmoulinka')
console.log(jmena)

// - vrátit kousek pole od-do
// pole.slice(od, do)
// prvek na indexu "od" v novem poli bude
// prvek na indexu "do" je prvni, ktery v novem poli uz nebude

let novaJmena = jmena.slice(2, 8)
console.log(novaJmena)


// Práce s polem v cyklu

for ( let i = 0 ; i < 4 ; i++ ) {
	console.log('Ahojda jahoda')
}


for ( let i = 0 ; i < jmena.length ; i++ ) {

	console.log( 'šmoula č. ' + (i + 1) + ' se jmenuje ' + jmena[i]  )

}

