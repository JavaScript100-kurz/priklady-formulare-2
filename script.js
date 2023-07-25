/*
Zadání:

Vytvořte klasický přihlašovací formulář, do kterého uživatel zadá svůj e-mail a heslo a stránka ověří, zda má uživatel přístup do systému.

V JS kódu máte připravený objekt uživatele, který má vlastnosti email. password, name. K vlastnostem můžete přistupovat přes tečku jako k normálním proměnným, jako user.email, user.password, user.name.

V index.html vytvořte s formulář, který bude mít jedno textové pole pro e-mail (typ email), jedno pole pro heslo (typ password) a tlačíto „Přihlásit“. Můžete použít připravené CSS styly nebo si formulář nastylovat sami.

Při kliknutí na tlačítko „Přihlásit“ ověřte, že uživatel zadal správný email a heslo. Pokud údaje souhlasí, nahraďte formulář na stránce nějakou zprávou, například „Přihlášený uživatel: Eliška“.

Pokud uživatel zadal špatný e-mail nebo heslo, zobrazte nad formulářem výraznou zprávu „Neplatné přihlašovací údaje“. Zadaný e-mail nechte v políčku vyplněný. Vyplněné heslo naopak vymažte, aby ho uživatel musel zadat znovu.

Všimněte si, že se snažíme dodržovat standardní praxi. Uživatel by neměl vědět, jestli zadal špatně heslo nebo e-mail. Nikdo by totiž neměl bý schopný zjistit, jestli v systému daný uživatel už existuje. Zároveň je dobré špatné heslo z políčka vymazat, aby jej mohl uživatel rovnou zkusit napsat znovu.
*/

const user = {
  email: 'eliska.novotna@gmail.com',
  password: 'mojesuperheslo123',
  name: 'Eliška',
};

