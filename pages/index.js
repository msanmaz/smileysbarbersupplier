import Card from '../components/Card'
import Button from '../components/Button'

import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Layout from '../layout/layout'

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <div className="flex justify-center my-4">
        <p className="font-bold text-2xl md:text-3xl">Recommended Products</p>
      </div>
      <div className="flex justify-center space-x-4 my-4">
      <Button purpose="Featured"/>
        <Button purpose="Popular"/>
        <Button purpose="Newest"/>

      </div>
      <div className="flex flex-wrap">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      </div>

    </div>

  )
}
Home.Layout = Layout;