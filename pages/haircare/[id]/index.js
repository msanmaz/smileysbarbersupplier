import { loadDB } from '../../../config/firebase'
import Layout from '../../../layout/layout'

const HairProducts = (props) => {
    console.log(props)
    return(
<>
<div className="mx-20">
Mert

{props.name}
{props.brand}
</div>

</>
    )

  }
  


  export async function getStaticPaths() {
    let result = await new Promise((resolve, reject) => {
        loadDB().firestore()
            .collection('hair')
            .get()
            .then(snapshot => {
                let data = []
                snapshot.forEach((doc) => {
                    data.push(
                        Object.assign({
                            id: doc.id
                        }, doc.data())
                    )
                })
                resolve(data)
            })
            .catch(error => {
                reject([])
            })
    })
    return {
        paths: result.map(character => {
            return {
                params: { id: character.id }
            }
        }),
        fallback: false
    }
}


export const getStaticProps = async ({ params }) => {
    const content = {}
    await loadDB().firestore()
        .collection('hair')
        .doc(params.id)
        .get()
        .then(result => {
            content['id'] = params.id;
            content['img'] = result.data().img;
            content['name'] = result.data().name;
            content['desc'] = result.data().desc;
            content['category'] = result.data().category;
            content['brand'] = result.data().brand;
            content['volume'] = result.data().volume;
        });
    return {
        props: JSON.parse(JSON.stringify(content))
    }
    
}
HairProducts.Layout= Layout
export default HairProducts