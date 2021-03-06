/* code from functions/emotions-read-all.js */
import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  console.log("Function `emotions-read-all` invoked")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_emotions"))))
  .then((response) => {
    const emotionsRefs = response.data
    console.log("emotions refs", emotionsRefs)
    console.log(`${emotionsRefs.length} emotions found`)
    // create new query out of emotions refs. http://bit.ly/2LG3MLg
    const getAllEmotionsDataQuery = emotionsRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllEmotionsDataQuery).then((ret) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(ret)
      })
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}