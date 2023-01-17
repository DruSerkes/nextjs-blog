// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  const { body } = req;
  const text = body.foo ?? 'Hello' // Handle both GET and POST requests
  res.status(200).json({ text });
}