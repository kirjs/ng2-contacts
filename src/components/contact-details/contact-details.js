import Autocomplete from '../autocomplete/autocomplete';

export default ng.Component({
  selector: 'kirjs-contact-details',
  properties: ['contact'],
  directives: [Autocomplete],
  templateUrl: 'src/components/contact-details/contact-details.html',
  styleUrls: ['src/components/contact-details/contact-details.css']
}).Class({
  updateContactName: function($event){
    this.contact.set('name', $event.target.value);
  },
  constructor: function(){

  }
});

