export default function handler(req, res) {
  console.log('Hello from handler');
  res.status(200).json({ text: 'Hello' });
}
