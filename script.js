async function updateSubscriberCount() {
  try {
    const response = await fetch('/api');
    const data = await response.json();
    const count = data.subscriberCount;
    document.getElementById('subCount').innerText = `Subscribers: ${Number(count).toLocaleString()}`;
  } catch (error) {
    document.getElementById('subCount').innerText = 'Error fetching count';
  }
}

updateSubscriberCount();
setInterval(updateSubscriberCount, 10000);
