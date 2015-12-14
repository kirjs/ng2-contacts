import Contacts from '../contacts/contacts';
import ContactDetails from '../contact-details/contact-details';


var defaultData = {
  contacts: [
    {name: 'One', lastContact: '2015-10-12'},
    {name: 'Two', lastContact: '2015-10-13'},
    {name: 'Three', lastContact: '2015-10-15'},
    {name: 'Four', lastContact: '2015-10-16'}
  ],
  selectedContactIndex: 0
};

let data = JSON.parse(localStorage.getItem('contacts')) || defaultData;
let config = new Baobab(data);

var AppComponent = ng
  .Component({
    directives: [Contacts, ContactDetails],
    selector: 'my-app',
    templateUrl: 'src/components/app/app.html'
  })
  .Class({
    constructor: function () {
      this.config = config;
      this.config.on('update', function(update) {
        localStorage.setItem('contacts', JSON.stringify(update.data.currentData));
        this.processChange();
      }.bind(this));
      this.processChange();
    },
    processChange: function(){
      this.contacts = config.select('contacts');
      this.selectedContactIndex = config.select('selectedContactIndex')
    },
    selectedContact: function(){
      var index = this.selectedContactIndex.get();
      return this.contacts.select(index);
    }
  });
document.addEventListener('DOMContentLoaded', function () {
  debugger
  ng.bootstrap(AppComponent);
});

