export default async function handler(req, res) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}