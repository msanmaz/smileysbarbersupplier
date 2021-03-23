import React from 'react';
import { loadDB } from '../../config/firebase'
import { useEffect, useState } from 'react'







export const Item = (props) => {

    return (
<div>
    Mert
</div>
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
            content['img'] = result.data().caption;
            content['name'] = result.data().image;
            content['desc'] = result.data().Balkon;
            content['category'] = result.data().location;
            content['brand'] = result.data().price;
            content['volume'] = result.data().Salon;
        });

    return {
        props: JSON.parse(JSON.stringify(content))

    }
}
export default Item





