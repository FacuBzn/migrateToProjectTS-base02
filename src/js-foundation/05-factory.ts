
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');
interface buildmakerPersonOptions {
  getUUID: () => string,
  getAge: (birthdate: string) => number,
}

interface PersonOptions {
  name: string,
  birthdate: string,
}

export const buildMakePerson = ({ getUUID, getAge }: buildmakerPersonOptions ) => {

  return ({ name, birthdate }: PersonOptions ) => {

    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    }
  }

}


