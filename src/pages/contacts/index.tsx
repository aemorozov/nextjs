import Heading from "@/components/Heading"
import Head from "next/head"
// import { useState, useEffect } from "react"

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { contacts: data }
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

const Contacts = ({ contacts }: { contacts: User[] }) => {

  // const [contacts, setContacts] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json()
  //     setContacts(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading tag="h1" text="Contacts list:" />
      <ul>
        {contacts && contacts.map(({ id, name, email }: { id: number, name: string, email: string}) => {
          return(
            <li key={id}><strong>{name}</strong> ({email})</li>
          )
        })}
      </ul>
    </>
  )
}

export default Contacts