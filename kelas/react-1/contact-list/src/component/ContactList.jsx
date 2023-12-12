/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";

export default function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem key={contact.id} {...contact} />
            ))}
        </div>
    );
}
