export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = "UC0KdIoPfAh_aKEOcBlexMMw";

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
    );
    const data = await response.json();
    const subscriberCount = data.items[0].statistics.subscriberCount;
    res.status(200).json({ subscriberCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscriber count' });
  }
}
