var possibleSuggestions = [
  {
    matchers: [
      'met {{date}}',
      'Meeting {{date}}'
    ],
    text: 'You met with {{person}}'
  },
  {
    matchers: [
      'met {{date}}',
      'Meeting {{date}}'
    ],
    text: 'You met with {{person}}'
  },
  {
    matchers: [
      'met {{date}}',
      'Meeting {{date}}'
    ],
    text: 'You met with {{person}}'
  },
];

var replacers = [
  {
    matchers: [/\d\d[/-]\d\d/],
    result: '{{date}}'
  }
];

export function ambigify(text) {
  return replacers.reduce(function (text, replacer) {
    return replacer.matchers.reduce(function (text, matcher) {
      console.log(text, matcher)
      return text.replace(matcher, replacer.result);
    }, text)
  }, text);
}

export function match(text) {
  return possibleSuggestions.reduce(function (suggestions, suggestion) {
    if(suggestion.matchers.some(function(matcher){
        return matcher.match(text);
      })){
      suggestions.push(suggestion)
    }
    return suggestions;
  }, []);
}

export default function (text) {
  text = ambigify(text);
  return match(text);


}
