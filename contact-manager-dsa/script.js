// 1. The Contact Node (Doubly Linked List Node)
class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.prev = null;
        this.next = null;
    }
}

// 2. The Contact Manager
class ContactManager {
    constructor() {
        this.head = null;
        this.tail = null;
        this.hashTable = {}; // Simple Hash Table for O(1) lookups
    }

    // ADD CONTACT
    addContact(name, phone) {
        const newContact = new Contact(name, phone);
        
        // Add to Hash Table for quick lookup
        this.hashTable[name] = newContact;

        // Add to Doubly Linked List
        if (!this.head) {
            this.head = this.tail = newContact;
        } else {
            this.tail.next = newContact;
            newContact.prev = this.tail;
            this.tail = newContact;
        }
        console.log(`✅ Contact Added: ${name}`);
    }

    // SEARCH (Using Substring Match - Naive Logic)
    searchContacts(query) {
        console.log(`\n🔍 Searching for "${query}":`);
        let current = this.head;
        let results = [];
        
        while (current) {
            // String Matching logic (Beginner friendly)
            if (current.name.toLowerCase().includes(query.toLowerCase())) {
                results.push(current);
            }
            current = current.next;
        }
        
        if (results.length === 0) console.log("No matches found.");
        results.forEach(c => console.log(`- Found: ${c.name} (${c.phone})`));
    }

    // QUICK LOOKUP (Using Hash Table)
    quickLookup(name) {
        console.log(`\n⚡ Hash Table Lookup for "${name}":`);
        const contact = this.hashTable[name];
        if (contact) {
            console.log(`Result: ${contact.phone}`);
        } else {
            console.log("Contact not found in Hash Table.");
        }
    }

    // VIEW FORWARD
    viewForward() {
        console.log("\n➡️ Contacts (Forward Order):");
        let current = this.head;
        while (current) {
            console.log(`${current.name}: ${current.phone}`);
            current = current.next;
        }
    }

    // VIEW BACKWARD (The Doubly Linked List Advantage)
    viewBackward() {
        console.log("\n⬅️ Contacts (Reverse Order):");
        let current = this.tail;
        while (current) {
            console.log(`${current.name}: ${current.phone}`);
            current = current.prev;
        }
    }
}

// --- TESTING THE SYSTEM ---
const myContacts = new ContactManager();

myContacts.addContact("Adebayo", "08012345678");
myContacts.addContact("Chinelo", "08198765432");
myContacts.addContact("Musa", "09055544433");

myContacts.viewForward();
myContacts.viewBackward();

myContacts.quickLookup("Chinelo"); // Fast O(1)

myContacts.searchContacts("ade"); // Substring match