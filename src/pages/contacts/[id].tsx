import Heading from "@/components/Heading"
import Head from "next/head"
import ContactInfo from "@/components/ContactInfo"

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

const Contact = ({ contact }: { contact: User }) => {
    return (
      <>
        <Head>
          <title>Contact</title>
        </Head>
        <ContactInfo contact={ contact } />
      </>
    )
  }
  
  export default Contact