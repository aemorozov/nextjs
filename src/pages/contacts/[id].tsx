import Head from "next/head"
import ContactInfo from "@/components/ContactInfo"

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { contact: data }
  }
}

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