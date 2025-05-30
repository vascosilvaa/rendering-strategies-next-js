export default async function handler(req, res) {
  try {
    // real world scenario: add some kind of safeguards/validation

    await res.revalidate("/isr");
    return res.json({ revalidated: true, now: new Date().toISOString() });
  } catch (err) {
    return res.status(500).send("Error revalidating page");
  }
}
