const { Router } = require('express')
const router = Router()

const Picture = require('../../models').picture

router.post('/list', async (req, res, next) => {
  const response = await Picture.list()
  res.json(response)
})

router.post('/item', async (req, res, next) => {
  console.log('!!!! inside picture item')
  const iPictureID = req.body.iPictureID
  const response = await Picture.item({ iPictureID })
  res.json(response)
})

router.post('/add', async (req, res, next) => {
  const formdata = req.body
  console.log('server', formdata)
  const response = await Picture.add(formdata)
  return res.json(response)

  // try {
  //   const formdata = req.body.formdata
  //   console.log('!!!', formdata)
  //   const response = await Artist.add({ formdata })
  //   if(response) {
  //     return res.json(response);
  //   }
  //   throw new Error("Can't create Artist");
  // }
  // catch (error) {
  //   return res.status(500).send(error.message);
  // }
})

router.post('/delete', async (req, res, next) => {
  // const iArtistID = req.body.iArtistID
  // const response = await Artist.delete({ iArtistID })
  // return res.json(response);
  try {
    const iPictureID = req.body.iPictureID
    const response = await Picture.delete({ iPictureID })
    if (response) {
      return res.json(response)
    }
    throw new Error('Picture not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

module.exports = router
