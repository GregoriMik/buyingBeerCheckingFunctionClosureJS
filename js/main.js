// alert('Połączenie działa prawidłowo');
//Closure funkcja sprawdza czy urzytkownik o podanym imieniu i danym wieku może, lub nie może kupić piwa
const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa'}`)
    }
    return showName
}
const grzegorz = user("Grzegorz", 20);
const jagienka = user("Jagienka", 14);
grzegorz()
jagienka()