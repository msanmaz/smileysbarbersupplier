import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Layout from '../layout/layout'

export default function Home() {
  return (
    <div>
<Hero/>
<Categories/>
    </div>
    
  )
}
Home.Layout = Layout;