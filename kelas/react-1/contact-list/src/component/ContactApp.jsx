import { getData } from "../data/data";
import ContactList from "./ContactList";

export default function ContactApp() {
    const contacts = getData();
    return (
        <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}
