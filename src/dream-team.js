/**
 * Imagine you and your friends decide to create a dream team. This team
 * should have a cool secret name that contains encrypted information
 * about it. For example, these may be the first letters of the names of
 * its members in upper case sorted alphabetically. Your task is to implement
 * the createDreamTeam(members) function that returns name of a newly made
 * team (string) based on the names of its members (Array). Good luck!
 *
 * Names of the members should be strings. Values with other type should be
 * ignored. In case of wrong members type function must return false.
 *
 * NB! Team member name may contain whitespaces.
 *
 * For example:
 *    createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 *    createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 */

const validate = (members) => Array.isArray(members) && members.length > 0;
const finalize = (teamNameLetters) =>
  teamNameLetters.toUpperCase().split('').sort().join('');

const generateName = (members) =>
  members.reduce(
    (teamName, member) =>
      typeof member === 'string' && member.trim().length > 0
        ? member.trim()[0] + teamName
        : teamName,
    ''
  );

const createDreamTeam = (members) =>
  validate(members) && finalize(generateName(members));

module.exports = createDreamTeam;
