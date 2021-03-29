import Card from '../components/Card'
import Button from '../components/Button'
import { loadDB } from '../config/firebase'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Layout from '../layout/layout'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const printButtonLabel = (event) => {
    setAim(event.target.name)
  };
  const [products, setProducts] = useState();
  const [aim, setAim] = useState('newest')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let firebase = loadDB();
      firebase.firestore()
        .collection("hair")
        .where('type', '==', `${aim}`)
        .onSnapshot(snap => {
          const desc = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setProducts(desc);
          setLoading(false)
        });
    }, 300)

  }, [aim]);

  useEffect(() => {
    console.log(products)
    console.log(aim)
  })
  return (
    <div>
      <Hero />
      <Categories />
      <div className="flex justify-center my-4">
        <p className="font-bold text-2xl md:text-3xl">Recommended Products</p>
      </div>
      <div className="flex justify-center space-x-4 my-4">
        <Button buttons={["newest", "popular", "Featured"]}
          doSomethingAfterClick={printButtonLabel}
        />

      </div>
      {loading ? "Loading Component Will be gone in 2 sec" :
        <div className="flex flex-wrap pl-12">
          {products.map(product =>
            <Link href="/products/[id]" as={'/products/' + product.id}>
              <div className="md:px-6 px-auto pr-6">
                <Card gorsel={product.img} key={product.id} brand={product.brand} cat={product.cat} volume={product.volume} nam={product.name} />

              </div>

            </Link>
          )}

        </div>
      }



    </div>

  )
}
Home.Layout = Layout;