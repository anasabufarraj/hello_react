export default function Playground() {
  let person = { name: 'Sarah', country: 'Nigeria', job: 'Developer' };
  let { name, country, job } = person;

  console.log(name); //"Sarah"
  console.log(country); //"Nigeria"
  console.log(job); //Developer"

  return null;
}
