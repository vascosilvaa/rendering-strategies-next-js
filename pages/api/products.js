export default async function handler(req, res) {
  try {
    // Artificial delay of 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch(
      "https://fakerapi.it/api/v2/products?_quantity=10",
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cryptocurrency data" });
  }
}
