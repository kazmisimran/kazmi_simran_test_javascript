// Le boolean
let maBoolean = true;
console.log(maBoolean);

// L'array
let monArray = [1, 2, 3, 4, 5];
console.log(monArray);

// L'objet 
let monObjet = { nom: 'objet' };
console.log(monObjet);

// Le string
let monString = 'Un string';
console.log(monString);

// L'integer
let monInt = parseInt(prompt('Entrez un chiffre : '));
console.log(monInt);

// L'objet et sa méthode
class Objet {
    constructor(nom) {
        this.nom = nom;
    }
    call(personne) {
        console.log(this.nom + ' appelle ' + personne);

    }
}

let obj = new Objet('Alexa');
obj.call('Dalanda');

//La fonction flechée à deux paramètres
let add = (a, b) => a + b;
console.log(add(4, 5));


// Condition 
if (monInt < 8) {
    console.log('monInt est plus petit que 8');

} else {
    console.log("monInt n'est pas plus petit que 8");
}

// La boucle
let maVariable = 0;
for (let i = 0; i < 9; i++) {
    maVariable++;
    console.log(maVariable);
}

// L'objet Date
const date = new Date(2020, 0, 13);
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

console.log(date.toLocaleDateString(options));

//string to StrinG
let chaine = 'string';
console.log(chaine.charAt(0).toUpperCase() + chaine.slice(1, 5) + chaine.charAt(5).toUpperCase());

//La longueur
let valeur = prompt('Entrez des chiffres ou des lettres');
function displayLength(x) {
    console.log(x.length);
}
displayLength(valeur);

// Le chiffre aléatoire p1
function displayRandom() {
    let p1 = Math.random() * 100;
    alert(p1);

}
displayRandom();

// Le chiffre aléatoire p2 
function displayConsole(c, d) {
    if (c > d) {
        let p2 = Math.random() * (c - d + 1) + d;
        alert(p2);
    } else {
        let p2 = Math.random() * (d - c + 1) + c;
        alert(p2);
    }

}

//  Le type 
function displayTypeOf(variable) {
    console.log(typeof variable);

}

// Les objets 1/1
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    modeling(nom, age) {
        this.nom = nom;
        this.age = age;
        alert('Bonjour ' + this.nom + ' tu as  ' + this.age + 'ans');
    }
}

let objet1 = new Personne();
objet1.modeling('sim', 20);
console.log(objet1);


// Les objets 2/2
class Encore {
    constructor(nom) {
        this.nom = nom;
    }
    addKey(value) {
        Object.assign(objet1, {clef:value});
        console.log(objet1);

    }
}
let machin = new Encore('Machin');
// machin.addKey(2) à mettre dans la console;

// Les objets 3/3
class Formes{
    constructor(size,borderaspect,epaisseur,couleur){
        this.size=size;
        this.borderaspect=borderaspect;
        this.epaisseur=epaisseur;
        this.couleur=couleur;
    }
    assign(){
        this.size = prompt('Size?');
        this.borderaspect = prompt('Borderaspect?');
        if(this.borderaspect!='solid' || this.borderaspect!='dotted'){
            alert('Incorrect entry');
            this.borderaspect=prompt('Boredraspect?');
        }
        this.couleur = prompt('Couleur?');


    }
}
