// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // Handle both GET and POST requests
  const { body } = req;
  try {
    const text = JSON.parse(body).foo ?? 'Oh, Hello!'
    res.status(200).json({ text });
  } catch (e) {
    const text = body.foo ?? 'Hello'
    res.status(200).json({ text });
  }
}