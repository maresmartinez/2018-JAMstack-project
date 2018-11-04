/* code from functions/emotions-delete-batch.js */
import faunadb from 'faunadb'
import getId from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body)
  console.log('data', data)
  console.log("Function `emotions-delete-batch` invoked", data.ids)
  // construct batch query from IDs
  const deleteAllCompletedEmotionsQuery = data.ids.map((id) => {
    return q.Delete(q.Ref(`classes/emotions/${id}`))
  })
  // Hit fauna with the query to delete the completed items
  return client.query(deleteAllCompletedEmotionsQuery)
  .then((response) => {
    console.log("success", response)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}