import Heading from "./Heading";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

const ContactInfo = ({ contact }: { contact: User }) => {
    const { name, email, address } = contact || {}
    const { street, suite, city, zipcode } = address || {}

    if(!contact) {
        return (<Heading tag="h3" text="Empty contact" />)
    }

    return (
        <>
            <Heading tag="h3" text={name} />
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {street}, {suite}, {city}, {zipcode}
            </div>
        </>
    )
}

export default ContactInfo