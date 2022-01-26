//import camelcase from 'camelcase';
//console.log(camelcase('hello world'));

//const UPPERCASE = /[\p{Lu}]/u;
//const LOWERCASE = /[\p{Ll}]/u;
//const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;

const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;
const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);

// THIS LINE APPEARS TO BE THE ISSUE
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');

//const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');