import Contact from '../contact/contact';



export default ng.Component({
  directives: [Contact, ng.NgFor, ng.NgClass],
  selector: 'kirjs-contacts',
  properties: ['contacts', 'selectedContactIndex'],
  templateUrl: 'src/components/contacts/contacts.html',
  styleUrls: ['src/components/contacts/contacts.css']
}).Class({
    constructor: function () {
    },
    selectedContact: function(){
      var index = this.selectedContactIndex.get();
      return this.contacts.select(index);
    },
    selectContact: function( contact ){
      var index = contact.path[contact.path.length - 1];
      this.selectedContactIndex.set(index);

    }
  }
);
