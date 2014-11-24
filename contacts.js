Contacts = new Mongo.Collection('contacts');

if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault("counter", 0);
    Session.setDefault("selectedContact", 0);
    Session.setDefault("editingContact", 0);

    Template.contacts.helpers({
        editing: function () {
            return this._id === Session.get("editingContact");
        },
        deleteContact: function () {
            return this._id === Session.get("deletingContact") ? "delete-confirm" : "";
        },
        selected: function () {
            return this._id === Session.get("selectedContact") ? "selected" : "";
        },
        counter: function () {
            return Session.get("counter");
        },
        contacts: function () {
            return Contacts.find();
        }
    });

    Template.contacts.events({
        'click .contact': function () {
            Session.set("selectedContact", this._id);
        },
        'click .new-contact': function () {
            Contacts.insert({name: "New Contact"})
        },
        'click .delete': function () {
            if (this._id === Session.get("deletingContact")) {
                Contacts.remove({_id: this._id})
            } else {
                Session.set("deletingContact", this._id);
            }
        },
        'change input[name=contact]': function (event, context) {
            Contacts.update(this._id, {$set: {name: event.target.value}});
        },

        'click .edit': function () {
            Session.set("editingContact", this._id);
        },

        'click .done-editing': function () {
            Session.set("editingContact", 0);
        }
    });


}

if (Meteor.isServer) {
    Meteor.startup(function () {


    });
}
