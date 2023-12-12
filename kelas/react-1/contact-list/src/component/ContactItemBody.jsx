/* eslint-disable react/prop-types */
export default function ContactItemBody({ name, tag }) {
    return (
        <div className="contact-item__body">
            <h3 className="contact-item__name">{name}</h3>
            <p className="contact-username">@{tag}</p>
        </div>
    );
}
