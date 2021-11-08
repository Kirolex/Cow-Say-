const name = 'Paco';

const age = 26;

const campus = 'WildCodeSchool de la loupe';
const passions = ['Dormir', 'Somnoler', 'Faire un coma'];


function displayPassions() {

  console.log(`J'aime bien:`);

  for (let i = 0; i < passions.length; i += 1) {

    console.log(`- ${passions[i]}`);

  }

}


module.exports = {

  name: name,

  age: age,

  displayPassions: displayPassions,

  campus: campus,
};