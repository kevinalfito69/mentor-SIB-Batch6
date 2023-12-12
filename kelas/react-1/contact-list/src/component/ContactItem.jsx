/* eslint-disable react/prop-types */

import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";
export default function ContactItem({ imageUrl, name, tag }) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    );
}
