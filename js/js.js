function pokemon(nombre,numero,tipo,tipo2,debilidad,vida,ataque,defensa,info) {
	this.pokemonN = nombre;
	this.pokemonNu = numero;
	this.pokemonT = tipo;
	this.pokemonT2= tipo2;
	this.pokemonDe = debilidad;
	this.pokemonV = vida;
	this.pokemonA = ataque;
	this.pokemonD = defensa;
	this.pokemonI = info;
	


}
var Bulbasaur = new pokemon("Bulbasaur",1,"Planta","Veneno","Fuego Volador Hielo Psíquico",20,30,20,"Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.");
var Ivysaur = new pokemon("Ivysaur",2,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,30,30,"Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.");
var Venusaur = new pokemon("Venusaur",3,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,40,40,"Llena su cuerpo de energía con los rayos solares que captan los anchos pétalos de su flor.");
var Charmander = new pokemon("Charmander",4,"Fuego"," ","Tierra Roca Agua",20,30,20,"La llama de su cola indica la fuerza vital de Charmander. Será brillante si está sano.");
var Charmeleon  = new pokemon("Charmeleon ",5,"Fuego"," ","Tierra Roca Agua",30,30,30,"Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.");
var Charizard = new pokemon("Charizard",6,"Fuego","Volador","Tierra Roca Agua",30,40,30,"Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.");
var Squirtle = new pokemon("Squirtle",7,"Agua"," ","Electrico Planta",20,30,30,"Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.");
var Wartortle = new pokemon("Wartortle",8,"Agua"," ","Electrico Planta",30,30,40,"Si es golpeado, esconderá su cabeza. Aun así, su cola puede seguir golpeando.");
var Blastoise = new pokemon("Blastoise",9,"Agua"," ","Tierra Roca Agua",30,40,40,"Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.");
var Caterpie = new pokemon("Caterpie",10,"Bicho"," ","Fuego Volador Roca",20,20,20,"Para protegerse despide un hedor horrible de sus antenas, con el que repele a sus enemigos.");
var Metapod = new pokemon("Metapod",11,"Bicho"," ","Fuego Volador Roca",20,10,30,"Su frágil cuerpo está recubierto de una coraza dura como el acero. Permanece quieto en su desarrollo.");
var Butterfree = new pokemon("Butterfree",12,"Bicho","Volador","Roca Electrico Fuego Volador Hielo",30,20,20,"Adora el néctar de las flores. Puede localizar hasta las más pequeñas cantidades de polen.");
var Weedle = new pokemon("Weedle",13,"Bicho","Veneno","Fuego Volador Psíquico Roca",20,20,20,"Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.");
var Kakuna = new pokemon("Kakuna",14,"Bicho","Veneno","Fuego Volador Psíquico Roca",20,10,20,"Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.");
var Beedrill  = new pokemon("Beedrill",15,"Bicho","Veneno","Fuego Volador Psíquico Roca",30,60,20,"Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.");
var Pidgey = new pokemon("Pidgey",16,"Normal","Volador","Electrico Hielo Roca",20,20,20,"Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.");
var Pidgeotto = new pokemon("Pidgeotto",17,"Normal","Volador","Electrico Hielo Roca",30,30,30,"Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.");
var Pidgeot = new pokemon("Pidgeot",18,"Normal","Volador","Electrico Hielo Roca",30,40,30,"Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.");
var Rattata = new pokemon("Rattata",19,"Normal"," ","Lucha",20,40,40,"Tiene unos largos y afilados colmillos que no dejan de crecer. Le resultan muy útiles para destruir cosas.");
var Raticate = new pokemon("Raticate",20,"Normal","Volador","Electrico Hielo Roca",40,60,40,"Lima sus colmillos royendo objetos duros. Con ellos puede destruir incluso paredes de hormigón.");
var Spearow = new pokemon("Spearow",21,"Normal","Volador","Lucha",20,30,20,"Muy protector de su territorio, mueve sus cortas alas sin descanso para lanzarse a toda velocidad.");
var Fearow = new pokemon("Fearow",22,"Normal","Volador","Electrico Hielo Roca",30,60,30,"Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.");
var Ekans = new pokemon("Ekans",23,"Veneno"," ","Tierra Psíquico",20,30,20,"Cuanto más viejo, más crece este Pokémon. Por la noche, descansa en las ramas de los árboles.");
var Arbok = new pokemon("Arbok",24,"Veneno"," ","Tierra Psíquico",30,40,30,"Para intimidar a sus enemigos, hincha el pecho y echa aire por la boca emitiendo sonidos.");
var Pikachu = new pokemon("Pikachu",25,"Electrico"," ","Tierra",20,30,20,"Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.");
var Raichu = new pokemon("Raichu",26,"Electrico"," ","Tierra",30,60,30,"Cuando se carga de electricidad, sus músculos se tensan y se vuelve más agresivo de lo normal.");
var Sandshrew = new pokemon("Sandshrew",27,"Tierra"," ","Planta Hielo Agua",20,40,40,"Este Pokémon permanece bajo tierra. Si se siente amenazado, se enrosca para defenderse.");
var Sandslash = new pokemon("Sandslash",28,"Tierra"," ","Planta Hielo Agua",30,60,60,"Ante el peligro, se acurruca en un espinoso ovillo. De esta forma puede rodar para atacar o escapar.");
var Nidoran = new pokemon("Nidoran♀",29,"Veneno"," ","Tierra Psíquico",20,30,20,"Aunque pequeñas, sus venenosas púas son muy peligrosas. Tienen un cuerno más pequeño que los machos.");
var Nidorina = new pokemon("Nidorina",30,"Veneno"," ","Tierra Psíquico",30,30,30,"Tiene un carácter afable. Emite ondas ultrasónicas para confundir al enemigo.");
var Nidoqueen = new pokemon("Nidoqueen",31,"Veneno","Tierra","Tierra Hielo Psíquico Agua",40,60,40,"Usa su cuerpo duro y escamoso para sellar la entrada a su madriguera y protegerse de los depredadores.");
var NidoranM = new pokemon("Nidoran♂",32,"Veneno"," ","Tierra Psíquico",20,30,20,"Saca las orejas por encima de la hierba para explorar el territorio. Le protege su cuerno venenoso.");
var Nidorino = new pokemon("Nidorino",33,"Veneno"," ","Tierra Psíquico",30,40,30,"Levanta sus grandes orejas para vigilar. Si detecta algo, atacará de inmediato.");
var Nidoking = new pokemon("Nidoking",34,"Veneno","Tierra","Tierra Hielo Psíquico Agua",30,60,30,"Es fácil reconocerlo por tener una dura piel y un gran cuerno lleno de peligrosísimo veneno.");
var Clefairy = new pokemon("Clefairy",35,"Hada"," ","Acero Veneno",60,40,40,"Se dice que la felicidad llegará a quien vea a un grupo de Clefairy bailando a la luz de la luna llena.");
var Clefable = new pokemon("Clefable",36,"Hada"," ","Acero Veneno",80,60,60,"Su oído es tan agudo que puede oír una aguja caer a 1 km. Vive en montañas solitarias.");
var Vulpix = new pokemon("Vulpix",37,"Fuego"," ","Tierra Roca Agua",20,40,40,"Cuando nace solo tiene una cola, pero a medida que crece, esta se va dividiendo desde la punta.");
var Ninetales = new pokemon("Ninetales",38,"Fuego"," ","Tierra Roca Agua",60,60,60,"Tiene nueve colas y un pelaje de color dorado. Dicen que este Pokémon llega a vivir 1000 años.");
var Jigglypuff = new pokemon("Jigglypuff",39,"Normal","Hada","Acero Veneno",60,20,10,"Cautiva con la mirada a su enemigo y hace que se quede profundamente dormido mientras entona una dulce melodía.");
var Wigglytuff = new pokemon("Wigglytuff",40,"Normal","Hada","Acero Veneno",60,40,20,"Su piel es tan suave que si dos de ellos se acurrucan juntos, no querrán separarse nunca.");
var Zubat = new pokemon("Zubat",41,"Veneno","Volador","Electrico Hielo Psíquico Roca",20,20,20,"Aunque carezca de ojos, puede detectar obstáculos con las ondas ultrasónicas que emite su boca.");
var Golbat = new pokemon("Golbat",42,"Veneno","Volador","Electrico Hielo Psíquico Roca",30,40,30,"Cuando ataque, seguirá chupando energía de su víctima, aunque pese tanto que ya no pueda volar.");
var Oddish = new pokemon("Oddish",43,"Planta","Veneno","Fuego Volador Hielo Psíquico",20,30,30,"Durante el día, se agazapa en el frío subsuelo huyendo del sol. La luz de la luna le hace crecer mucho.");
var Gloom = new pokemon("Gloom",44,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,30,30,"¡Huele bastante mal! De todas formas, una de cada mil personas aprecian su fétido olor.");
var Vileplume = new pokemon("Vileplume",45,"Planta","Veneno","Fuego Volador Hielo Psíquico",30,40,40,"CCuanto mayores son sus pétalos, más tóxico es su polen. Le pesa la cabeza y le cuesta mantenerla erguida.");
var Paras = new pokemon("Paras",46,"Bicho","Planta","Fuego Volador Bicho Hielo Veneno Roca",20,60,40,"Lleva en el lomo dos setas parásitas llamadas tochukaso, que crecen con él.");
var Parasect = new pokemon("Parasect",47,"Bicho","Planta","Fuego Volador Bicho Hielo Veneno Roca",40,80,60,"Parasect está dominado por una seta parásita mayor que él. Dispersa esporas venenosas.");
var Venonat = new pokemon("Venonat",48,"Bicho","Veneno","Fuego Volador Psíquico Roca",30,30,30,"Sus grandes ojos son en realidad grupos de ojos diminutos. Por la noche se siente atraído por la luz.");
var Venomoth = new pokemon("Venomoth",49,"Bicho","Veneno","Fuego Volador Psíquico Roca",60,60,40,"Lanza unas escamas que paralizan a cualquiera. Quien las toque, no podrá ni ponerse de pie.");
var Diglett = new pokemon("Diglett",50,"Tierra"," ","Planta Hielo Agua",10,30,10,"Vive un metro por debajo del suelo, donde se alimenta de raíces. También aparece en la superficie.");
var Dugtrio = new pokemon("Dugtrio",51,"Tierra"," ","Planta Hielo Agua",20,40,20,"En combate, cava la tierra, se esconde y sale de repente para golpear a su rival. Nunca se sabe por dónde puede aparecer.");
var Meowth = new pokemon("Meowth",52,"Normal"," ","Lucha",20,40,40,"Es de naturaleza nocturna. Le atraen los objetos brillantes.");
var Persian = new pokemon("Persian",53,"Normal"," ","Lucha",40,60,30,"Aunque es muy admirado por el pelo, es difícil de entrenar como mascota, porque es un poco travieso.");
var Psyduck = new pokemon("Psyduck",54,"Agua"," ","Electrico Planta",20,30,20,"Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes.");
var Golduck = new pokemon("Golduck",55,"Agua"," ","Electrico Planta",30,40,30,"Aparece en ríos al anochecer. Puede usar poderes telequinéticos si su frente brilla misteriosamente.");

function pokedex(nombre){
	if(nombre.pokemonNu<10){
	var pG = '<audio autoplay> <source src="audio/00'+nombre.pokemonNu+'.mp3" type="audio/mpeg"><source src="audio/00'+nombre.pokemonNu+'.ogg" type="audio/ogg"> </audio>';
	document.getElementById('imagen').innerHTML = '<img src="img/00'+nombre.pokemonNu+'.png">'
	document.getElementById('nombre').innerHTML = nombre.pokemonN+" <span>#00"+nombre.pokemonNu+"</span>";

	}
	else if(nombre.pokemonNu<100){
	var pG = '<audio autoplay> <source src="audio/0'+nombre.pokemonNu+'.mp3" type="audio/mpeg"><source src="audio/0'+nombre.pokemonNu+'.ogg" type="audio/ogg"> </audio>';
	document.getElementById('imagen').innerHTML = '<img src="img/0'+nombre.pokemonNu+'.png">'
	document.getElementById('nombre').innerHTML = nombre.pokemonN+" <span>#0"+nombre.pokemonNu+"</span>";

	}else{
	var pG = '<audio autoplay> <source src="audio/'+nombre.pokemonNu+'.mp3" type="audio/mpeg"><source src="audio/'+nombre.pokemonNu+'.ogg" type="audio/ogg"> </audio>';
	document.getElementById('imagen').innerHTML = '<img src="img/'+nombre.pokemonNu+'.png">'
	document.getElementById('nombre').innerHTML = nombre.pokemonN+" <span>#"+nombre.pokemonNu+"</span>";

	}
	document.getElementById('grito').innerHTML =pG;
	document.getElementById('tipo').innerHTML = '<h2>Tipo</h2><span class="'+nombre.pokemonT+'">'+nombre.pokemonT+'</span><span class="'+nombre.pokemonT2+'">'+nombre.pokemonT2+'</span>';
	document.getElementById('debilidad').innerHTML='<h2>Debilidad</h2><span class="debil">'+nombre.pokemonDe+'</span>'
	document.getElementById('vad').innerHTML='<h2>Puntos</h2><span class="v">Vida '+nombre.pokemonV+'</span><span class="a">Ataque '+nombre.pokemonA+'</span><span class="d">Defensa '+nombre.pokemonD+'</span>';
	document.getElementById('pinf').innerHTML='<h2>Informacion</h2><p class="i">'+nombre.pokemonI+'</p>';
	document.getElementById('pokemon').style.display = "block";
	
}