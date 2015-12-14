import generateSuggestions from '../../services/suggestions/suggestions';
export default ng.Component({
  selector: 'kirjs-autocomplete',
  templateUrl: 'src/components/autocomplete/autocomplete.html',
  directives: [ng.NgFor],
  styleUrls: ['src/components/autocomplete/autocomplete.css']
}).Class({
  constructor: function () {
    this.selectedSuggestion = 0;
  },

  updateSuggestions( $event ){
    this.suggestions = generateSuggestions($event.target.value);

    if($event.keyCode === 40){
      this.selectedSuggestion++;
    }

    if($event.keyCode === 38){
      this.selectedSuggestion = (this.suggestions.length + this.selectedSuggestion -1) % this.suggestions.length ;
    }

    if(this.selectedSuggestion >= this.suggestions.length){
      this.selectedSuggestion = 0;
    }
  }


});
