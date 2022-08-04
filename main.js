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

jmena.unshift('Slizoun')
jmena.unshift('Kýchal')

console.log(jmena)

// - odebrat ze zacatku
// - vrátit kousek pole od-do
// Práce s polem v cyklu


