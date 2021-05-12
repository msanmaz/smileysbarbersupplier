// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import algoliasearch from "algoliasearch"

const client = algoliasearch("MCMIFXPG08", "b04ed2076613926884b9309b2c1de20e")
const algoliaHandler = async (req, res) => {
  const index = client.initIndex('SmileysBarber')

  const product = await index.saveObject({
    objectID: 'myId',
    name: 'Sneakers',
    price: 1000
  })

  res.send(product)
}

export default algoliaHandler