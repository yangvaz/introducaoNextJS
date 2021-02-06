export default (req, res) => {
  const date = new Date()

  res.setHeader('Cache-control', 's-max-age=10, stale-while-revalidate'); 
  // necessita do deploy pra que funcione

  res.status(200).json({
    date: date.toUTCString(),
  })
}
