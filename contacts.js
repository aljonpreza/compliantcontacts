/**
 * This JavaScript file creates two objects: Contact and ContactList.
 * Contact allows the user to create contacts of a person, storing their information.
 * ContactList allows to input many contacts into an array.
 */

/**
 * This object will create a contact with the follow parameters:
 * @param firstName
 * @param lastName
 * @param address
 * @param zipcode
 * @param telnum
 * @constructor
 */
var Contact = function(firstName, lastName, address, zipcode, telnum) {
  /* First name of the contact */
  this.firstName = firstName;
  /* Last name of the contact */
  this.lastName = lastName;
  /* Address of the contact */
  this.address = address;
  /* Zip code of the contact */
  this.zipcode = zipcode;
  /* Telephone number of the contact */
  this.telnum = telnum;
  /* Number of calls from a contact */
  var callnum = 0;

  /**
   * Increments the number of calls made by 1.
   * @returns {boolean}
   */
  this.call = function() {
    callnum++;
    return true;
  };

  /**
   * Returns the number of calls of a contact.
   * @returns {number}
   */
  this.numCalls = function() {
    return callnum;
  };
};


/**
 * This is a constructor that contains a list of object contacts.
 * @constructor
 */
var ContactList = function() {
  var contactlist = [];

  /**
   * This adds a contact to the contact list.
   * @param contact
   * @returns {boolean}
   */
  this.addContact = function(contact) {
    contactlist.push(contact);
    return true;
  };

  /**
   * Returns the number of contacts in a contact list.
   * @returns {Number}
   */
  this.numContacts = function() {
    return contactlist.length;
  };

  /**
   * Uses bootstrap to find all contacts with a given last name.
   * @param last last name of the contact
   * @returns {Array} of all contacts with a given last name.
   */
  this.findContact = function(last) {
    return _.where(contactlist, {lastName: last});
  }

  /**
   * Deletes the contact from the contact list.
   * @param first first name of the contact
   * @param last last name of the contact
   */
  this.deleteContact = function(first, last) {
    for (var i = 0; i < contactlist.length; i++) {
      if ( (contactlist[i].firstName === first) && (contactlist[i].lastName === last) ) {
        contactlist.splice(i, 1);
      }
    }
  };

  /**
   * This is a helper function to compare last names.
   * @param a the first object to compare
   * @param b the second object to compare
   * @returns {number}
   */
  this.comparelast = function(a, b) {
    if (a.lastName > b.lastName) {
      return 1;
    }
    else if (a.lastName < b.lastName) {
      return -1;
    }
    else {
      return 0;
    }
  };

  /**
   * Returns the contact list sorted by last name.
   * @returns {Array}
   */
  this.listContacts = function() {
    contactlist.sort(this.comparelast);
    return contactlist;
  }
};